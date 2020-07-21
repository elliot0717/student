import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home.service';
import { Router } from "@angular/router";

import {USERS} from "src/app/mock-files";
// uncomment the following import in order to use Lodash
// import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


// uncomment the following import in order to use Lodash
// import * as _ from 'lodash';
//registration validation

  user = USERS;

  constructor(private router: Router, private sign: HomeService) {}
  name:String;
  lastname: String;
  username: String;
  password: String;
  registerUserData = {};

  ngOnInit(): void {
  }

  register(name , lastname ,username, password): void {
    for (let i = 0; i < this.user.length; i++) {
      if (
        this.user[i].name === name &&
        this.user[i].lastname === lastname &&
        this.user[i].username === username &&
        this.user[i].password === password
      ) {
        alert("Successfully registered")
        //this.router.navigate(["home-component"]);
        return;
      }
    }
    //error message
    alert("Invalid credentials");
  
  }

  registerUser()
  {
    this.sign.register(this.registerUserData)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )    }

}