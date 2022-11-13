import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private blog : BlogService) { }
   blogAll : Array<any> = [];
  ngOnInit(): void {
    this.blog.getAll().subscribe(data =>{
      this.blogAll = data;
    })
  }

}
