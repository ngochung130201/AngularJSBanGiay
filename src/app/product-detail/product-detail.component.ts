import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Carts } from '../Icart/cart';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productDetail = new Array();
  constructor(
    private productOne: ProductService,
    private route: ActivatedRoute,
    private cart: CartService,
    private routerUrl : Router

  ) {

  }
  productAll : Array<any> = []
  amount:number = 1
  cartData: Array<Carts> = [];
  cartData2: Array<Carts> = [];
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id != null) {
      this.productOne.getOne(id).subscribe((res) => {
        this.productDetail = res;
      });
    }
    this.productOne.getListALL().subscribe(data=>{
      this.productAll =data.slice(7)

    })
  }
  ConvertCartData() {
    this.productDetail.map((item) => {
      this.cartData.push({
        cartID: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        priceSale: item.priceSale,
        amount:this.amount
      });

    })
    return  this.cartData[0];

  }

  OnCart() {
    let data = this.ConvertCartData();

    this.cart.AddCart(data).subscribe({
      next:(res=>{

        this.routerUrl.navigate(['/gio-hang'],{state:{data : {res}}});
      }),
      error:(err=>{
        console.log('err');
      })
    })
  }

  OnCartStart() {
    alert('Hehe Chưa làm luôn !!!');
  }
}

//  this.productOne.getOne(this.ids).subscribe(res =>

// {
//   this.productOneDetail = res
// }
//  )
