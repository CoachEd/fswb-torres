//votingserver.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());

var bluevotes = 0;
var redvotes = 0;

//Define methods here

app.post('/addVote',function(req, res) {
  var voter_name = req.body.name;
  var vote = req.body.vote;

  switch(vote) {

    case "blue":
      bluevotes++;
      break;

    case "red":
      redvotes++;
      break;

    default:
      res.status(200).send('error - invalid vote: ' + vote + '\n');
      return;

  }
  res.status(200).send(voter_name + ', thank you for voting!\n');
  return;
});

app.get('/getVotes', function(req, res) {
  var str = 'Blue: ' + bluevotes + ' , ' + 'Red: ' + redvotes + '\n';
  res.status(200).send(str);
  return;
});

app.get('/getVote', function(req, res) {
  var color = req.query.color;

  //validate color
  if (!color) {
    color = "";
  }
  if (color !== 'blue' && color !== 'red') {
    res.status(200).send("error - invalid color\n");  
    return;
  }
    
  var str;
  if (color == 'blue') {
    str = "Blue: " + bluevotes + "\n";
  } else {
    str = "Red: " + redvotes + "\n";
  }
  res.status(200).send(str);
  return;
});

app.listen(5678); //start the server

console.log('Server is running...');