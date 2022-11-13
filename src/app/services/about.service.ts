import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http : HttpClient) { }
  getAll():Observable<any>{
   return this.http.get('https://localhost:7084/api/Abouts/')
  }
  create(data: any):Observable<any>{
    return this.http.post('https://localhost:7084/api/Abouts/',data)
  }
  delete(id:any):Observable<any>{
    return this.http.delete(`https://localhost:7084/api/Abouts/${id}`)
  }
}
