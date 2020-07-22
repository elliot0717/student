import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminService} from './admin.service';
import { VarsityService } from '../varsity.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  university :any;
  addForm : any;
   // data type
   id: any;
   universityName: any;
   faculty: string='';
   adminPosts ={};
   universityData = {};



   constructor(private router: Router, private sign: AdminService, private varsity : VarsityService) { }
  //  faculty2: string='';
  //  faculty3: string='';
  //  faculty4: string='';
   //function for adding data on the table
  addModalForm(addForm, modalAdd){
    console.log(this.universityName)
    console.log( this.faculty),
    this.university.push({ id: this.id, universityName: this.universityName, faculty: this.faculty});
  }
  postsAdded()
  {
    
    this.adminPosts['universityName']= this.universityName;
    this.adminPosts['faculty'] = this.faculty;
    this.sign.addPosts(this.adminPosts)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )    }
  //function for edditing data on the table
  EditModalForm(EditForm, modalEdit){
    //console.log( this.id , this.name , this.email, this.IDNo, this.faculty1 ),
   // this.university.fill({ name:this.name, email:this.email , IDNo:this.IDNo  , module:this.faculty1})
    // swal(" Your imaginary Details has been edited!", {
    //   icon: "success",
    // });
  }
  Delete(){
    console.log("Deleted")
    // console.log( [this.id , this.name , this.email, this.IDNo, this.module ]),
     //this.university.pop({id: this.id , name:this.name, email:this.email , IDNo:this.IDNo  , module:this.faculty1})
    // this.students.pop=[{name: this.name, email: this.email , IDNo: this.IDNo  , module: this.module}]
    // this.students = [{name: this.name, email: this.email , IDNo: this.IDNo  , module: this.module}]
        // swal(" Your imaginary Details has been deleted!", {
        //   icon: "success",
        // });
  }
  
  ngOnInit(): void {
  }

  getUniversity()
  {
   this.varsity.university(this.universityData).subscribe(
     res => console.log(res),
     err => console.log(err)
   ) 
  }
}









