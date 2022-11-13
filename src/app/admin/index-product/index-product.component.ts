import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.scss']
})
export class IndexProductComponent implements OnInit {

  constructor(private product : ProductService,private _route : ActivatedRoute) { }
  productList : Array<any> = [];

  ngOnInit(): void {
    this.product.getListALL().subscribe(data => {
      this.productList = data;
    })
  }
  OnDelete(id:any){
   if(id!=null){
    this.product.delete(id).subscribe(data=>{
      this.product.getListALL().subscribe(data => {
        alert("Đã xóa thành công");
        this.productList = data;
      })
    });
   }
   else {
    alert('Có lỗi !!!! ')
   }

  }

}
