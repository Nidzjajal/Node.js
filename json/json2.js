var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "user2.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      res.end( JSON.stringify(user));
   });
})

var server = app.listen(9090, function () {
   console.log("Express App running at http://localhost:9090/");
})


