import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // the return data from service will store in this local array.
  public MyStudents : any = [];

  // service is a dependancy for this component
  // inject service in this component
  constructor(private _obj : StudentDataService) { }



  ngOnInit(): any
  {
    // this._obj is the object of service
    // getStudentDetails() is the method of service
    this.MyStudents = this._obj.getStudentDetails();
   
  }

}
