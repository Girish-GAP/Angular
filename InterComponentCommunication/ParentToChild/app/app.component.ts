import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent 
{

  title = 'ParenttoChild';

  public Message1 = 'Hello child component.. !';
  public Message2 = 'I can send multiple message also';


}
