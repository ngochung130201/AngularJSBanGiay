import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-index-about',
  templateUrl: './index-about.component.html',
  styleUrls: ['./index-about.component.scss']
})
export class IndexAboutComponent implements OnInit {

  constructor(private about: AboutService,private _router : ActivatedRoute,private router : Router) { }
  aboutList : any;
  ngOnInit(): void {
    this.about.getAll().subscribe(data =>{
     this.aboutList = data;
    })
  }
  OnDelete(id:any){
   
   try {
    this.about.delete(id).subscribe(data =>{
      this.about.getAll().subscribe(data =>{
        this.aboutList = data;
        alert('Xóa thành công !!')
      })
    });
    
   } catch (error) {
    alert(error);
   }
  }

}
