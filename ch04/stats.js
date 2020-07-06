// statistics.js
const stats = require('statistics');

var arr = [1,2,9,8,5,7,11];
var results = arr.reduce(stats);

console.log(results);