import { Injectable, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs/operators';
import { CoursesApiService } from './courses-api.service';
import { CoursesState } from './courses.state';
import { Course } from '../models/course.model';
import { CourseStatus } from '../enums/course-status.enum';
import { GetAllModel } from '../../../core/models/get-all.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesFacade {
  private readonly apiService = inject(CoursesApiService);
  private readonly state = inject(CoursesState);
  private readonly destroyRef = inject(DestroyRef);

  // Expose Signals from state
  readonly courses = this.state.courses;
  readonly totalCount = this.state.totalCount;
  readonly selectedCourse = this.state.selectedCourse;
  readonly loading = this.state.loading;
  readonly error = this.state.error;

  private lastParams: GetAllModel = {
    page: 1,
    limit: 5,
  };

  loadCourses(params: GetAllModel): void {
    this.lastParams = { ...this.lastParams, ...params };

    this.state.setLoading(true);
    this.state.setError(null);

    this.apiService
      .getAllCourses(this.lastParams)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.state.setLoading(false)),
      )
      .subscribe({
        next: (response) => {
          this.state.setCourses(response.data.courses, response.data.total);
        },
        error: (err) => {
          this.state.setError(err.message ?? 'Failed to load courses');
        },
      });
  }

  reload(): void {
    this.loadCourses(this.lastParams);
  }

  loadCourseById(id: string): void {
    this.state.setLoading(true);
    this.state.setError(null);

    this.apiService
      .getCourseById(id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.state.setLoading(false)),
      )
      .subscribe({
        next: (response) => {
          this.state.setSelectedCourse(response.data);
        },
        error: (err) => {
          this.state.setError(err.message ?? 'Failed to load course details');
        },
      });
  }

  createCourse(course: Omit<Course, 'id' | 'createdDate'>, callback?: () => void): void {
    this.state.setLoading(true);
    this.state.setError(null);

    this.apiService
      .createCourse(course)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.state.setLoading(false)),
      )
      .subscribe({
        next: () => {
          this.reload();
          callback?.();
        },
        error: (err) => {
          this.state.setError(err.message ?? 'Failed to create course');
        },
      });
  }

  updateCourse(id: string, course: Partial<Course>, callback?: () => void): void {
    this.state.setLoading(true);
    this.state.setError(null);

    this.apiService
      .updateCourse(id, course)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.state.setLoading(false)),
      )
      .subscribe({
        next: () => {
          this.reload();
          callback?.();
        },
        error: (err) => {
          this.state.setError(err.message ?? 'Failed to update course');
        },
      });
  }

  deleteCourse(id: string): void {
    this.state.setLoading(true);
    this.state.setError(null);

    this.apiService
      .deleteCourse(id)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.state.setLoading(false)),
      )
      .subscribe({
        next: () => {
          this.reload();
        },
        error: (err) => {
          this.state.setError(err.message ?? 'Failed to delete course');
        },
      });
  }

  clearSelectedCourse(): void {
    this.state.setSelectedCourse(null);
  }
}
