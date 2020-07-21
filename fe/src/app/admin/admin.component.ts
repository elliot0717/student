import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  name: any;
  faculties: string='';

  constructor() { }

  ngOnInit(): void {
  }

   //function for adding data on the table
   addModalForm(addForm, modalAdd){

    console.log(this.name)
    console.log( this.faculties)
    //this.students.push({ name: this.name,  module: this.faculties })
    // this.students=[{name: this.name, email: this.email , IDNo: this.IDNo  , module: this.module}],
    // this.students = [{name: this.name, email: this.email , IDNo: this.IDNo  , module: this.module}]
    swal(" Your imaginary Details has been Added!", {
      icon: "success",
    });
  }

}
