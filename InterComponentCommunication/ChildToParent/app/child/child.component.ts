import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})


export class ChildComponent
{

  public msg = "Hello Parent...";
  public msg2 = "Another msg from child";
  public msg3 = "Thank you parent..";

  // we import EventEmitter for this (in vs ide it automatically imported while typing)
  @Output() public Myevent = new EventEmitter();
  @Output() public Myevent2 = new EventEmitter();
  
public SendMessage()
{
  this.Myevent.emit(this.msg);
}

public SendMessage2()
{
  this.Myevent.emit(this.msg2);
}



public SendMessage3()
{
  this.Myevent2.emit(this.msg3);
}



} 
