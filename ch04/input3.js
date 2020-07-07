// input3.js
const readline = require("readline");
const rlintf = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rlintf.question("Your name? ", function(name) {
  console.log('Hello ' + name + '!');
  rlintf.close();
});

rlintf.on("close", function() {
    process.exit(0);
});