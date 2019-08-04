// testing with command line argument

var fs = require('fs');

fs.appendFile('testing.txt', process.argv[2] + "\n", function(){
    console.log('file is updated!')
});

// write() replaces the existing text in a file
// appendFile() adds string to the file