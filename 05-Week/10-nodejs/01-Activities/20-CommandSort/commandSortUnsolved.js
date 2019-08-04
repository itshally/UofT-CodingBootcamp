/**
 * INSTRUCTION:
 * Starting from a blank file, create a Node-based command-line application that takes 
 * in a series of numbers from the user and returns the numbers sorted in ascending order.
*/

var inputList = [];

var argCount = process.argv;

for ( var i = 2; i < argCount.length; i++){
    inputList.push(argCount[i]);
}

console.log('input list: ' + inputList)
console.log('sorted list: ' + inputList.sort((a, b) => {return a-b}));