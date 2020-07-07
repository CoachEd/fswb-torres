// rainfall.js
const stats = require('statistics');
const readlineSync = require('readline-sync');

var inp = 0;
var arr = [];
while (inp != 99999) {
  
  //ask the user for input
  inp = readlineSync.question('Rainfall amount? ');  //waits here for user input
  if (inp != 99999) {
    //process the input
    if (inp < 0) {
      console.log('* invalid input *');
    } else {
      arr.push( parseInt(inp) );
    }
  }

}

if (arr.length == 0) {
  console.log('* no input values *');
} else {
  var results = arr.reduce(stats);
  console.log('Average rainfall: ' + results.mean);
}


