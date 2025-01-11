import { Injectable } from '@angular/core';
import { KeyValue } from '../../enum/key-value';
import { Course } from '../../interfaces/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private course$ = new BehaviorSubject<Course[]>([]);

  get course(){
    return this.course$.asObservable();
  }
  getCourses (): Course[]{
    const data = localStorage.getItem(KeyValue.STORAGE_KEYS);
    //console.log(data);
    if (data){
      const courses = JSON.parse(data);
      this.updateCourses(courses);
      console.log(courses);
      return courses;
    }
    return [];
  }
  addCourse(data: Course){
    const courses = this.course$.value;
    const newCourses = [...courses, {...data, id: courses.length + 1}]
    this.updateCourses(newCourses);
    this.setCourseItem(newCourses)
    return newCourses;
  }
  updateCourses(data:Course[]){
    this.course$.next(data)
  }
  setCourseItem (data: any){
    localStorage.setItem(KeyValue.STORAGE_KEYS, JSON.stringify(data));
  }
  deleteCourse (course: any){
    let courses = this.course$.value;
    courses = courses.filter(c_item => c_item.id != course.id)
    this.updateCourses(courses);
    this.setCourseItem(courses);
  }
}
