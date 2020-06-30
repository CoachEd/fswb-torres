// craps.js
var str = "";
var num = 0;
var roll = 0;

while (num !== 7 && num !== 11) {
  roll++;

  num = Math.floor( Math.random() * 6 ) + 1; //dice 1
  num += Math.floor( Math.random() * 6 ) + 1; //dice 2

  str += "Roll " + roll + ": " + num + "\n";
}
console.log(str);