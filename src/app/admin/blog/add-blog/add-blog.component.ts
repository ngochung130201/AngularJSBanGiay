import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {

  constructor(private blog : BlogService,private router : Router) { }
  BlogFormCreate : FormGroup = new FormGroup({


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
    this.blog.create(this.BlogFormCreate.value).subscribe(data =>{
      this.router.navigate(['/admin/tin-tuc/index']);
    })
   } catch (error) {
    alert(error);
   }
  }
  ngOnInit(): void {
  }

}
