import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminURL = "http://localhost:3000/admin";
  private adminGetUrl = "http://localhost:3000/admin/All"
  constructor(private http: HttpClient) { }

  addPosts(user)
  {
    return this.http.post<any>(this.adminURL, user);
  }
  getPost(admin):Observable<any>{
    return this.http.get(this.adminGetUrl);
  }
  deletePost(user)
  {
   return this.http.post<any>(`${this.adminURL}`, user);
  }
}
