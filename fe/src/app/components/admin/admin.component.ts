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
    console.log(this.name)
    console.log( this.faculty)
    this.university.fill({ name: this.name, faculty: this.faculty})

  }

  Delete(){
    console.log("Deleted")
    this.university.pop({ name: this.name, faculty: this.faculty});
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
