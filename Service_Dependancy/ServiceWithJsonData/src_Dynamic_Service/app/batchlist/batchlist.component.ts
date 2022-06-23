import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-batchlist',
  template: 
  `
  <h2>Inside Batch Details</h2>
  <ul *ngFor = "let value of Batches">
    <li>{{value.Name}} </li>
  </ul>
  `
})

export class BatchlistComponent implements OnInit {

  public Batches : any = [];    // data will come from getbatches method

  // dependancy injection of service
  // this constructor injects batchservice
  // Parameterized constructor takes the object of batchserviceservice
  // We don't need to make an object of batchserviceservice becase we make an entry of batchserviceservice class in provider array 
  // of app.module.ts so it will provide object of batchservice to every component.
  constructor(private _obj : BatchserviceService) 
  { 
    
  }


  // ngOnit lifecycle hook
  // first call and only one time call
  ngOnInit(): void 
  {
    // this._obj is the service object
    // GetBatches is the service method
    // subscribe for observable
    this.Batches = this._obj.GetBatches().subscribe(data => this.Batches=data);
  }



}

// difference between constructor and ngOnInit
// ngOnInit is the angular concept and constructor is class concept

