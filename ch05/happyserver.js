//happyserver.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));

app.get('/happy', function(req, res) {
  res.status(200).sendFile(__dirname + '/smiley.html');
  return;
});

app.listen(5678); //start the server

console.log('Server is running...');