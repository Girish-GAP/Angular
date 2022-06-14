//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : 
// Create one typescript application which contains one class named as Circlex 
// which sill inherits above Circle class . 
// In CircleX class we have to write one method ( Behaviours ) as Circumference 
// which will return circumference of circle . 
// After designing the class create two objects of that class by providing some hardcoded value. 
// Call Circumference and Area methods by using both the objects.
// 
// Author : Girish Pawar
// Date : 04-06-2022
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Circle
{
    // characteristics
    Radius : number;
    PI : number;

    // Paratmerized constructor with default argument
    constructor(iNo : number, R : number = 3.12)
    {
        this.Radius = iNo;
        this.PI = R;
    }

    // Behaviour
    Area() : number
    {
        return (this.PI * (this.Radius * this.Radius));
    }
}

class CircleX extends Circle
{
    
    // Behaviour
    Circumfarace() : number
    {
        return (2 * this.PI * this.Radius);
    }
}


// main method
function main() : void
{
    var Ret : number = 0;  

    var obj1 = new CircleX(5);   // object creation
    Ret = obj1.Circumfarace();   // method call
    console.log(Ret);

    var obj2 = new CircleX(10);
    Ret = obj2.Circumfarace();
    console.log(Ret);

}

main();



/////////////////////////////////////////////////////////////////
/*

OUTPUT : 


Angular@ts>tsc Program3.ts

Angular@ts>node Program3.js
31.200000000000003
62.400000000000006


*/
/////////////////////////////////////////////////////////////////