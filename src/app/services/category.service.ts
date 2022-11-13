import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(private http : HttpClient) { }
  getListALL():Observable<any>{
    return this.http.get<any>('https://localhost:7084/api/Categories')
  }
  Delete(id:any):Observable<any>{
    return this.http.delete<any>('https://localhost:7084/api/Categories/'+id);
  }

  

}
