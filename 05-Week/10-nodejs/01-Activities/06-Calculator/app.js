/**
 * INSTRUCTION:
 * Create a command-line node application that takes in parameters like this:
 *      node calculator.js add 1 2 ... and outputs 3
 *      node calculator.js subtract 5 2 ... and outputs 3
 *      node calculator.js multiply 3 2 ... and outputs 6
 *      node calculator.js divide 8 2 ... and outputs 4
 *      node calculator.js remainder 7 2... and outputs 1
*/

//command line argument for the mathematical operators
var operator = process.argv[2];

//since command line arguments are returned as "string", 
// using parseInt() will convert string into integer
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

//switching condition based on the stated operator
switch(operator){
    case "add":
        //adding two numbers
        console.log(num1 + num2);
        break; 
    case "subtract": 
        //subtracting two numbers
        console.log(num1 - num2);
        break;
    case "multiply":
        //multiplying two numbers
        console.log(num1 * num2);
        break;
    case "divide":
        //dividing two numbers
        console.log(num1 / num2);
        break;
    case "remainder":
        //getting the remainder of the two numbers
        console.log(num1 % num2);
        break;

        //NOTE: without "break" at the end of each case, the condition will
        // perform continuously until it reaches a "break" 
    default:
        console.log("No command found");
}
