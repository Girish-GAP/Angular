import { Component, OnInit } from '@angular/core';
import { BatchserviceService } from '../batchservice.service';

@Component({
  selector: 'app-bathdetails',
  template: `
  <h2>Inside Batch List</h2>
  <ul *ngFor = "let value of Batches">
    <li>{{value.Name}} with duration {{value.Duration}} having fees {{value.Fees}}"</li>
  </ul>
  `

})
export class BathdetailsComponent implements OnInit {

  public Batches : any = [];    // data will come from getbatches method

  // injection happen inside constructor bracket.
  // constructor is a hand
  // injection given by app.module.ts
  // and to give injection we are telling it in provider array ("who ever come inject it" :)

  // once the injection done then all the facilties of service we can use inside component.
  constructor(private _obj : BatchserviceService) 
  { 

  }

  ngOnInit(): void 
  {
    // to get the data we subscirbe the service to observables
    // Assign property data to returned JSON object
    this.Batches = this._obj.GetBatches().subscribe(data => this.Batches=data);
  }

}




   


