import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

  // the static data which will provide to component
  public students  = [ {"Name" : "Girish"}, {"Name" : "Omkar"}, {"Name" : "Aniket"} ];

  // method which return the data to component.
  public getStudentDetails() 
  {
    return this.students;

  }
}
