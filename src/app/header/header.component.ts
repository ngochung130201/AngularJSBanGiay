import { Component, OnInit, Output } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { MenusService } from '../services/menus.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private product : ProductService,iconRegistry: MatIconRegistry,private menus : MenusService) {

  }

  onSearch : FormGroup = new FormGroup({
    search : new FormControl(),
  })
  menu2 = [
    {
      name :'Kênh Người Bán',
      link:'/trang-chu',
    },
    {
      name :'Trở thành Người bán Shopee',
      link:'/gioi-thieu',
    },
    {
      name :'Tải ứng dụng',
      link:'/san-pham',
    },
    {
      name :'Kết nối',
      link:'/tin-tuc',
    },

  ]
  menuAuth = [
    {
      name :'Đăng nhập',
      link:'/dang-nhap',
    },
    {
      name :'Đăng ký',
      link:'/dang-ky',
    },

  ]

 menuArray = new Array();
  menuAPI:any;
  ngOnInit(): void {
    this.menus.getList().subscribe(res =>
   {

    this.menuArray = res;
   }

      )
  }

  Logout(){

    localStorage.removeItem('tokenUser');
    this.router.navigate(['/dang-nhap'])
  }
}
