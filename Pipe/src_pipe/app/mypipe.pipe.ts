import { ArrayType } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

// The @pipe decorator is what tells Angular that the class is a pipe. 
// the decorator expects us to provide a name to the pipe. We have given it as tempConverter. 
// This is the name we must use in the template to make use of this pipe.
@Pipe({
  name: 'mypipe'
})

// class must implement the PipeTransform interface.
export class MypipePipe implements PipeTransform {

  // The PipeTransform interface defines only one method transform.
  // The first argument value is the value, that pipe needs to transform. 
  // We can also include any number of arguments. 
  // The method must return the final transformed data.

  


transform(value: unknown, ...args: unknown[]): unknown 
{
  // <h2>{{5 | mypipe : 2 : 3}}</h2>
  var num1 : any = value; // 5
  var num2 : any = args[0];  // 2
  var num3 : any = args[1];  // 3 
  
  var add = num1 + num2 + num3;

  return add;
}




  // for string reverse pipe
  /*
  transform(value: unknown, ...args: unknown[]): unknown 
  {
    var str : any = value;

    // logic for reverser
    str = str.split("").reverse().join("");
    
    return str;
  }

  */

}
