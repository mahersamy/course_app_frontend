import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicForm } from '../../../../shared/components/dynamic-form/dynamic-form';
import { LoadingDirective } from '../../../../shared/directives/loading.diractive';
import { CoursesFormConfig } from './courses-create.config';
import { CoursesFacade } from '../../data/courses.facade';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicForm, LoadingDirective],
  templateUrl: './courses-create.component.html',
  styleUrl: './courses-create.component.scss',
})
export class CoursesCreateComponent implements OnInit {
  private readonly dialogRef = inject(DynamicDialogRef);
  private readonly dialogConfig = inject(DynamicDialogConfig);
  private readonly coursesFacade = inject(CoursesFacade);

  readonly coursesFormConfig = CoursesFormConfig;
  coursesForm!: FormGroup;
  isLoading = signal(false);
  isEditMode = signal(false);
  courseId = signal<string | null>(null);

  ngOnInit(): void {
    // If edit mode, the data will be set on form initialization
  }

  onFormReady(form: FormGroup) {
    this.coursesForm = form;

    if (this.dialogConfig.data) {
      this.isEditMode.set(true);
      const data = this.dialogConfig.data as Course;
      this.courseId.set(data.id);

      this.coursesForm.patchValue({
        courseName: data.courseName,
        instructorName: data.instructorName,
        category: data.category,
        duration: data.duration,
        price: data.price,
        status: data.status,
        description: data.description
      });
    }
  }

  onSubmit() {
    if (this.coursesForm?.valid) {
      const formValue = { ...this.coursesForm.value };

      this.isLoading.set(true);

      const callback = () => {
        this.isLoading.set(false);
        this.dialogRef.close(true);
      };

      if (this.isEditMode() && this.courseId()) {
        this.coursesFacade.updateCourse(this.courseId()!, formValue, callback);
      } else {
        this.coursesFacade.createCourse(formValue, callback);
      }
    } else {
      this.coursesForm?.markAllAsTouched();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
