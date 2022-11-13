import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private product:ProductService,private _route : ActivatedRoute,private router : Router) { }
     
 id:any;
 prouductEit:any;
 vailuonId:any;
 datavailuon:any;
 productFormEdit :FormGroup =  new FormGroup({
  name: new FormControl() ,
  description :new FormControl() ,
  content:new FormControl() ,
  image:new FormControl() ,
  gallery:new FormControl() ,
  price: new FormControl() ,
  priceSale:new FormControl() ,
})
list : Array<any> = [];
dataProduct: Array<any> = [];
  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.product.getOne(this.id).subscribe(data=>{
     this.list = data;
     this.list.map(item=> 
      this.productFormEdit  =  new FormGroup({
        id: new FormControl(this.id),
        name: new FormControl(item.name) ,
        description :new FormControl(item.description) ,
        content:new FormControl(item.content) ,
        image:new FormControl(item.image) ,
        gallery:new FormControl(item.gallery) ,
        price: new FormControl(item.price) ,
        priceSale:new FormControl(item.priceSale) ,
      })
      
     )
     
 
   
    })
  
  }
  arrayList: any;
  OnEdit(){
  //  this.dataProduct = Object.assign(this.productFormEdit.value);
  // const mapped = Object.entries(this.productFormEdit.value).map(([type, value]) => ({type, value}));
  //  console.log(mapped);
  this.arrayList = [this.productFormEdit.value];
    this.product.update(this.id,this.productFormEdit.value).subscribe((data)=>{
      this.router.navigate(['/admin']);
   })
   
   
  }


 

}
