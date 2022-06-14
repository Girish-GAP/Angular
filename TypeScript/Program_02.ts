/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as Area. That function should calculate area of circle. Accept value 
// of radius from user and return its area. Default value of PI should be 3.14 if it is 
// not provide by the caller.
// 
//
//  Test Cases :
// Input : 5
// Output : Area of circle is 78.54
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
function AreaCircle(Radius : number) : number
{
    // Logic
    var Ans : number = 0;
    Ans = 3.14 * (Radius*Radius);
    return Ans;
}

// main function
function main() : void
{
    var Ret : number = 0;       // Local variable

    // Function calls
    Ret = AreaCircle(5);
    
    console.log("Area of circle is : " + Ret);

}

main();


/*

OUTPUT :

Typescript@JS>tsc Asgmt1_2.ts

Typescript@JS>node Asgmt1_2.js
Area of circle is : 78.5


*/