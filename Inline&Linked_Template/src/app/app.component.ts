import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',    // To Linked template we gave url of HTML file
  styleUrls: ['./app.component.css']      // To Linked CSS we gave url of CSS file
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


  // Store colors value
  mycolor = "orange";



}
