//insertmany2.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  var dbo = client.db("music");
  
  //an array of JSON objects to insert
  var mysongs = [
    { "title":"Imagine", "first":"John", "last":"Lennon", "duration":183},
    { "title":"Pink Houses", "first":"John", "last":"Mellencamp", "duration":283},
    { "title":"In Between Days", "first":"The Cure", "last":"", "duration":177},
    { "title":"Ceremony", "first":"New Order", "last":"", "duration":274}
  ];

  dbo.collection("songs").insertMany(mysongs, function(err, res) {
    if (err) throw err;

    console.log("Result object: " + JSON.stringify(res, null, 4));

    client.close();
  });
  
});
