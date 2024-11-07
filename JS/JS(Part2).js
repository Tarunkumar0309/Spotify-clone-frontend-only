// Q1 & A1

// let num = "740";
// if(num % 10 == 0){
//     console.log("good");
// } else{
//     console.log("bad");
// }


// Q2 & A2


// let user_name = prompt("Enter the user name");
// let age = prompt("Enter Age");
// let = alert(user_name + " "+ "is"+ " " +age+ " "  + "years old");
// console.log(alert);



//  Q3 & A3

// let num = 4;

// switch(num){
//          case 1: console.log(" Months is Quater 1 : January, February, March");
//             break;

//         case 2: console.log(" Months is Quater 2 : April, May, June");
//             break;

//         case 3: console.log(" Months is Quater 3 : July, August, September");
//             break;
            
        
                
//         case 4:
//             console.log(" Months is Quater 4 :October, November, December");
//             break;


//         default:
//             console.log("Invalid Input : It is not a Quarter!!!!!!!!!!!");
            
//         }

// Q4 & A4
// Golden String

// let goldenString ="aarunn";
// if((goldenString[0]==="A"|| goldenString[0]==="a") && goldenString.length > 5) {
//     console.log("It is a Golden String");

// } else {
//     console.log("It is not a Golden String");
// }



// Q5 & A5


// let num1 = 55;
// let num2 = 5555;
// let num3 = 5;

// if(num1 > num2 || num1 > num3){
//     console.log(num1);
// }
// else if(num2 > num1 || num2 > num3){
//     console.log(num2);
    
//  }else{
//     console.log(num3);
// }


// Q6 & A6

let num= 12;
let num2= 222;

if( num % 10  === num2 % 10 ){
    console.log( "Both the numbers have same last digit i.e. 2")
    
} else {
    console.log( "Both the number have different last digits");
}

/* To correctly compare the last digits of two numbers, you should explicitly compare the results of num % 10 and num2 % 10. Here’s how you can modify your code to achieve that:

javascript
Copy code
let num = 12;
let num2 = 222;

if (num % 10 === num2 % 10) {
    console.log("Both the numbers have the same last digit i.e. 2");
} else {
    console.log("Both the numbers have different last digits");
}
In this corrected version:

num % 10 === num2 % 10 compares the last digits of num and num2. If they are equal, it prints that both numbers have the same last digit; otherwise, it prints that they have different last digits.
Why Not % 2?
% 2 calculates the remainder when a number is divided by 2. This operation gives 0 for even numbers and 1 for odd numbers, which is not useful for finding the last digit of a number.
% 10 is used because it gives the last digit of the number directly.
For example:
// *********************************************************************************************************
12 % 2 is 0 (even number)
12 % 10 is 2 (last digit)
//**********************************************************************************************************
So, % 10 is the appropriate choice when you need to work with the last digit of a number.

*/







