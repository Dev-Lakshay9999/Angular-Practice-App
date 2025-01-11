import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KeyValue } from '../../enum/key-value';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-home',
  //imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CourseComponent]
})
export class HomeComponent {
  //courses: any = [];
  
  ngOnInit() {
    //this.getCourses();
  }

  // name = "Test"

  // changeValue() {
  //   this.name = 'Lakshay'
  // }
  // getCourses (){
  //     const data = localStorage.getItem(KeyValue.STORAGE_KEYS);
  //     //console.log(data);
  //     if (data)
  //       this.courses = JSON.parse(data);
  // }

}
