import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homeURL = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }
  register(user)
  {
   
    console.log(user);
    return this.http.post<any>(this.homeURL, user);
   
  }
}
