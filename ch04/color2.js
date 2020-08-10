//color2.js

var fgcolors = [
  '\x1b[31m', '\x1b[91m', '\x1b[33m', '\x1b[93m', '\x1b[32m',
  '\x1b[92m', '\x1b[34m', '\x1b[94m', '\x1b[35m', '\x1b[95m',
  '\x1b[36m', '\x1b[96m', '\x1b[30m', '\x1b[90m', '\x1b[97m'
];

var bgcolors = [
  '\x1b[41m', '\x1b[101m', '\x1b[43m', '\x1b[103m', '\x1b[42m',
  '\x1b[102m', '\x1b[44m', '\x1b[104m', '\x1b[45m', '\x1b[105m',
  '\x1b[46m', '\x1b[106m', '\x1b[40m', '\x1b[100m','\x1b[107m'
];

//cycle through foreground colors in the output
for (var i=0; i < fgcolors.length; i++) {
  process.stdout.write(fgcolors[i]); //set fg color
  console.log('*****' + '\x1b[0m');
}
console.log('\x1b[0m'); //reset

//cycle through background colors in the output
for (var i=0; i < bgcolors.length; i++) {
  process.stdout.write(bgcolors[i]); //set bg color
  console.log('     ' + '\x1b[0m');
}
console.log('\x1b[0m'); //reset