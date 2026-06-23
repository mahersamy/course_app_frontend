import {
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { CoursesFacade } from '../../data/courses.facade';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly coursesFacade = inject(CoursesFacade);
  private readonly messageService  = inject(MessageService);
  


  // expose signals
  readonly course = this.coursesFacade.selectedCourse;
  readonly loading = this.coursesFacade.loading;
  readonly error = this.coursesFacade.error;


  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');

    if (courseId) {
      this.loadCourse(courseId);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid course id' });
      this.goBack();
    }
  }


  private loadCourse(id: string): void {
    this.coursesFacade.loadCourseById(id);
  }


  goBack(): void {
    this.location.back();
  }


  editCourse(): void {
    this.router.navigate(['/courses']);
  }
}