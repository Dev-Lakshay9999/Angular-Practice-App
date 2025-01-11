import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseComponent } from "../course/course.component";

@Component({
  selector: 'app-home',
  //imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CourseComponent]
})
export class HomeComponent {
  name = "Test"

  changeValue() {
    this.name = 'Lakshay'
  }

}
