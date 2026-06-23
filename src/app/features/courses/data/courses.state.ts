import { Injectable, signal, computed } from '@angular/core';
import { Course } from '../models/course.model';

export interface CoursesStateModel {
  courses: Course[];
  selectedCourse: Course | null;
  loading: boolean;
  error: string | null;
  totalCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class CoursesState {
  private readonly state = signal<CoursesStateModel>({
    courses: [],
    selectedCourse: null,
    loading: false,
    error: null,
    totalCount: 0,
  });

  // Selectors
  readonly courses = computed(() => this.state().courses);
  readonly totalCount = computed(() => this.state().totalCount);
  readonly selectedCourse = computed(() => this.state().selectedCourse);
  readonly loading = computed(() => this.state().loading);
  readonly error = computed(() => this.state().error);

  // State Updaters
  setCourses(courses: Course[], totalCount: number): void {
    this.state.update(state => ({
      ...state,
      courses,
      totalCount,
    }));
  }

  setSelectedCourse(course: Course | null): void {
    this.state.update(state => ({
      ...state,
      selectedCourse: course,
    }));
  }

  setLoading(loading: boolean): void {
    this.state.update(state => ({
      ...state,
      loading,
    }));
  }

  setError(error: string | null): void {
    this.state.update(state => ({
      ...state,
      error,
    }));
  }

  reset(): void {
    this.state.set({
      courses: [],
      selectedCourse: null,
      loading: false,
      error: null,
      totalCount: 0,
    });
  }
}