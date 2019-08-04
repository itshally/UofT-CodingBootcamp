/**
 * INSTRUCTION:
 *  Write a command line node application that takes in a number from the command line 
 *  and finds the sum of all the multiples of 6 that are smaller than it. (ex: input: 13... output: 6 + 12 = 18)
*/

var numberInput = parseInt(process.argv[2]); //command line argument
var sum = 0; //variable with integer number as its default number
                              
for(var x = 6; x <= numberInput; x += 6){ 
//created a new variable of "x" with a value of "6"
//a conditional statement that will loop while "x" is less than or equal to the command line argument
// x += 6 means it will add 6 to it while the conditional statement is true
    
    //The process of loop...
    sum += x;   
    // sum = sum + x
    //  0  =  0  + 6 
    //  6  =  6  + 6
    //  12 = 12  + 6

    //once the value of sum reached its limit, it will then total its values
    //sum = 0 + 6 + 12
}

//output will be the total
console.log(sum);