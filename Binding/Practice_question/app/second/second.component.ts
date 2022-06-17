import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // string for fun
  message = "Marvellous Infosystems"

  // function which invoke when button will pressed
  fun()
  {
      this.message = "Educating for better tomorrow"
  }



// strings for up and low
msg = "marvellous infosystems";
string = "";

up()
{
  this.string =  this.msg.toUpperCase();
}

low()
{
  this.string =  this.msg.toLowerCase();
}


}
