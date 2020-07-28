//insertdocument.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  var dbo = client.db("music");
  
  //create JSON object to insert
  var mysong = {
    "title": "Uprising",
    "artist": "Muse",
    "minutes": 3,
    "seconds": 35
  };
  
  //insert into the songs collection
  dbo.collection("songs").insertOne(mysong, function(err, res) {
    if (err) throw err;
    console.log("inserted document!");
    client.close();
  });

});