import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  studentCollection: Array<object> = [];
  studentRecord: object;

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;

  messages = '';
  printing = false;

  addStudentEntry(): void{
    this.printing = false;
    this.studentRecord = {
      studNumber: this.studNo,
      studFirstName: this.studFname,
      studLastName: this.studLname,
      studProgram: this.studProg,
      studYear: this.studYr
    };

    this.studentCollection.push(this.studentRecord);
    this.messages=null;
    this.clearValues();
  }
  listStudents(): void{
    this.printing = true;
    console.log('Showing stored students');
  }
  clearValues(): void{
    this.studNo = null;
    this.studFname = null;
    this.studLname = null;
    this.studProg = null;
    this.studYr = null;
  }
  onSubmit(reg){
    console.log(reg);
  }
}


