import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-create-about',
  templateUrl: './create-about.component.html',
  styleUrls: ['./create-about.component.scss']
})
export class CreateAboutComponent implements OnInit {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  constructor(private about: AboutService, private router : Router) { }

  ngOnInit(): void {
  }
  AboutFormCreate : FormGroup = new FormGroup({
   
 
    name: new FormControl(
      '',Validators.required
    ) ,
   
    content:new FormControl(
      '',Validators.required
    ) ,
    image:new FormControl(
      '',Validators.required
    ) ,
    facebook:new FormControl(
      '',Validators.required
    ) ,
   
    intagram:new FormControl(
      '',Validators.required
    ) ,
       
    github:new FormControl(
      '',Validators.required
    ) ,
  })
  OnCreate(){
   try {
    this.about.create(this.AboutFormCreate.value).subscribe(data =>{
      this.router.navigate(['/admin/gioi-thieu/index']);
    })
   } catch (error) {
    alert(error);
   }
  }
}
