import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  str = "";

  // This method invoked when button is pressed
  pressEvent()
  {
    this.str = "Button Clicked";
  }

  // It will give information about event
  EventInformation(value : any)
  {
    console.log(value);
  }

}
