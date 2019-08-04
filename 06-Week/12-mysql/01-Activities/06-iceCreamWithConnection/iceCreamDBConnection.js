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

console.log(process.env.MYSQL_USER_PASSWORD)
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
