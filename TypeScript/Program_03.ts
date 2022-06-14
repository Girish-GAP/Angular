/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as Display Factors. That function should  Accept one number and display 
// factors of that number.
// 
// Test Cases :
// Input : 20
// Output : 1   2   4   5   10
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
function DisplayFacotrs(No : number) : void
{
    // Logic
    var iCnt : number = 0;
    
    for(iCnt = 1; iCnt <= No/2; iCnt++)
    {
        if((No % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }

}

// main function
function main() : void
{
    // Local variable
    var Value : number = 0;

    Value = 20;

    // Function calls
    DisplayFacotrs(Value);

}

main();


/*
OUTPUT :

Typescript@JS>tsc Asgmt1_3.ts

Typescript@JS>node Asgmt1_3.js
1
2
4
5
10


*/