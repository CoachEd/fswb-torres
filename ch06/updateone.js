//updateone.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  var dbo = client.db("music");

  var query = { "title": "Imagine" };
  var newvals = { $set: {"title": "Give Peace a Chance", "duration": 294} };

  dbo.collection("songs").updateOne(query, newvals, function(err, res) {
    if (err) throw err;

    console.log(res.modifiedCount);

    client.close();
  });

});