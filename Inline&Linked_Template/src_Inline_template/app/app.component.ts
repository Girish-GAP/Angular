import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  // Inile html template

  // 1) Inside double quoute and add by +
  // template: "<h1>Application 3</h1> " + "<h2>First way : Inline</h2>"
  

  // 2) Just surround with backticks
  template: `

      <h1>Application 3</h1>  <h2>First way : Inline</h2>
  
      <input #Mydata type = "text">

      <button (click) = "Send(Mydata.value)"> Send Data</button>

      <h2>Data is : {{msg}}</h2>
      `
      , 

  // Inline CSS
  styles: [`

      h1
      {
          color: blue;
      }

      h2
      {
          color: red;
      }
        
        `]
})


export class AppComponent 

{
  title = 'Apllication6_2';

  public msg : any;

  // Method to Perform button action
  // We will pass value to paramter data variable of text filed when button cliked. 
  public Send(data : any)
  {
      this.msg = data;
  }
  // after getting the value in my data we will print it on html.


}
