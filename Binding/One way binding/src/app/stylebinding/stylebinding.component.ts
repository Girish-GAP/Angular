import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // we will access this characteristics in html for style binding
  public mycolor = "blue";

  // we will access this to set style depends on the class characteristics.
  public IsSet = true;

}
