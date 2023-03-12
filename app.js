

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get('/', function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render('list', { listTitle: day, newListItems: items });
});

app.get('/work', function (req, res) {
  res.render('list', { listTitle: "Work List", newListItems: workItems });
});

//in the form declared in list.ejs, action is defined as "/", so to differentiate whether data is coming from '/' or '/work' we need to use button value. In list.ejs, button value we are setting dynamically, which is passed to post '/' and there we have to decide whether it is coming from '/' or '/work' so accordingly we are adding to the lists and redirecting.....
app.post('/', function (req, res) {
  let item = req.body.newItem;
  //console.log(req.body);
  if (req.body.button === "Work") {
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("Running on port 3000");
});