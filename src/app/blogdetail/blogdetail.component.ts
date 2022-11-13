import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {

  constructor(private blog : BlogService,private router : ActivatedRoute) { }
  blogDetail: Array<any> = [];
  data : any;
  name : any;
  ngOnInit() {
    const id = this.router.snapshot.params['id'];
    this.getOneBlog(id)
    
  }

   
  getOneBlog(id:any){
    this.blog.getOne(id).subscribe(res =>
      {
        this.data = res
    
      }
          
         
         )
     
   
  }
 

}
