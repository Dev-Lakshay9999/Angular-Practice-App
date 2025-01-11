import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { KeyValue } from '../../enum/key-value';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/Course/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  courses: Course[] = [];
  //@Input() courses: any;
  @Input() isAdmin = false;
  //@Output() delCourse = new EventEmitter();
  private courseService = inject(CourseService);
  courseSub!: Subscription;

  ngOnInit() {
    //this.getCourses();
    this.courses = this.courseService.getCourses();
    this.courseSub = this.courseService.course.subscribe({
      next: (course) =>{
        this.courses = course;
      },
      error: (e) => {
        console.log(e)
      }
    });
  }

  // getCourses (){
  //   const data = localStorage.getItem(KeyValue.STORAGE_KEYS);
  //   //console.log(data);
  //   if (data)
  //     this.courses = JSON.parse(data);
  // }

  deleteCourse(course: Course) {
    //this.delCourse.emit(course);
    this.courseService.deleteCourse(course)
  }
  ngOnDestroy() {
    console.log("course destroy")
    if (this.courseSub) this.courseSub.unsubscribe();
  }
}
