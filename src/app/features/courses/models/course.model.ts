import { CourseStatus } from '../enums/course-status.enum';

export interface Course {
    id: string;
    courseName: string;
    instructorName: string;
    category: string;
    duration: number;
    price: number;
    status: CourseStatus;
    description?: string;
    createdDate: string;
}
