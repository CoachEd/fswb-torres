// poker.js
const pokerEval = require('poker-evaluator');
 
var hand1 = pokerEval.evalHand(["Ts", "Td", "Th", "4d", "4c"]);
var hand2 = pokerEval.evalHand(["Ah", "Ac", "3d", "2s", "9c"]);

console.log(hand1);
console.log(hand2);

 