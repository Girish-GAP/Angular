/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as Fibonacci. That function should  Accept one number from user and print
// Fibonacci series till that number.
// 
// Test Cases :
// Input : 21
// Output : 1   1   2   3   5   8   13   21
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
function Fibonacci(No : number) : void
{
    // Logic
    var iFabPrivious : number = 0, iFabCurrent = 1, temp = 0;

    while(iFabCurrent != No)
    {
        console.log(iFabCurrent);
        temp = iFabCurrent;
        iFabCurrent = iFabCurrent + iFabPrivious;
        iFabPrivious = temp;

        // Filter
        if(iFabCurrent > No)
        {
            break;
        }
    }
    console.log(No);
}

// main function
function main() : void
{
    // Local variable
    var Value : number = 0;

    Value = 21;

    // Function calls
    Fibonacci(Value);

}

main();

/*
OUTPUT :

Typescript@JS>tsc Asgmt1_5.ts

Typescript@JS>node Asgmt1_5.js
1
1
2
3
5
8
13
21

*/