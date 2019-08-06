require('dotenv').config();
var mysql = require('mysql'),
    inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user : 'user',
    port : '3306',
    password : process.env.MYSQL_USER_PASSWORD,
    database : 'ice_creamdb'
});

connection.connect(function(error){
    console.log(connection.threadId);

    inquirer.prompt([
        {
            type: 'list',
            message: 'What do you want to do?',
            choices: ['Create', 'Read', 'Update', 'Delete'],
            name: 'choices'
        }
    ]).then(function(choices){
        for(var x in choices){
            switch(choices[x]){
                case 'Create':
                    console.log("You picked create")
                    Create();
                    break;
                case 'Read':
                    console.log("You picked read")
                    Read();
                    break;
                case 'Update':
                    console.log("You picked update")
                    Update();
                    break;
                case 'Delete':
                    console.log("You picked delete")
                    Delete();
                    break;
            }
        }
    });
    
})

function Create(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the flavour?',
            name: 'flavour'
        },
        {
            type: 'input',
            message: 'What is the price?',
            name: 'price'
        },
        {
            type: 'input',
            message: 'What is the quantity?',
            name: 'quantity'
        }
    ]).then(function(data){
        connection.query('INSERT INTO products SET ?', {flavor:data.flavour, price: data.price, quantity: data.quantity}, function(error, result){
            console.log('new ice cream has been created');
        });
        connection.end();
    })
}

function Read(){
    connection.query('SELECT * FROM products', function(error, result){
        for(var x in result){
            console.log(result[x].id + " | " + result[x].flavor + " | " + result[x].price + " | " + result[x].quantity)
        }
    })
    connection.end();
}

function Update(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please type the id number that you want to update.',
            name: 'update'
        },
        {
            type: 'list',
            message: "What do you want to change?",
            choices: ['price', 'quantity'],
            name: 'update_this'
        },
        {
            type: 'input',
            message: 'Please type the new data.',
            name: 'new_data'
        }

    ]).then(function(data){

        if(data.update_this == 'price'){
            connection.query('UPDATE products SET price=? WHERE id=?', [Number(data.new_data), Number(data.update)], function(){
                console.log('Data is successfully updated!');
                connection.end();
            })
        }else if(data.update_this == 'quantity'){
                query = connection.query('UPDATE products SET quantity=? WHERE id=?', [Number(data.new_data), Number(data.update)], function(result){
                console.log('Data is successfully updated!');
                connection.end();
            })
        }

    });
    
}

function Delete(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'State which row id you want to delete',
            name: 'delete_this'
        },
        {
            type: 'confirm',
            message: 'Are you sure?',
            name: 'confirm',
            default: false   
        }
    ]).then(function(data){
        if(data.confirm == true){
            connection.query('DELETE FROM products WHERE id=?', [data.delete_this], function(){
                console.log('Data has been successfully deleted');
                connection.end();
            })
        }else{
            
        }
    })
    
}