// input5.js
const fs = require('fs');

fs.readFile('file1.txt', "utf8", imDone);

function imDone(err, data) {
  if (err) {
    //error case
    console.error(err);
  } else {
    //success case
    console.log(">" +  data + "<");
  }
}


/*
//UTF-8 is the character encoding we are used to. without this param, a raw buffer is returned
This example reads a text file from the computer and outputs the contents.
It uses the readFile function.
readFile only expects two parameters.
*/
