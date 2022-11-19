import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getListALL(search:any = null,sort:any=1,page:any =null):Observable<any>{
    let url = `https://localhost:7084/api/Products?sort=`+sort;
    if(search !=null){
      url+= '&search='+search
    }
    if(page!=null){
      url+= '&page='+page
    }

    return this.http.get<any>(url)
  }
  getOne(id:any):Observable<any>{
    return this.http.get<any>(`https://localhost:7084/api/Products/${id}`)
  }
  create(data:any):Observable<any>{
    return this.http.post<any>('https://localhost:7084/api/Products',data);

  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`https://localhost:7084/api/Products/${id}`)
  }
  // update
  update(id:any,data:any){
    return  this.http.put(`https://localhost:7084/api/Products/${id}`,data);
  }
  updateMenus(id:any,data:any):Observable<any>{
    return  this.http.put<any>(`https://localhost:7084/api/Menus/`+id,data);
  }

}
