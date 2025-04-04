var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"home2.html"));
})

var server = app.listen(9090, function () {
   
   console.log("Express App running at http://localhost:9090/");
})