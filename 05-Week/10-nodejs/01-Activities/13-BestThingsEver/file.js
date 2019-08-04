var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf-8', function(error, result){
    if(error){
        return console.log(error);
    }

    var datArr = result.split(',');

    for(var x = 0; x < datArr.length; x++){
        console.log(datArr[x]);
    }
    
})