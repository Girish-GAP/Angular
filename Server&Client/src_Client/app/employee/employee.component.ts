import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  public mydata: any = [];  // to store the data from server

  // DI of service
  constructor(private service: EmployeeDataService) { }


  // lifecycle hook (first and only call method)
  ngOnInit(): void 
  {
      // call to local method for service
      this.getEmployeeNamesFromAPI();
  }


  // Local method to call service
  getEmployeeNamesFromAPI() 
  {
    // call to getBatches method which inside server
    // subscribe it for observables
    // paramter - arrow - method
    // call by address method
    this.mydata = this.service.getEmployeeNames().
      subscribe(Response => {
        this.mydata = Response;
        console.log("Data from server : ", Response);
      }
      );
  }

}