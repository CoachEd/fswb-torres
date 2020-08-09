//webserver.js

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));

//mongodb server location
const uri = "mongodb://127.0.0.1:27017/";

//create a diary entry
app.post('/entries', function(req, res) {
  var id = new Date().getTime();
  var entry = req.body.entry;
  if (!entry)
    entry = "empty entry";

  var obj = {};
  obj.id = id;
  obj.entry = entry;

  MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
    if (err) {
      client.close();
      return res.status(200).send({"rc":1,"msg":"error connecting to db"});
    }
  
    var dbo = client.db("diaryapp");
    dbo.collection("entries").insertOne(obj, function(err, resobj) {
      if (err) {
        client.close();
        return res.status(200).send({"rc":1,"msg":"error in insertOne"});
      } else {
        client.close();
        return res.status(201).send({"rc":0,"msg":"success","id":obj.id});
      }
    });
  }); 
});

//get all diary entries
app.get('/entries', function(req, res) {
  MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
    if (err) {
      client.close();
      return res.status(200).send({"rc":1,"msg":"error connecting to db"});
    }

    var dbo = client.db("diaryapp");
    dbo.collection("entries").find().toArray(function(err, resobj) {
      if (err) {
        client.close();
        return res.status(200).send({"rc":1,"msg":"error in find"});
      } else {
        res.status(201).send({"rc":0,"msg":"success","entries":resobj});
        client.close();
        return;
      }
    });
  });
});

//update a diary entry
app.put('/entries/:id', function(req, res) {
  var id = req.params.id;
  var entry = req.body.entry;

  MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
    if (err) {
      client.close();
      return res.status(200).send({"rc":1,"msg":"error connecting to db"});
    }
  
    var dbo = client.db("diaryapp");
    var query = { "id": parseInt(id) };
    var newvals = { $set: {"entry": entry} };
  
    dbo.collection("entries").updateOne(query, newvals, function(err, resobj) {
      if (err) {
        client.close();
        return res.status(200).send({"rc":1,"msg":"error in updateOne"});
      } else {        
        res.status(201).send(
          {"rc":0,"msg":"success","update count":resobj.modifiedCount}
        );
        client.close();
        return;
      }
    });
  });
});

//delete an entry
app.delete('/entries/:id', function(req, res) {
  var id = req.params.id;
  MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
    if (err) {
      client.close();
      return res.status(200).send({"rc":1,"msg":"error connecting to db"});
    }
  
    var dbo = client.db("diaryapp");
    var query = { "id": parseInt(id) };
  
    dbo.collection("entries").deleteOne(query,function(err, resobj) {
      if (err) {
        client.close();
        return res.status(200).send({"rc":1,"msg":"error in updateOne"});
      } else {        
        res.status(201).send(
          {"rc":0,"msg":"success","deletedid":id, "deletecount":resobj.result.n}
        );
        client.close();
        return;
      }
    });
  });
});

app.listen(5678); //start the server
console.log('Server is running...');