//In order to run this file, 
// type this to your git bash console "npm install dotenv"
// then, make a .env file. Type there the syntax and value of your password
// Example:    MYSQL_USER_PASSWORD=typeYourPasswordHere

require('dotenv').config();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user : 'user',
    port : '3306',
    password : process.env.MYSQL_USER_PASSWORD,
    database : 'playlist_db'
});

var genre = process.argv[2];

connection.connect(function(error) {
    if (error) throw error;
    console.log("--------------------------------------");
    console.log("connected as id " + connection.threadId + "\n");
    SelectAllSongs();
    QuerySong();
    connection.end();
  });
  
function SelectAllSongs() {
  connection.query("SELECT * FROM songs", function(error, result) {
    console.log("-------------SELECT ALL SONGS HEADER--------------\n");
    for(var x in result){
      console.log("\t" + result[x].id + " => " + result[x].title + " => " + result[x].artist + " => " + result[x].genre);
    }
  });
}

function QuerySong() {
  connection.query("SELECT * FROM songs WHERE genre=?", `${genre}`, function(error, result) {
    if (error) throw error;
    console.log("\n------------------QUERY SONG----------------------\n");
    for (var x in result) {
      console.log(result[x].id + " | " + result[x].title + " | " + result[x].artist + " | " + result[x].genre);
    }
  });
}
  