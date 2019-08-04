/**
 * INSTRUCTION:
 *  Make a JavaScript file called bands.js that exports an object of music genres and bands like this:
 * 
        {
            punk: 'Green Day',
            rap: 'Run DMC',
            classic: 'Led Zeppelin'
        }
 * Require this JavaScript file in run.js, loop over the values, and console.log them.
 * Note: If you are having trouble with looping through objects, please google how to loop 
 *      through objects in javascript to get yourself in the right direction!
 * Utilize a for/in statement to loop through the object and call a single console.log() 
 * that will output all of your bands. Do not write anymore than ONE console.log() within your code (it will go inside for/in loop)
 * Make sure the program runs properly when entered into the terminal like this:
        node run.js
 * And that the output looks something like the below:
        A punk band is Green Day
        A rap band is Run DMC
        A classic band is Led Zeppelin
 *
*/
var band = {
    punk : 'Greenday',
    rap : 'Run DMC',
    classic : 'Led Zeppelin' 
}

module.exports = band;