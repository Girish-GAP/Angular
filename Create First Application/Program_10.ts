/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as ChkString. That function accepts one string and check whether that string
// contains "Marvellous" word in it or not.
// 
//  Test Cases :
// Input : "Pune Kothrud Marvellous Infosystems"
// Output : String contains Marvellous in it.
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
var ChkString = function(strInput : string) : boolean
{
    // Local variables
    var findString : string = "Marvellous";
    var iCnt : number = 0, matchCnt = 0;
    var bAns : boolean = false;

    for(var i = 0; i < strInput.length; i++, iCnt++)    // For iteration of Input string
    {
        if(strInput[i] == findString[0])    // If first character matches then check for other characterss 
        {
            for(var j = 0; j < findString.length; j++, iCnt++)  // Check for other characters
            {
                if(strInput[iCnt] == findString[j])     // Take count how many Characters matches
                {
                    matchCnt++;
                }
                else    // If other any character not matches then break and start to matching from first character again
                {
                    break;
                }
            }

            if(matchCnt == (findString.length)) // If all the character matches - found string - flag found - and break
            {
                bAns = true;
                break;
            }

            // if count not mathes then reset count and matchcount
            iCnt = i;
            matchCnt = 0;
        } 
    }

    return bAns;
}

// main function
function main() : void
{
    var strFind : string = "Pune Kothrud Marvellous Infosystems";
    var bRet : boolean = false;

    bRet = ChkString(strFind);

    if(bRet == true)
    {
        console.log("String contains Marvellous in it");
    }
    else
    {
        console.log("String NOT contains Marvellous in it");
    }

}

main();

/*

OUTPUT :

Typescript@JS>tsc Asgmt2_5.ts

Typescript@JS>node Asgmt2_5.js
String contains Marvellous in it

*/