import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  Courses: string[] = [
    'Angular',
    'JavaScript',
    'Node.js',
    'TypeScript',
  ];

  getCourses() {
    return this.Courses;
  }
}