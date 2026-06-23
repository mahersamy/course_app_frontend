import { Validators } from '@angular/forms';
import { FormFieldConfig } from '../../../../shared/components/dynamic-form/interfaces/form-config.type';
import { FormInputType } from '../../../../shared/components/dynamic-form/enum/form.enum';
import { CourseStatus } from '../../enums/course-status.enum';

export const CoursesFormConfig: FormFieldConfig[] = [
  {
    type: FormInputType.text,
    controlName: 'courseName',
    label: 'Course Name',
    placeholder: 'Enter course name',
    validators: [Validators.required, Validators.minLength(3)],
    errorMessages: {
      required: 'Course name is required.',
      minlength: 'Course name must be at least 3 characters long.'
    }
  },
  {
    type: FormInputType.text,
    controlName: 'instructorName',
    label: 'Instructor Name',
    placeholder: 'Enter instructor name',
    validators: [Validators.required],
    errorMessages: {
      required: 'Instructor name is required.'
    }
  },
  {
    type: FormInputType.select,
    controlName: 'category',
    label: 'Category',
    placeholder: 'Select a category',
    selectOptions: [
      { label: 'Frontend', value: 'Frontend' },
      { label: 'Backend', value: 'Backend' },
      { label: 'Design', value: 'Design' },
      { label: 'QA', value: 'QA' },
      { label: 'DevOps', value: 'DevOps' }
    ],
    validators: [Validators.required],
    errorMessages: {
      required: 'Category is required.'
    }
  },
  {
    type: FormInputType.number,
    controlName: 'duration',
    label: 'Duration (in Hours)',
    placeholder: 'Enter duration',
    min: 1,
    validators: [Validators.required, Validators.min(1)],
    errorMessages: {
      required: 'Duration is required.',
      min: 'Duration must be greater than 0.'
    }
  },
  {
    type: FormInputType.number,
    controlName: 'price',
    label: 'Price',
    placeholder: 'Enter price',
    min: 0,
    validators: [Validators.required, Validators.min(0)],
    errorMessages: {
      required: 'Price is required.',
      min: 'Price must be a minimum of 0.'
    }
  },
  {
    type: FormInputType.select,
    controlName: 'status',
    label: 'Status',
    placeholder: 'Select status',
    selectOptions: [
      { label: 'Active', value: CourseStatus.ACTIVE },
      { label: 'Draft', value: CourseStatus.DRAFT },
      { label: 'Archived', value: CourseStatus.ARCHIVED }
    ],
    validators: [Validators.required],
    errorMessages: {
      required: 'Status is required.'
    }
  },
  {
    type: FormInputType.textarea,
    controlName: 'description',
    label: 'Description',
    placeholder: 'Enter course description (optional)',
    validators: [Validators.maxLength(500)],
    errorMessages: {
      maxlength: 'Description cannot exceed 500 characters.'
    }
  }
];
