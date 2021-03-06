import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { AdminService } from "src/app/admin/admin.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  university: any = [];
  addForm: any;
  modalAdd: any;
  uniDetailsData = {};
  backEndData = {};
  // data type
  id: any;
  name: string;
  faculty: string = "";

  //function for adding data on the table
  addModalForm(addForm, modalAdd) {
    console.log(this.name);
    console.log(this.faculty);
    this.university.push({ name: this.name, faculty: this.faculty });
  }

  //function for edditing data on the table
  EditModalForm(EditForm, modalEdit) {
    console.log(this.name);
    console.log(this.faculty);
    this.university.fill({ name: this.name, faculty: this.faculty });
  }

  Delete() {
    console.log("Deleted");
    this.university.pop({ name: this.name, faculty: this.faculty });
  }

  constructor(private adminService: AdminService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getUniversity();
  }
  addPost() {
    this.uniDetailsData["universityName"] = this.name;
    this.uniDetailsData["faculty"] = this.faculty;

    this.adminService
      .addPosts(this.uniDetailsData)
      .subscribe((res) => console.log(res), (err) => console.log(err));
  }
  
  getUniversity(){
    this.adminService.getPost(this.backEndData).subscribe((backEndData : {}) =>
    {
      this.backEndData =backEndData;
    })


    //this.adminService.getPost(this.backEndData).subscribe((res) => console.log(res), (err) => console.log(err));
    //this.http.get('http://localhost:3000/admin/All').subscribe(data => console.log(data));
  }
  // deletePost() {
  //   this.adminService.deletePost(this.post_to_delete._id).subscribe((res) => {
  //     this.getAllPost();
  //   });
  // }
}
