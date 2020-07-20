import { Component, OnInit } from '@angular/core';
import {USERS} from 'src/app/mock-file';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = USERS;
  constructor() { }
  username: String;
  password: String;
  ngOnInit() {
  }
  login(username, password): void {
    for (let i = 0; i < this.user.length; i++) {
        if (
          this.user[i].username === username &&
          this.user[i].password === password
        ) {
          alert("Successfully logged in")
          //this.router.navigate(["home-component"]);
          return;
        }
      }
      alert("Invalid credentials");
    
    }
}
