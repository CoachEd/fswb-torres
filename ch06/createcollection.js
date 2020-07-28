//createcollection.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";
 
MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  //get the database object
  var dbo = client.db("music");
  
  //create the collection
  dbo.createCollection("songs", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    client.close(); 
  });

});
