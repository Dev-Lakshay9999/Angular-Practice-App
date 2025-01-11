import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  @Input() courses: any;
  @Input() isAdmin = false;
  @Output() delCourse = new EventEmitter();


  deleteCourse(course: any) {
    this.delCourse.emit(course);
  }
}
