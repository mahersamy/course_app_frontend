import {
  Component,
  OnInit,
  inject,
  signal,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';

import { DataTable } from '../../../../shared/components/data-table/data-table';
import { DataTableConfig } from '../../../../shared/components/data-table/services/data-table-config';
import { AppPaginator } from '../../../../shared/components/paginator/paginator';
import {
  PaginatorConfig,
  PageChangeEvent,
} from '../../../../shared/components/paginator/models/pagination.model';

import { FilterPanel } from '../../../../shared/components/filter-panel/filter-panel/filter-panel';
import {
  FilterConfig,
  FilterFieldType,
  FilterOutput,
} from '../../../../shared/components/filter-panel/interface/filter-panel.models';

import { CoursesFacade } from '../../data/courses.facade';
import { CoursesCreateComponent } from '../create-course/courses-create.component';
import { Course } from '../../models/course.model';
import { CourseStatus } from '../../enums/course-status.enum';
import { CoursesTableConfig } from './courses-list.config';


@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DataTable,
    AppPaginator,
    FilterPanel,
  ],
  providers: [DataTableConfig],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent implements OnInit {
  private readonly coursesFacade = inject(CoursesFacade);
  private readonly dataTableConfig = inject(DataTableConfig);
  private readonly dialogService = inject(DialogService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly router = inject(Router);

  searchVal = '';
  selectedStatus: CourseStatus | null = null;
  sortDir: 'asc' | 'desc' = 'desc';

  paginatorConfig = signal<PaginatorConfig>({
    totalCount: 0,
    pageNumber: 1,
    pageSize: 5,
    totalPages: 1,
  });

  filterConfigs: FilterConfig[] = [
    {
      type: FilterFieldType.SELECT,
      controlName: 'status',
      label: 'Status',
      placeholder: 'All Statuses',
      select_list: [
        { label: 'Active', value: CourseStatus.ACTIVE },
        { label: 'Draft', value: CourseStatus.DRAFT },
        { label: 'Archived', value: CourseStatus.ARCHIVED },
      ],
    },
  ];

  dialogRef?: DynamicDialogRef | null;

  constructor() {
    effect(() => {
      this.dataTableConfig.tableConfig.rows.set(
        this.coursesFacade.courses()
      );
    });

    effect(() => {
      this.dataTableConfig.tableConfig.loading.set(
        this.coursesFacade.loading()
      );
    });

    effect(() => {
      this.dataTableConfig.tableConfig.isError.set(
        !!this.coursesFacade.error()
      );
    });

    effect(() => {
      const total = this.coursesFacade.totalCount();

      this.paginatorConfig.update((prev) => ({
        ...prev,
        totalCount: total,
        totalPages: Math.ceil(total / prev.pageSize),
      }));
    });
  }

  ngOnInit(): void {
    this.setupTable();
    this.loadInitialData();
  }

  private setupTable(): void {
    this.dataTableConfig.tableConfig.columns.set(CoursesTableConfig);

    this.dataTableConfig.tableConfig.actions.set([
      {
        icon: 'fa-solid fa-eye text-primary',
        func: (course: Course) => this.viewCourse(course),
      },
      {
        icon: 'fa-solid fa-pen-to-square text-warning',
        func: (course: Course) => this.editCourse(course),
      },
      {
        icon: 'fa-solid fa-trash text-danger',
        func: (course: Course) => this.deleteCourse(course),
      },
    ]);
  }

  private loadInitialData(): void {
    this.coursesFacade.loadCourses({
      page: this.paginatorConfig().pageNumber,
      limit: this.paginatorConfig().pageSize,
      search: this.searchVal,
      status: this.selectedStatus,
      sort: this.sortDir,
    });
  }

  onSearchChange(): void {
    this.paginatorConfig.update((prev) => ({
      ...prev,
      pageNumber: 1,
    }));

    this.coursesFacade.loadCourses({
      page: 1,
      limit: this.paginatorConfig().pageSize,
      search: this.searchVal,
      status: this.selectedStatus,
      sort: this.sortDir,
    });
  }

  onApplyFilter(event: FilterOutput): void {
    this.sortDir = event.sort;
    this.selectedStatus = event['status'] || null;

    this.paginatorConfig.update((prev) => ({
      ...prev,
      pageNumber: 1,
    }));

    this.coursesFacade.loadCourses({
      page: 1,
      limit: this.paginatorConfig().pageSize,
      search: event.search,
      status: this.selectedStatus,
      sort: this.sortDir,
    });
  }

  onPageChange(event: PageChangeEvent): void {
    this.paginatorConfig.update((prev) => ({
      ...prev,
      pageNumber: event.page,
      pageSize: event.limit,
      totalPages: Math.ceil(prev.totalCount / event.limit),
    }));

    this.coursesFacade.loadCourses({
      page: event.page,
      limit: event.limit,
      search: this.searchVal,
      status: this.selectedStatus,
      sort: this.sortDir,
    });
  }

  openCreateForm(data?: Course): void {
    this.dialogRef = this.dialogService.open(
      CoursesCreateComponent,
      {
        header: data ? 'Edit Course' : 'Create New Course',
        data: data ?? null,
        width: '450px',
        position: 'right',
        pt: {
          mask: { class: 'premium-dialog-mask' },
          root: { class: 'premium-dialog-root' },
          header: { class: 'premium-dialog-header' },
          title: { class: 'premium-dialog-title' },
          content: { class: 'premium-dialog-content' },
          pcCloseButton: {
            root: {
              class: 'premium-dialog-close-btn',
            },
          },
        },
      }
    );

    this.dialogRef?.onClose.subscribe((refresh) => {
      if (refresh) {
        this.loadInitialData();
      }
    });
  }

  viewCourse(course: Course): void {
    this.router.navigate(['/courses', course.id]);
  }

  editCourse(course: Course): void {
    this.openCreateForm(course);
  }

  deleteCourse(course: Course): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',

      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },

      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },

      accept: () => {
        this.coursesFacade.deleteCourse(course.id);
      },
    });
  }
}