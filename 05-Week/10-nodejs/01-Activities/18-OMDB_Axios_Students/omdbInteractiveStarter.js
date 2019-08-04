// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...


// Grab or assemble the movie name and store it in a variable called "movieName"
// var movieName = "Mission Impossible";
var movieName = process.argv.slice(2).join(" ");
// ...


// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + `${movieName}` + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request with axios to the queryUrl
// ...  
var axios = require('axios');

axios.get(queryUrl).then(
  function(response) {
      //NOTE: if the user didn't type any movie title, there is a movie titled 'Undefined'
      //thus, it will be the default for movieName

      // If the request with axios is successful
      // ...
      console.log("The Title is: " + response.data.Title)
      console.log("The Release Date is: " + response.data.Released);
      console.log("The Year is: " + response.data.Year);
    }
  )
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

