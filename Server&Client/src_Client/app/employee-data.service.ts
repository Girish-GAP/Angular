import { Injectable } from '@angular/core';
// import httpClient explicitly
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  // Inject HttpClient
  constructor(private http : HttpClient) { }


  // Method to request server
  getEmployeeNames()
  {
    // connect to srever through http protocol
    return this.http.get('/api/getEmployeeNames');
  }

}
