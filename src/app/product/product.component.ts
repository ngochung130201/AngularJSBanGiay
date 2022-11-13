import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productOne : ProductService, private product:ProductService) { }
  products = new Array();
  id2 :any;
  ngOnInit(): any {
    
    this.product.getListALL().subscribe(res =>
     {
     this.products = res;
      
     }
      )
  }
  

  
  

}
