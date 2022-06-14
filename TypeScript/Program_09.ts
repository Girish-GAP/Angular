/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as ChkArmstrong. That function accepts one of numbers and check whether number 
// is Armstrong number or not.
//
// Armstrong number is a number that is equal to the sum of cubes of its digits. 
// 
//  Test Cases :
// Input : 153
// Output : It is Armstrong number
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
var ChkArmstrong = (No : number) : boolean =>
{
    // Logic
    var Sum : number = 0, iCnt = 0, iDigit = 0, tempNo = No;
    var bAns : boolean = false;

    while(tempNo != 0)
    {
        iDigit = tempNo % 10;
        Sum = Sum + (iDigit * iDigit * iDigit);
        tempNo = tempNo / 10;
        tempNo = Math.floor(tempNo);
    }

    if(Sum == No)
    {
        bAns = true;
    }

    return bAns;

}

// main function
function main() : void
{
    // Local variables
    var value : number = 153;
    var bRet : boolean = false;

    // Function calls
    bRet = ChkArmstrong(value);

    if(bRet == true)
    {
        console.log("It is Armstrong number");
    }
    else
    {
        console.log("It is not Armstrong number");
    }

}

main();

/*
OUTPUT :

Typescript@JS>tsc Asgmt2_4.ts

Typescript@JS>node Asgmt2_4.js
It is Armstrong number


*/