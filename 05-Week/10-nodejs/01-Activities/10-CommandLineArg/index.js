/**
 * INSTRUCTION:
 *  Starting from a blank JavaScript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".
*/

var arg1 = process.argv[2],
    arg2 = process.argv[3];

(arg1 === arg2) ? console.log(true) : console.log(false);