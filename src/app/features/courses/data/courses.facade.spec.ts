import { TestBed } from '@angular/core/testing';

import { CoursesFacade } from './courses.facade';

describe('CoursesFacade', () => {
  let service: CoursesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
