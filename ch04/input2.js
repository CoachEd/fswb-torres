// input2.js
var sum = 0;
var count = 0;
for (var i=2; i < process.argv.length; i++) {
  count++;
  sum += parseFloat( process.argv[i] );
}
console.log('average: ' + sum / count);
