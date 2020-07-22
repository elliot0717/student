import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginURL = "http://localhost:3000/users/login";

  constructor(private http: HttpClient) { }

  login(user)
  {
    return this.http.post<any>(this.loginURL, user);
  }
}
