import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth : LoginService) { }
  ResForm!:FormGroup;

  ngOnInit(): void {
    this.ResForm = this.fb.group({
      useName:['',Validators.required],
      password:['',Validators.required],
    });
  }
  OnRes(){
    this.auth.Register(this.ResForm.value.useName, this.ResForm.value.password).subscribe({
      next:(res=>{
        alert('thanh cong')
      }),
      error:(err=>{
        alert('that bai')
      })
    })

  }

}
