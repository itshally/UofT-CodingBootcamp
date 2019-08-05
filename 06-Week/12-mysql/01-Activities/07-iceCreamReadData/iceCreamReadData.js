//In order to run this file, 
// type this to your git bash console "npm install dotenv"
// then, make a .env file. Type there the syntax and value of your password
// Example:    MYSQL_USER_PASSWORD=typeYourPasswordHere

require('dotenv').config();

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "user",

  // Your password
  password: process.env.MYSQL_USER_PASSWORD,
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
