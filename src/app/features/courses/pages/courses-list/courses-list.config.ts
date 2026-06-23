import { BadgeSeverity } from "../../../../shared/components/data-table/enums/badge-severity.enum";
import { TableColumnType } from "../../../../shared/components/data-table/enums/colmun-type.enum";
import { ColumnConfig } from "../../../../shared/components/data-table/models/colmun-config.model";
import { CourseStatus } from "../../enums/course-status.enum";

export const  CoursesTableConfig: ColumnConfig[] =[
      {
        field: 'id',
        header: 'ID',
        type: TableColumnType.ID,
      },
      {
        field: 'courseName',
        header: 'Course Name',
        type: TableColumnType.TEXT,
      },
      {
        field: 'instructorName',
        header: 'Instructor',
        type: TableColumnType.TEXT,
      },
      {
        field: 'category',
        header: 'Category',
        type: TableColumnType.TEXT,
      },
      {
        field: 'duration',
        header: 'Duration',
        type: TableColumnType.TEXT,
        suffix: ' hrs',
      },
      {
        field: 'price',
        header: 'Price',
        type: TableColumnType.CURRENCY,
      },
      {
        field: 'createdDate',
        header: 'Created Date',
        type: TableColumnType.DATE,
      },
      {
        field: 'status',
        header: 'Status',
        type: TableColumnType.STATUS,
        options: [
          {
            label: 'Active',
            value: CourseStatus.ACTIVE,
            severity: BadgeSeverity.SUCCESS,
          },
          {
            label: 'Draft',
            value: CourseStatus.DRAFT,
            severity: BadgeSeverity.WARNING,
          },
          {
            label: 'Archived',
            value: CourseStatus.ARCHIVED,
            severity: BadgeSeverity.SECONDARY,
          },
        ],
      },
    ]