import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseComponent } from '../course/course.component';
import { KeyValue } from '../enum/key-value';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CourseComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  model: any = {};
  cover!: string|null;
  cover_file: any;
  showError = false;
  courses: any[] = [];

  ngOnInit() {
    this.getCourses();
  }

  getCourses (){
    const data = localStorage.getItem(KeyValue.STORAGE_KEYS);
    //console.log(data);
    if (data)
      this.courses = JSON.parse(data);
  }

  onFileChange(event: any){
    //console.log(event);
    const file = event.target.files[0];
    if (file){
      this.cover_file = file;
      const reader = new FileReader();
      reader.onload = () => {
        const data_url = reader.result!.toString();
        this.cover = data_url;
        //console.log(this.cover);
      }
      this.showError = false;
      reader.readAsDataURL(file);
    }
  }
  onSubmit(form: NgForm){
    if (form.invalid || !this.cover){
      console.log("form invalid");
      form.control.markAllAsTouched();
      if (!this.cover){
        this.showError = true;
      }
      return;
    }
    //console.log(form.value)
    this.saveCourse(form)
    this.clearForm(form)
  }
  clearForm (form: NgForm) {
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }
  saveCourse (form: NgForm){
    const formValue = form.value;
    //console.log(formValue);
    const data = {
      ...formValue, image: this.cover, id: this.courses.length + 1
    }
    this.courses = [...this.courses, data];
    this.setCourseItem(this.courses);
    console.log(this.courses)    
  }
  setCourseItem (data: any){
    localStorage.setItem(KeyValue.STORAGE_KEYS, JSON.stringify(data));
  }
  deleteCourse (course: any){
    this.courses = this.courses.filter(c_item => c_item.id != course.id)
    this.setCourseItem(this.courses);
  }
}
