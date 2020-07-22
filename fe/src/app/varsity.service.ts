import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VarsityService {

  private varsityURL = "http://localhost:3000/admin/All";
  constructor(private http: HttpClient) { }

  university(university)
  {
    return this.http.get<any>(this.varsityURL, university);
  }
}
