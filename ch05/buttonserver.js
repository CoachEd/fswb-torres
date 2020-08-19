//buttonserver.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));

app.get('/buttons', function(req, res) {
  res.set('Content-Type', 'text/html');  //sending HTML back

  var sHTML = '<!DOCTYPE html><html lang="en"><head>';
  sHTML += '<title>Buttons</title></head><body>';
  
  for (var i=0; i < 100; i++) {
    sHTML += '<button type="button">' + i + '</button>&nbsp;';
  }
  sHTML += '</body></html>';

  res.status(200).send( Buffer.alloc(sHTML.length,sHTML) );
  return;
});

app.listen(5678); //start the server

console.log('Server is running...');