import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { CourseStatus } from '../enums/course-status.enum';

@Injectable({
  providedIn: 'root',
})
export class CoursesApiService {
  private mockCourses: Course[] = [
    {
      id: '1',
      courseName: 'Angular Fundamentals',
      instructorName: 'Ahmed Ali',
      category: 'Frontend',
      duration: 20,
      price: 1500,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-01',
      description: 'Learn the fundamentals of Angular framework.'
    },
    {
      id: '2',
      courseName: 'Node.js Backend',
      instructorName: 'Sara Khan',
      category: 'Backend',
      duration: 30,
      price: 2000,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-10',
      description: 'Build scalable APIs with Node.js and Express.'
    },
    {
      id: '3',
      courseName: 'UI/UX Design Masterclass',
      instructorName: 'John Doe',
      category: 'Design',
      duration: 15,
      price: 1200,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-15',
      description: 'Master the user experience design principles.'
    },
    {
      id: '4',
      courseName: 'React for Beginners',
      instructorName: 'Ali Reza',
      category: 'Frontend',
      duration: 25,
      price: 1800,
      status: CourseStatus.ARCHIVED,
      createdDate: '2026-05-20',
      description: 'A beginner-friendly guide to building web apps with React.'
    },
    {
      id: '5',
      courseName: 'DevOps with Docker and Kubernetes',
      instructorName: 'Elena Rostova',
      category: 'DevOps',
      duration: 40,
      price: 3000,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-20',
      description: 'Automate deployment pipelines and manage containers.'
    },
    {
      id: '6',
      courseName: 'Java Programming',
      instructorName: 'Mohamed',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Java programming language.'
    },
    {
      id: '7',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '8',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '9',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '10',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '11',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '12',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '13',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '14',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '15',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '16',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '17',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '18',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '19',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    },
    {
      id: '20',
      courseName: 'Python for Beginners',
      instructorName: 'John Doe',
      category: 'Backend',
      duration: 35,
      price: 2500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-25',
      description: 'Learn Python programming language.'
    }
  ];

  getAllCourses(params: {
    page: number;
    limit: number;
    search?: string;
    status?: CourseStatus | null;
    sort?: 'asc' | 'desc';
  }): Observable<{ data: Course[]; total: number }> {
    let filtered = [...this.mockCourses];

    // 1. Search filter (by course name)
    if (params.search) {
      const query = params.search.toLowerCase();
      filtered = filtered.filter(c => c.courseName.toLowerCase().includes(query));
    }

    // 2. Status filter
    if (params.status) {
      filtered = filtered.filter(c => c.status === params.status);
    }

    // 3. Sorting (by courseName, or createdDate, here we sort by courseName as default)
    if (params.sort) {
      filtered.sort((a, b) => {
        const nameA = a.courseName.toLowerCase();
        const nameB = b.courseName.toLowerCase();
        if (params.sort === 'asc') {
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        } else {
          return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
        }
      });
    }

    // 4. Pagination
    const total = filtered.length;
    const startIndex = (params.page - 1) * params.limit;
    const paginatedData = filtered.slice(startIndex, startIndex + params.limit);

    return of({ data: paginatedData, total }).pipe(delay(400));
  }

  getCourseById(id: string): Observable<{ data: Course }> {
    const course = this.mockCourses.find(c => c.id === id);
    if (course) {
      return of({ data: { ...course } }).pipe(delay(300));
    }
    return throwError(() => new Error('Course not found'));
  }

  createCourse(course: Omit<Course, 'id' | 'createdDate'>): Observable<{ data: Course }> {
    const newCourse: Course = {
      ...course,
      id: Math.random().toString(36).substring(2, 9),
      createdDate: new Date().toISOString().split('T')[0]
    };
    this.mockCourses = [newCourse, ...this.mockCourses];
    return of({ data: newCourse }).pipe(delay(400));
  }

  updateCourse(id: string, courseData: Partial<Course>): Observable<{ data: Course }> {
    const index = this.mockCourses.findIndex(c => c.id === id);
    if (index !== -1) {
      this.mockCourses[index] = { ...this.mockCourses[index], ...courseData };
      return of({ data: { ...this.mockCourses[index] } }).pipe(delay(400));
    }
    return throwError(() => new Error('Course not found'));
  }

  deleteCourse(id: string): Observable<{ success: boolean }> {
    this.mockCourses = this.mockCourses.filter(c => c.id !== id);
    return of({ success: true }).pipe(delay(400));
  }
}
