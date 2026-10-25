import { Component, signal } from '@angular/core';
import { CourseService } from '../course';

@Component({
    selector: 'app-courses',
    imports: [],
    templateUrl: './courses.html',
    styleUrl: './courses.css'
})
export class Courses {
    courseService = new CourseService();
    courses = this.courseService.getCourses();
}