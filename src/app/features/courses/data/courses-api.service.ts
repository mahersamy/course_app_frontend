import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Course } from '../models/course.model';
import { CourseStatus } from '../enums/course-status.enum';
import { GetAllModel } from '../../../core/models/get-all.model';
import { GlobalResponse } from '../../../core/models/response-global.model';

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
      description: 'Learn the fundamentals of Angular framework.',
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
      description: 'Build scalable APIs with Node.js and Express.',
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
      description: 'Master the user experience design principles.',
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
      description: 'A beginner-friendly guide to building web apps with React.',
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
      description: 'Automate deployment pipelines and manage containers.',
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
      description: 'Learn Java programming language.',
    },
    {
      id: '7',
      courseName: 'Python for Data Science',
      instructorName: 'Sarah Johnson',
      category: 'Backend',
      duration: 40,
      price: 2800,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-18',
      description: 'Master Python for data analysis and machine learning.',
    },
    {
      id: '8',
      courseName: 'TypeScript Advanced',
      instructorName: 'David Lee',
      category: 'Frontend',
      duration: 28,
      price: 1950,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-21',
      description: 'Advanced TypeScript patterns and best practices.',
    },
    {
      id: '9',
      courseName: 'Vue.js Masterclass',
      instructorName: 'Emma Wilson',
      category: 'Frontend',
      duration: 32,
      price: 1850,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-19',
      description: 'Build modern web applications with Vue.js framework.',
    },
    {
      id: '10',
      courseName: 'AWS Cloud Solutions',
      instructorName: 'Chris Brown',
      category: 'DevOps',
      duration: 45,
      price: 3200,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-17',
      description: 'Deploy and manage applications on Amazon Web Services.',
    },
    {
      id: '11',
      courseName: 'GraphQL API Development',
      instructorName: 'Michael Chen',
      category: 'Backend',
      duration: 26,
      price: 2100,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-23',
      description: 'Build modern APIs using GraphQL technology.',
    },
    {
      id: '12',
      courseName: 'Mobile App Development with Flutter',
      instructorName: 'Priya Patel',
      category: 'Frontend',
      duration: 35,
      price: 2300,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-14',
      description: 'Create cross-platform mobile apps with Flutter.',
    },
    {
      id: '13',
      courseName: 'Database Design and SQL',
      instructorName: 'James Martinez',
      category: 'Backend',
      duration: 28,
      price: 1700,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-12',
      description: 'Master SQL and relational database design patterns.',
    },
    {
      id: '14',
      courseName: 'Web Security Best Practices',
      instructorName: 'Lisa Anderson',
      category: 'Backend',
      duration: 24,
      price: 1900,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-09',
      description: 'Learn to secure your web applications from attacks.',
    },
    {
      id: '15',
      courseName: 'CSS and Modern Styling',
      instructorName: 'Tom Robinson',
      category: 'Frontend',
      duration: 18,
      price: 1300,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-11',
      description: 'Master CSS Grid, Flexbox, and animation techniques.',
    },
    {
      id: '16',
      courseName: 'MongoDB and NoSQL',
      instructorName: 'Jessica Williams',
      category: 'Backend',
      duration: 22,
      price: 1600,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-08',
      description: 'Design and implement NoSQL databases with MongoDB.',
    },
    {
      id: '17',
      courseName: 'Figma UI Design',
      instructorName: 'Nicole Garcia',
      category: 'Design',
      duration: 20,
      price: 1400,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-16',
      description: 'Create beautiful user interfaces with Figma tool.',
    },
    {
      id: '18',
      courseName: 'Git and Version Control',
      instructorName: 'Robert Taylor',
      category: 'DevOps',
      duration: 12,
      price: 800,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-13',
      description: 'Master Git workflows and collaborative development.',
    },
    {
      id: '19',
      courseName: 'Testing and Test Automation',
      instructorName: 'Amanda White',
      category: 'Backend',
      duration: 30,
      price: 2200,
      status: CourseStatus.ACTIVE,
      createdDate: '2026-06-05',
      description: 'Write effective unit tests and automate testing.',
    },
    {
      id: '20',
      courseName: 'Introduction to Machine Learning',
      instructorName: 'Dr. Raj Kumar',
      category: 'Backend',
      duration: 50,
      price: 3500,
      status: CourseStatus.DRAFT,
      createdDate: '2026-06-02',
      description: 'Fundamentals of machine learning algorithms and models.',
    },
  ];

  getAllCourses(
    params: GetAllModel,
  ): Observable<GlobalResponse<{ courses: Course[]; total: number }>> {
    let filtered = [...this.mockCourses];

    // 1. Search filter (by course name)
    if (params.search) {
      const query = params.search.toLowerCase();
      filtered = filtered.filter((c) => c.courseName.toLowerCase().includes(query));
    }

    // 2. Status filter
    if (params.status) {
      filtered = filtered.filter((c) => c.status === params.status);
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

    return of({
      data: { courses: paginatedData, total },
      statusCode: 200,
      success: true,
    }).pipe(delay(400));
  }

  getCourseById(id: string): Observable<GlobalResponse<Course>> {
    const course = this.mockCourses.find((c) => c.id === id);
    if (course) {
      return of({
        data: { ...course },
        statusCode: 200,
        success: true,
      }).pipe(delay(300));
    }
    return throwError(() => new Error('Course not found'));
  }

  createCourse(course: Omit<Course, 'id' | 'createdDate'>): Observable<GlobalResponse<Course>> {
    const newCourse: Course = {
      ...course,
      id: Math.random().toString(36).substring(2, 9),
      createdDate: new Date().toISOString().split('T')[0],
    };
    this.mockCourses = [newCourse, ...this.mockCourses];
    return of({
      data: newCourse,
      statusCode: 201,
      success: true,
    }).pipe(delay(400));
  }

  updateCourse(id: string, courseData: Partial<Course>): Observable<GlobalResponse<Course>> {
    const index = this.mockCourses.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.mockCourses[index] = { ...this.mockCourses[index], ...courseData };
      return of({
        data: { ...this.mockCourses[index] },
        statusCode: 200,
        success: true,
      }).pipe(delay(400));
    }
    return throwError(() => new Error('Course not found'));
  }

  deleteCourse(id: string): Observable<GlobalResponse<{ success: boolean }>> {
    this.mockCourses = this.mockCourses.filter((c) => c.id !== id);
    return of({
      data: { success: true },
      statusCode: 200,
      success: true,
    }).pipe(delay(400));
  }
}
