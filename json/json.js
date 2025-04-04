var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
      res.end( data );
   });
})
var server = app.listen(9090, function () {
   console.log("Express App running at http://localhost:9090/");
})