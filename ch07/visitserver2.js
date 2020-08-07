//visitserver2.js
const express = require('express')
const app = express()
app.use(express.static('./'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var visits = 0;

app.get('/getVisits', function (req, res) {
  var your_name = req.query.your_name;
  res.status(200).send(your_name + ', number of visits: '+visits);
  return;
})

app.post('/visit',function(req, res) {
  var your_name = req.body.your_name;
  visits++;
  res.status(200).send(your_name + ', visit counted. Byeeeee!');
  return;
});

app.listen(5678);

console.log('Server is running...');