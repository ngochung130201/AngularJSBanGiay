import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) {

   }

  Login(userName: string,password: string):Observable<any>{
    return this.http.post('https://localhost:7084/api/Users/login/', { userName, password},  {responseType: 'text'});
  }
  Register(username: string,password: string):Observable<any>{
    return this.http.post('https://localhost:7084/api/Users/register/', { username, password });
  }
}
