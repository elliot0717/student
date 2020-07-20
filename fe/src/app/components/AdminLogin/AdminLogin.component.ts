import { Component, OnInit } from "@angular/core";
import { USERS } from "src/app/mock-file";
import { Router } from "@angular/router";
@Component({
  selector: "app-AdminLogin",
  templateUrl: "./AdminLogin.component.html",
  styleUrls: ["./AdminLogin.component.css"],
})
export class AdminLoginComponent implements OnInit {
  user = USERS;
  option1 : any;
  option2 : any;
  constructor(private router: Router) {}
  username: String;
  password: String;
  ngOnInit() {}
  login(username, password): void {
    for (let i = 0; i < this.user.length; i++) {
      if (
        this.user[i].username === username &&
        this.user[i].password === password
      ) {
        alert("Successfully logged in");
        //this.router.navigate(["home-component"]);
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
}
