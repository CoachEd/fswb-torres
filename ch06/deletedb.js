//deletedb.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;
  
  const db = client.db("music");

  db.dropDatabase(function(err, result) { 
    if(err) throw err;
    console.log(result);
    client.close(); 
  });

});

