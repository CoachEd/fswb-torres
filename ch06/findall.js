//findall.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  var dbo = client.db("music");

  dbo.collection("songs").find().toArray(function(err, res) {
    if (err) throw err;

    for (var i=0; i < res.length; i++) {
      console.log( res[i].title );
    }

    client.close();
  });

});