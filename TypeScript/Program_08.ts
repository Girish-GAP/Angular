/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as Maximum. That function accepts array of numbers and returns the second
// largest number from array
// 
//  Test Cases :
// Input : 23   89  6   29  56  45  77  32
// Output : Second Maximum number is 77
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
function Maximum2(Arr : number[]) : number
{
    // Logic
    var Max : number = 0, Max2 = 0, iCnt = 0;
    
    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > Max)
        {
            Max = Arr[iCnt];
        }
    }

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Max == Arr[iCnt])
        {
            continue;
        }

        if(Arr[iCnt] > Max2)
        {
            Max2 = Arr[iCnt];
        }
    }

    return Max2;
}

// main function
function main() : void
{
    var array: number[];       // Local variable
    
    array = [23, 85, 6, 29, 56, 45, 77, 32];

    var Ret : number = 0;

    // Function calls
    Ret = Maximum2(array);
    
    console.log("Maximum number is : " + Ret);

}

main();

/*
OUTPUT :

Typescript@JS>tsc Asgmt2_3.ts

Typescript@JS>node Asgmt2_3.js
Maximum number is : 77

*/