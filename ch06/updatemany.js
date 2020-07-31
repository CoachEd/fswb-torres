//updatemany.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  var dbo = client.db("music");

  var query = { "duration": { $lt: 200 } };
  var newvals = { $set: {"comment": "short song"} };

  dbo.collection("songs").updateMany(query, newvals, function(err, res) {
    if (err) throw err;

    console.log(res.modifiedCount);

    client.close();
  });

});