import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // this attribute will class name
  classvar = "myclass";

  // conditional dynamic class
  IsSet = true;


  // function to return class
  getClass()
  {
    return "myclass";
  }


}
