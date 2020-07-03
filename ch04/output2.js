//output2.js

const fs = require('fs');

output_str = "Fool me once\nshame on you\nfool me twice\nshame on me";

fs.writeFile("file1.txt", output_str, imDone);
console.log('after writeFile');

function imDone(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("File created successfully!");
  }
}
