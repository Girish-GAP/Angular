/////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : Write a typescript program which contains one function
// named as Chk String. That function accepts one string and check whether that string
// contains "Marvellous" word in it or not.
// 
//  Test Cases :
// Input : "Pune Kothrud Marvellous Infosystems"
// Output : String contains Marvellous in it.
//
/////////////////////////////////////////////////////////////////////////////////////


// Solution function
function ChkString(strInput : string, strFind : string) : boolean
{
    var chkLength : number = (strFind.length);
    var InputLength : number = (strInput.length);
    var i : number = 0 , j = 0;
    var bAns = false;

    for(i = 0; i < (InputLength - chkLength); i++)
    {
        for(j = 0; j < chkLength; j++)
        {
            // console.log("\n" + strInput[i+j] + strFind[j]);
            if(strInput[i+j] != strFind[j])
            {
                break;
            }
        }

        // console.log("\nJ : " + j);
        if(j == chkLength)
        {
            bAns = true;
            break;
        }
    }

    return bAns;

}

// main function
function main() : void
{
    var strInput : string = "Pune Kothrud Marvellous Infosystems";
    var strFind : string = "Marvellous";
    var bRet : boolean = false;

    bRet = ChkString(strInput , strFind);

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