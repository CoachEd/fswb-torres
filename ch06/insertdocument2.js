//insertdocument2.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  var dbo = client.db("music");
  
  //create JSON object to insert
  var mysong = {
    "title": "Purple Rain",
    "artist": "Prince & The Revolution",
    "minutes": 4,
    "seconds": 5,
    "release_date": "09/26/1984"
  };
  
  //insert into the songs collection
  dbo.collection("songs").insertOne(mysong, function(err, res) {
    if (err) throw err;
    console.log("inserted document!");
    client.close();
  });

});