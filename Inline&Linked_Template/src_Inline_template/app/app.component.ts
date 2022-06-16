import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent 
{
  title = 'Application06';

  public msg : any;

  // Method to Perform button action
  // We will pass value to paramter data variable of text filed when button cliked. 
  public Send(data : any)
  {
      this.msg = data;
  }
  // after getting the value in my data we will print it on html.


}
