import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  model: any = {};
  cover!: string;
  cover_file: any;
  showError = false;

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
    console.log(form.value)
  }

}
