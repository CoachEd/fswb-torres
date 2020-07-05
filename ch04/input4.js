// input4.js
const readline = require("readline");
const rlintf = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rlintf.question("Your name? ", function(name) {
  rlintf.question("Enter grades separated by a space: ", function(grades) {
    var arr = grades.split(" ");
    var sum = 0;
    for (var i=0; i < arr.length; i++) {
      sum = sum + parseFloat(arr[i]);
    }
    console.log(name + ', the average grade is: ' + (sum / arr.length) );
    rlintf.close();
  });
});

rlintf.on("close", function() {
    process.exit(0);
});