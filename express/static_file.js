var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(9090, function () {
   console.log("Express App running at http://localhost:9090/");
})