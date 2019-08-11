var http = require('http'),
    PORT1 = 7000,
    PORT2 = 7500;

function handleRequestOne(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("First, solve the problem... ");
}

function handleRequestTwo(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("Then, write the code. \n -John Johnson");
}


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequestOne);
var server2 = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });




// ----- TESTING -----

// //SERVER 1
// http.createServer(function(request, response){
//   response.writeHead(200, {'Content-Type':'text/html'});
//   response.write('It Works!! Path Hit: ' + request.url);
//   response.write('<h1>This is Server 1</h1>');
//   response.end();
// }).listen(PORT1, function(req, res){
//   console.log('Server1 is listening from http://localhost:' + PORT1);
// });

// //SERVER 2
// http.createServer(function(request, response){
//   response.writeHead(200, {'Content-Type':'text/html'});
//   response.write('It Works!! Path Hit: ' + request.url);
//   response.write('<h1>This is Server 2</h1>');
//   response.end();
// }).listen(PORT2, function(){
//   console.log('Server2 is listening from http://localhost:' + PORT2);
// });