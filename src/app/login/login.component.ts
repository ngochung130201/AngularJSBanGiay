import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder,private auth : LoginService,private router: Router) { }
  loginForm!:FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required],
    })
  }
  OnLogin(){
    this.auth.Login(this.loginForm.value.userName,this.loginForm.value.password).subscribe({
      next:(res=>{
        console.log(res);
        localStorage.setItem('tokenUser',res)
        this.router.navigate(['admin'])
      }),
    })
  }
  Logout(){
    sessionStorage.removeItem('tokenUser');
    this.router.navigate(['/dang-nhap'])
  }
}
