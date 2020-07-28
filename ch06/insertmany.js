//insertmany.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  var dbo = client.db("music");
  
  //an array of JSON objects to insert
  var mysongs = [
    { "title": "Imagine", "artist": "John Lennon"},
    { "title": "Don't Worry Be Happy", "artist": "Bobby McFerrin"},
    { "title": "Where The Streets Have No Name", "artist": "U2"}
  ];

  dbo.collection("songs").insertMany(mysongs, function(err, res) {
    if (err) throw err;

    console.log("Result object: " + JSON.stringify(res, null, 4));

    client.close();
  });
  
});
