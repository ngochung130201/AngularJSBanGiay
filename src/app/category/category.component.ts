import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private categpry : CategoryService) { }
  categoryListAll : Array<any> = [];
  selectIndex= 0;

  ngOnInit(): void {
    this.categpry.getListALL().subscribe(data =>{
      this.categoryListAll = data;
    })
  }

}
