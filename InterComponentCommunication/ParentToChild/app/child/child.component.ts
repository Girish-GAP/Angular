import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})


export class ChildComponent
{
  // @Input is the decorator
  // To use this decorator we have import (Input)  // it will automatically import by VS IDE
  // The data will came from parent component in following Data variable.
 @Input() public Data : any;

 @Input() public Data2 : any;

}
