//studentserver.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));



app.listen(5678); //start the server
console.log('Server is running...');