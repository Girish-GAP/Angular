import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  // we can defined our data and logic
  // we can access this data and results in html file 
  // by interpolation brackets in .html file
  title = 'This is my FirstProject';

  data = 'This data is accessed from app.component.ts file by using {{}}';

}
