require('dotenv').config();
var mysql = require('mysql');
var inquirer = require('inquirer');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    port: '3306',
    password: process.env.MYSQL_USER_PASSWORD,
    database: 'great_bay'
});

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "list",
        message: "You are here for what?",
        choices: ["POST AN ITEM", "BID ON AN ITEM"],
        name: "choices"
    }
  ])
  .then(function(result){
    
    switch(result.choices){
      case 'POST AN ITEM':
        PostAnItem();
        break;
      case 'BID ON AN ITEM':
        BidOnItem();
        break;
    }
});


function PostAnItem(){
    inquirer
        .prompt([
            {
              type: "input",
              message: "Enter item name: ",
              name: "name"
            },
            {
              type: 'list',
              message: "Select Category:",
              choices: ['antique', 'art', 'book', 'diamond', 'jewelry', 'painting', 'toy', 'wine'],
              name: 'category'
            },
            {
              type: 'input',
              message: 'Item description: ',
              name: 'description'
            },
            {
              type: 'input',
              message: 'Starting price: $',
              name: 'price'
            }
        ])
        .then(function(data){
            var query = conn.query('INSERT INTO item_tbl SET ?', {
              item_category: data.category,
              item_name: data.name,
              item_description: data.description,
              item_starting_price: data.price
            }, function(){
              console.log('New auction item has been added.');
              conn.end();
            })
            console.log(query.sql)
        }
    );
};


function BidOnItem(){
    inquirer.prompt([
      {
        type: 'list',
        message: 'Select Category:',
        choices: ['antique', 'art', 'book', 'diamond', 'jewelry', 'painting', 'toy', 'wine'],
        name: 'category'
      }
    ]).then(function(data){

      var itemArray = [];
      var q = conn.query("SELECT * FROM item_tbl WHERE item_category=?", [data.category], function(err, result) {
            for(var x in result){
              itemArray.push(result[x].item_name);
            }
            
            inquirer.prompt([
              {
                type: 'list',
                message: 'Which item?',
                choices: itemArray,
                name: 'item'
              }
            ]).then(function(data){
              console.log("\nYou have chosen '" + data.item + "'")
              console.log("Desription: " + result[x].item_description +
              "\nStarting Price: $" + result[x].item_starting_price + "\n");

              // inquirer.prompt([
              //   {
              //     type: 'input',
              //     message: 'How much do you want to bid?',
              //     name: 'bidding_price'
              //   }
              // ])
            })
            conn.end();
        });
        console.log(q.sql)    
        
    })
    
}

