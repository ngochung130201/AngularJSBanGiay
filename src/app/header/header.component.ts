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
      name :'Trở thành Người bán HNH',
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
  isLogout : boolean = false
 public CovertToken(){
    let tokenUser =  localStorage.getItem('tokenUser');
    if(typeof tokenUser =='string' ){
     let convertDataToken = JSON.parse(tokenUser);
     let userName = convertDataToken.userName;
      this.isLogout =true
      return userName;
    }
  }
  menuAuth = [
    {

      name :`${this.CovertToken() == null ? 'Đăng nhập' : `Tài khoản : ${this.CovertToken()}` }`  ,
      link:'/dang-nhap',
    },
    {
      name :`${this.CovertToken()== null ? 'Đăng kí' : ''}`,
      link:`${this.CovertToken()== null ? '/dang-ky'  : ''}`,
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

   this.CovertToken();
  }

  Logout(){

    localStorage.removeItem('tokenUser');
    this.router.navigate(['/dang-nhap'])
  }
}
