/**
 * INSTRUCTION:
 *  Starting from scratch, build a Node application called bank.js which takes in user 
 *  inputs via the command line to register bank transactions.
 * The transactions possible are:
        total - this should tally up all of the money in the bank balance and display it for the user.
        deposit <number> - this should add a positive amount to the bank balance. 
                            (No need to display the total here)
        withdraw <number> - this should add a negative amount to the bank balance. 
                            (No need to display the total here)
        lotto - this should subtract an amount from the bank balance, 
                but if a random number is hit it should add back a larger amount into the bank balance.
 * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the bank.txt file.
*/

var fs = require('fs');
var userInput = process.argv[2],
    sub = parseFloat(process.argv[3]);
    

switch(`${userInput}`){
    case 'total':
        Total();
        break;
    case 'deposit':
        Deposit();
        break;
    case 'withdraw':
        Withdraw();
        break;
    case 'lotto':
        Lotto();
        break;
    default:
        console.log('Invalid Entry');
}

//a function for getting the total amount
function Total(){
    fs.readFile('bank.txt', 'utf-8', function(error, result){

        if(error){
            return console.log(error);
        }
        
        //converting the text file into an array
        var dataArray = result.split(',');

        //a variable with a value of 0
        var numbers = 0;
        
        //for every index-value of 'dataArray' will be stored in 'x' variable
        for(var x in dataArray){
            numbers += parseFloat(dataArray[x]);
        }

        console.log('Your total balance is: ' + numbers.toFixed(2));  
    });
}

//a function that adds positive value to the bank.txt
function Deposit(){
    fs.appendFile('bank.txt',  ", " + sub, function(error){
        if(error){
            return console.log(error);
        }
       console.log('Your deposit amount is $' + parseFloat(sub).toFixed(2)); 
    });
}

//a function that adds negative value to the bank.txt
function Withdraw(){
    fs.appendFile('bank.txt',  ", -" + sub, function(error){
        if(error){
            return console.log(error);
        }
        console.log('Your withdraw amount is $' + parseFloat(sub).toFixed(2)); 
    });
}

function Lotto(){
    fs.readFile('bank.txt', 'utf-8', function(error, result){

        if(error){
            return console.log(error);
        }
        
        //converting the text file into an array
        var dataArray = result.split(',');

        //a variable with a value of 0
        var numbers = 0;
        
        //for every index-value of 'dataArray' will be stored in 'x' variable
        for(var x in dataArray){
            numbers = parseFloat(dataArray[x]);
        }

        //a value that generates a random number based from the bank.txt 
        var x = Math.floor(Math.random() * Math.max(...dataArray)) + 1;
        
        //if the random number matches the result
        if(result.includes(x)){

            //a random number for the prize will be generated
            var won = Math.floor(Math.random() * 50) + 5;

            //result will be appended to the text file
            fs.appendFile('bank.txt',  ", " + won, function(error){
                if(error){
                    return console.log(error);
                }

                //prints out that the user just won while stating the prize amount
                console.log('Congratulations! Yon just won $' + parseFloat(won).toFixed(2)); 
            });
        }else{
        //otherwise, it will lose 5 dollars
            fs.appendFile('bank.txt',  ", -5", function(error){
                if(error){
                    return console.log(error);
                }
                //prints out that the user just lost the game
                console.log('You lose. Better luck next time.'); 
            });

        }
    });
}