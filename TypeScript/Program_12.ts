//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : 
// Create one typescript application which contains one class named as Circle . 
// Circle class contains two characteristics ( Class data members ) as Radius , PI . 
// Create one parametrised constructor which accept one value and assign it to Radius . 
// Value of PI member is set to 3.14 . 
// In Circle class we have to one method ( Behaviours ) as Area which will return area of Circle. 
// After designing the class create two objects of that class by providing some hardcoded value. 
// Call the method Area by using both the objects. 
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


// main method
function main() : void
{
    var Ret : number = 0;  

    var obj1 = new Circle(5);   // object creation
    Ret = obj1.Area();   // method call
    console.log(Ret);

    var obj2 = new Circle(10);
    Ret = obj2.Area();
    console.log(Ret);

}

main();



/////////////////////////////////////////////////////////////////
/*

OUTPUT : 


Angular@ts>tsc Program2.ts

Angular@ts>node Program2.js
78
312


*/
/////////////////////////////////////////////////////////////////
