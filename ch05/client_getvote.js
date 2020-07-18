//client_getvote.js
var http = require('http');

var options = {
  'host': 'localhost',
  'port': 5678,
  'path': '/getVote?color=red',
  'method': 'GET'
};

var req = http.request(options, readResponse);
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