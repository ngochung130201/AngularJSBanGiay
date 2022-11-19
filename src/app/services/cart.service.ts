import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }
  AddCart(data:any):Observable<any>{
    return this.http.post('https://localhost:7084/api/Carts/',data);
  }
  GetCart():Observable<any>{
    return this.http.get('https://localhost:7084/api/Carts/');
  }
}
