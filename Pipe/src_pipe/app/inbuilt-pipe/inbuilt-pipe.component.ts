import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipe',
  templateUrl: './inbuilt-pipe.component.html',
  styleUrls: ['./inbuilt-pipe.component.css']
})
export class InbuiltPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // JSON array
    public bio =
    {
      "Name" : "Girish",
      "Education" : "Btech-computer"
    }
    
    // Expressions
    name = "Girish pawar" 
    today = new Date();
    no = 23.4567;

}
