//client_updatevotes.js
var http = require('http');

var options = {
  host: 'localhost',
  port: 5678,
  path: '/updateVotes',
  method: 'PUT',
  headers: {'Content-Type': 'application/json'}
};

var data = { "bluevotes":100, "redvotes":50 }; 

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
