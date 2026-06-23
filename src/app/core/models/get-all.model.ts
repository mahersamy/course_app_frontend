import { CourseStatus } from '../../features/courses/enums/course-status.enum';

export interface GetAllModel {
  page: number;
  limit: number;
  search?: string;
  status?: CourseStatus | null;
  sort?: 'asc' | 'desc';
  [key: string]: any;
}
