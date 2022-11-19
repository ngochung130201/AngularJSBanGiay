import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor( private _formBuilder: FormBuilder,private productOne : ProductService, private product:ProductService) {



   }
  products = new Array();
  FormSearch : FormGroup = new FormGroup({
    search : new FormControl(),



  })
  id2 :any;
  ngOnInit(): any {

    this.product.getListALL().subscribe(res =>
     {
     this.products = res;

     }
      )
  }

  OnSearch(){

      this.product.getListALL(this.FormSearch.value.search).subscribe(data =>{
        this.products = data
         })


  }
  Sort: FormGroup = new FormGroup({
    price : new FormControl(),
    priceDow : new FormControl()
  })

  onItemChange(value:any){
    console.log(" Value is : ", value );
 }

  changeGender(e:any) {

    this.product.getListALL('',e.target.value).subscribe(data =>{
      this.products = data;
    })
  }
  OnSort(){


  }



}
