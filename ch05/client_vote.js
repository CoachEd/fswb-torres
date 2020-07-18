//client_vote.js
var http = require('http');

var options = {
  host: 'localhost',
  port: 5678,
  path: '/addVote',
  method: 'POST',
  headers: {'Content-Type': 'application/json'}
};

var data = { "name":"Alexandria", "vote":"blue" }; 

//send the POST request
var req = http.request(options, readResponse);
req.write(JSON.stringify(data));
req.end();

function readResponse(response) {
  var responseData = '';
  response.on('data', function (chunk) {
    responseData += chunk;
  });
  response.on('end', function() {
    console.log(responseData);
  });
}
