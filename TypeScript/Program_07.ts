/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as Summation. That function accepts array of numbers and returns the largest 
// number from array
// 
//  Test Cases :
// Input : 23   6   7   4   5   7
// Output : Addition is 52
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
function Summation(Arr : number[]) : number
{
    // Logic
    var Sum : number = 0, iCnt = 0;
    
    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        Sum = Sum + Arr[iCnt];
    }

    return Sum;
}

// main function
function main() : void
{
    var array: number[];       // Local variable
    
    array = [23, 6, 7, 4, 5, 7];

    var Ret : number = 0;

    // Function calls
    Ret = Summation(array);
    
    console.log("Addition is : " + Ret);

}

main();

/*

OUTPUT :

Typescript@JS>tsc Asgmt2_2.ts

Typescript@JS>node Asgmt2_2.js
Addition is : 52

*/