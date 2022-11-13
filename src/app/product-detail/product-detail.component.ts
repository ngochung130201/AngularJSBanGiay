import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {  ProductComponent} from '../product/product.component'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 productDetail = new Array();

  constructor(private productOne : ProductService,private route: ActivatedRoute) { }

  ngOnInit() {
  

    const id = this.route.snapshot.params['id'];
    if(id != null){
      this.productOne.getOne(id).subscribe(res =>
        {
     
         this.productDetail = res;
        
         console.log(res);
    
        }
       
       )
   }
 
    }
    OnCart(){
      alert('Hehe Chưa làm !!!')
    }
    OnCartStart(){
      alert('Hehe Chưa làm luôn !!!')
    }
}
   


  
  



      
    //  this.productOne.getOne(this.ids).subscribe(res =>
      
    // {
    //   this.productOneDetail = res
    // }
    //  )
      
