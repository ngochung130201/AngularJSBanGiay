import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { MenusService } from '../services/menus.service';
const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d=
"M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,
1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,
6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,
0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,
0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,
5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,
16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"/>
  </svg>
`;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private menus : MenusService) {
    iconRegistry.addSvgIconLiteral(
      "search",
      sanitizer.bypassSecurityTrustHtml(searchIcon)
    );
  }
  
   menu1 = [
    {
      name :' Trang chủ',
      link:'/trang-chu',
    },
    {
      name :'Giới thiệu',
      link:'gioi-thieu',
    },
    {
      name :'Sản phẩm',
      link:'/san-pham',
    },
    {
      name :'Tin tức',
      link:'/tin-tuc',
    },
    {
      name :'Liên hệ',
      link:'/lien-he',
    },
  ]
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

}
