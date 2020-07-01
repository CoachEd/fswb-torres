// process1.js

process.stdout.write('hello ');
process.stdout.write('world');

process.stdout.write('\n\n');

process.stdout.write('Mars\n');
process.stdout.write('Jupiter');

process.stdout.write('\n\n');

process.stdout.write('Hello world');
process.stdout.cursorTo(6);  //move to position 6
process.stdout.write('Earth');

process.stdout.write('\n\n');

process.stdout.write('Hello Venus');
process.stdout.clearLine();
process.stdout.write('Hello Pluto'); //prints after the cleared text

process.stdout.write('\n\n');

process.stderr.write('output to stderr');