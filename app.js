

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  
  today = "";
  switch (currentDay) {
    case 0: today = "Sunday"; break;
    case 1: today = "Monday"; break;
    case 2: today = "Tuesday"; break;
    case 3: today = "Wednesday"; break;
    case 4: today = "Thursday"; break;
    case 5: today = "Friday"; break;
    case 6: today = "Saturday"; break;
  }


  res.render('list', { kindOfDay: today });

});

app.listen(3000, function () {
  console.log("Running on port 3000");
});