/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as Maximum. That function accepts three parameters and it should return
// largest value from three input parameters.
//
//  Test Cases :
// Input : 23   89  6
// Output : Maximum number is 89
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
function Maximum(No1 : number, No2 : number, No3 : number) : number
{
    // Logic
    if( (No1 > No2) && (No1 > No3))
    {
        return No1;
    }
    if( (No2 > No1) && (No2 > No3))
    {
        return No2;
    }
    else
    {
        return No3;
    }
}

// main function
function main() : void
{
    var Ret : number = 0;       // Local variable

    // Function calls
    Ret = Maximum(23,89,6); 
    console.log(Ret);

    // Ret = Maximum(55,44,35);
    // console.log(Ret);

    // Ret = Maximum(45,56,98);
    // console.log(Ret);
}

main();

// TimeComplexity : O(1)


/*

OUTPUT :

Typescript@JS>tsc Asgmt1_1.ts

Typescript@JS>node Asgmt1_1.js
89

*/