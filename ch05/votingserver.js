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
      res.status(200).send('error - invalid vote: ' + vote);
      return;

  }
  res.status(200).send(voter_name + ', thank you for voting!');
  return;
});
  
app.listen(5678);

console.log('Server is running...');