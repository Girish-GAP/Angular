//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Problem statement : 
// Create one typescript application which contains one class named as Arithmetic . 
// Arithmetic class contains three characteristics ( Class data members ) as Number1 , Number2 . 
// Create one parametrised constructor which accept two values and assign it to Numberi and Number2 . 
// In Arithmetic class we have to write four methods ( Behaviours ) as Addition , Subtraction , Multiplication and Division . 
// Addition method will add Number1 , Number2 & return result . Subtraction method will subtract Number1 , Number2 & return result . 
// Multiplication method will multiply Number1 Number2 & return result . Division method will divide Number1 , Number2 & return result . 
// After designing the class create two objects of that class by providing some hardcoded value . 
// Call all the methods by using both the objects 
// 
// Author : Girish Pawar
// Date : 04-06-2022
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Arithmetic
{
    // Characteristics
    iNo1 : number;
    iNo2 : number;

    // Behaviours

    // Paratmerized constructor
    constructor(iValue1 : number, iValue2 : number)
    {
        this.iNo1 = iValue1;
        this.iNo2 = iValue2;
    }

    // Addition 
    Addition() : number
    {
        var iAns : number = 0;
        iAns = this.iNo1 + this.iNo2;
        return iAns;
    }

    // Substraction
    Substraction() : number
    {
        var iAns : number = 0;
        iAns = this.iNo1 - this.iNo2;
        return iAns;
    }

    Multiplication() : number
    {
        var iAns : number = 0;
        iAns = this.iNo1 * this.iNo2;
        return iAns;
    }

    Division() : number
    {
        var iAns : number = 0;
        iAns = this.iNo1 / this.iNo2;
        return iAns;
    }


}



// main function
function main() : void
{
    var obj1 = new Arithmetic(10,20);    // Create new object
    var iRet : number = 0;

    console.log("\nObj1 : \n\n");

    iRet = obj1.Addition();
    console.log("\nAddition is : " + iRet);    

    iRet = obj1.Substraction();
    console.log("\nSubstraction is : " + iRet);    

    iRet = obj1.Multiplication();
    console.log("\nMultiplication is : " + iRet);    

    iRet = obj1.Division();
    console.log("\nDivision is : " + iRet);    

    //////////////////////////////////////////////////////

    var obj2 = new Arithmetic(30,40);

    console.log("\n\nObj2 : \n\n");

    iRet = obj2.Addition();
    console.log("\nAddition is : " + iRet);    

    iRet = obj2.Substraction();
    console.log("\nSubstraction is : " + iRet);    

    iRet = obj2.Multiplication();
    console.log("\nMultiplication is : " + iRet);    

    iRet = obj2.Division();
    console.log("\nDivision is : " + iRet);    

}   

main();




/////////////////////////////////////////////////////////////////
/*

OUTPUT : 


TypeScript@JS>tsc Program1.ts

TypeScript@JS>node Program1.js

Obj1 :



Addition is : 30

Substraction is : -10

Multiplication is : 200

Division is : 0.5


Obj2 :



Addition is : 70

Substraction is : -10

Multiplication is : 1200

Division is : 0.75


*/
/////////////////////////////////////////////////////////////////

