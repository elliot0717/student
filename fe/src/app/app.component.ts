import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (private http: HttpClient) {

  }
  ngOnInit(): void {
   //this.http.get('http://localhost:3000/admin/All').subscribe(data => console.log(data));
  }


}
