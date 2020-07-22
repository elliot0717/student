import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminURL = "http://localhost:3000/admin";

  constructor(private http: HttpClient) { }

  addPosts(user)
  {
    return this.http.post<any>(this.adminURL, user);
  }



}
