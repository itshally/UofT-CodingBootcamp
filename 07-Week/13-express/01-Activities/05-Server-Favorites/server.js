// Dependencies
var http = require("http");
var fs = require("fs");
var url = require('url');
var querystring = require('querystring');

// Set our port to 8080
var PORT = 8080;


// ----- TESTING -----

http.createServer(function(request, result){

  switch(request.url){
    case '/':
      HomePage();
      break;
    case '/foods':
      FoodPage();
      break;
    case '/frameworks':
      FrameworksPage();
      break;
    case '/movies':
      MoviesPage();
      break;
  }


  function HomePage(){
    fs.readFile(__dirname + '/index.html', function(error, data){
      result.writeHead(200, {'Content-Type':'text/html'});
      result.write(data);
      result.end();
    });
  }

  function FoodPage(){
    fs.readFile(__dirname + '/foods.html', function(error, data){
      result.writeHead(200, {'Content-Type':'text/html'});
      result.write(data);
      result.end();
    });
  }

  function FrameworksPage(){
    fs.readFile(__dirname + '/frameworks.html', function(error, data){
      result.writeHead(200, {'Content-Type':'text/html'});
      result.write(data);
      result.end();
    });
  }

  function MoviesPage(){
    fs.readFile(__dirname + '/movies.html', function(error, data){
      result.writeHead(200, {'Content-Type':'text/html'});
      result.write(data);
      result.end();
    });
  }

}).listen(PORT, function(){
  console.log('Server listening to http://localhost:' + PORT);
});
