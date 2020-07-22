import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  university :any = [];
  addForm : any;
  modalAdd : any;
   // data type
   id: any;
   name: string;
   faculty: string='';

   //function for adding data on the table
  addModalForm(addForm,modalAdd){
    console.log(this.name)
    console.log( this.faculty)
    this.university.push({ name: this.name, faculty: this.faculty});
  
  }




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
        this.university.pop({ name: this.name, faculty: this.faculty});
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
