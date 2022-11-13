import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http: HttpClient) { 
    
  }
  getList():Observable<any>{
    return this.http.get<any>('https://localhost:7084/api/Menus')
  }
  getOne(id:any):Observable<any>{
    return this.http.get<any>('https://localhost:7084/api/Menus'+id)
  }

}
