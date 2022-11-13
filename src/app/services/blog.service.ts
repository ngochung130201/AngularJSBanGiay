import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }
  // getAll
  getAll():Observable<any>{
    return this.http.get('https://localhost:7084/api/Blogs');
  }
  getOne(id:string):Observable<any>{
    return this.http.get(`https://localhost:7084/api/Blogs/${id}`)
  }
  delete(id:any):Observable<any>{
    return this.http.delete('https://localhost:7084/api/Blogs/'+id)
  }
}
