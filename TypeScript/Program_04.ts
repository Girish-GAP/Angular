/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as ChkPrime. That function should  Accept one number and it should return
// true if the given number is prime and otherwise return false.
// 
// Test Cases :
// Input : 11
// Output : It is prime number
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
function ChkPrime(No : number) : boolean
{
    // Logic
    var iCnt : number = 0, ifact = 0;
    var bAns : boolean = true; 
    
    for(iCnt = 1; iCnt <= No; iCnt++)
    {
        if((No % iCnt) == 0)
        {
            ifact++;
        }

        if(ifact > 2)
        {
            bAns = false;
            break;
        }
    }

    return bAns;
}

// main function
function main() : void
{
    // Local variable
    var bRet : boolean = false;
    var Value : number = 0;

    Value = 2;

    // Function calls
    bRet = ChkPrime(Value);

    if(bRet == true)
    {
        console.log("It is a Prime Number")
    }
    else
    {
        console.log("It is Not a Prime Number")
    }

}

main();


/*
OUTPUT :

Typescript@JS>tsc Asgmt1_4.ts

Typescript@JS>node Asgmt1_4.js
It is a Prime Number

*/