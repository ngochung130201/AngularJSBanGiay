import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Logout(){
    sessionStorage.removeItem('tokenUser');
    this.router.navigate(['/dang-nhap'])
  }
}
