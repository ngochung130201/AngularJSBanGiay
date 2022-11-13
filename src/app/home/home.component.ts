import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private product : ProductService) { }
  productListAll : Array<any> = [];

  
  ngOnInit(): void {
    this.product.getListALL().subscribe(data =>{
     this.productListAll = data;
    })
    // category all

  }

}
