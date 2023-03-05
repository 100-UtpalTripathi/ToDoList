

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function (req, res) {

  var today = new Date();
  if (today.getDay() == 1 || today.getDay() == 0) {
    res.sendFile(__dirname + '/index.html');
  }
  else
    res.send("oops working day");
});

app.listen(3000, function () {
  console.log("Running on port 3000");
});