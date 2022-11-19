import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
  constructor(private product: ProductService,private router : Router) { }
  productFormCreate : FormGroup = new FormGroup({
    name: new FormControl(
      '',Validators.required
    ) ,
    description :new FormControl(

    ) ,
    content:new FormControl(
      '',Validators.required
    ) ,
    image:new FormControl(
      '',Validators.required
    ) ,
    gallery:new FormControl() ,
    price: new FormControl(
      '',Validators.required
    ) ,
    priceSale:new FormControl(
      '',Validators.required
    ) ,

  })

  productList : Array<any> = [];
  ngOnInit(): void {


  }
  OnCreate(){
   try {
    this.product.create(this.productFormCreate.value).subscribe(data =>{
      this.router.navigate(['/admin']);
    })
   }
   catch{
    alert("Có lỗi !!!");
   }
    }
  }


