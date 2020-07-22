import { Component, OnInit } from '@angular/core';
import {USERS} from 'src/app/mock-file';
import { Router } from "@angular/router";
import { LoginService } from 'src/app/components/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = USERS;
  option1: any;
  option2:any;
  
  constructor(private router: Router, private sign: LoginService) {}
  username: String;
  password: String;
  loginUserData = {};

  ngOnInit() {
  }
  login(username, password): void {
    for (let i = 0; i < this.user.length; i++) {
        if (
          this.user[i].username === username &&
          this.user[i].password === password
        ) {
          alert("Successfully logged in")
          this.router.navigate(["test"]);
          return;
        }
      }
      alert("Invalid credentials");
    
    }
    togSwitch() {
      if(this.option1){
        return this.router.navigate(["login"]);
      } else if(this.option2){
        return this.router.navigate(["home"]);
      }
    }

    loginUser()
    {
      this.loginUserData['email']=this.username;
     this.loginUserData['password']=this.password;

      this.sign.login(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    return this.router.navigate(["test"]);    }
}
//sarswgfhj