import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private about : AboutService) { }
 aboutList : Array<any> = [];
  ngOnInit(): void {
    this.about.getAll().subscribe(data =>{
     this.aboutList = data;
    });
  
  }

}
