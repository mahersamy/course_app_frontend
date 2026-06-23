import { TestBed } from '@angular/core/testing';

import { CoursesState } from './courses.state';

describe('CoursesState', () => {
  let service: CoursesState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
