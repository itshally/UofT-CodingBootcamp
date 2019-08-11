// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
    //OUTPUT: It Works!! Path Hit: /
  
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});





//----- TESTING ----
// // Source: https://www.w3schools.com/nodejs/nodejs_http.asp

// //createServer() method to create an HTTP server
// http.createServer(function(request, response){
  
//   /**
//      including HTTP header with the correct Content-Type is required
//      to display the HTTP server response as HTML
//      first parameter: status code
//      second parameter: an object containing the response headers.
//   */ response.writeHead(200, {'Content-Type': 'text/html'});
  
//   /**
//     first argument in createServer() method is 'request'
//     - represents the request from the client, as an object
//     This object has a property called "url" which holds the 
//     part of the url that comes after the domain name:
//   */ response.write('It Works!! Path Hit:' + request.url);
  
//   //This prints 'Hello World'
//   response.write('<h1>Hello World!</h1>')

//   //end the response, otherwise it will still keep on requesting 
//    response.end(); 
// }).listen(PORT, function(){
//   console.log("Server listening on: http://localhost:" + PORT);
// });