/**
 * INSTRUCTION: 
 * Create a command line node application that takes in two parameters 
 * and outputs whether they are equal or not.
*/

var arg1 = process.argv[2],
    arg2 = process.argv[3];

//checks if the command line arguments are equal or not
(arg1 == arg2) ? console.log(arg1 + " and " + arg2 + " are equals.") : console.log(arg1 + " and " + arg2 + " are NOT equals."); 

