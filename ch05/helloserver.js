//helloserver.js

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello world!')
})
 
app.listen(5678);

console.log('Server is running...');