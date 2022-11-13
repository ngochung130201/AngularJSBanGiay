import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-indexblog',
  templateUrl: './indexblog.component.html',
  styleUrls: ['./indexblog.component.scss']
})
export class IndexblogComponent implements OnInit {
  blogs : Array<any> = [];
  constructor(private blog : BlogService) { }

  ngOnInit(): void {
    this.blog.getAll().subscribe(data=>{
      this.blogs = data;
    })
  }
  OnDelete(id:any){

  }
}
