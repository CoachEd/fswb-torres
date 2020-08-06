//visitserver.js
const express = require('express')
const app = express()
app.use(express.static('./'));

var visits = 0;

app.get('/getVisits', function (req, res) {
  res.status(200).send('Number of visits: '+visits);
  return;
})

app.post('/visit',function(req, res) {
  visits++;
  res.status(200).send('Visit counted. Byeeeee!');
  return;
});

app.listen(5678);

console.log('Server is running...');