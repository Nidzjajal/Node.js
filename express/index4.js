var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"home4.html"));
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
app.post('/process_post', urlencodedParser, function (req, res) {
   // Extract form data
   let response = {
      first_name: req.body.first_name,
      last_name: req.body.last_name
   };
   console.log(response);
   res.json(response);
})
var server = app.listen(9090, function () {
   console.log("Express App running at http://localhost:9090/");
})



