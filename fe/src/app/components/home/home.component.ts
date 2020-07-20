import { Component, OnInit } from '@angular/core';
import { USERS } from './mock-file';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = USERS;

  constructor() { }
  
  name:String;
  lastname: String;
  username: String;
  password: String;
  

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
    //mrsg
    alert("Invalid credentials");
  
  }

}
