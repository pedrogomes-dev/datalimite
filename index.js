var express = require('express')
var fs = require('fs');
var path = require('path');
var ext = /[\w\d_-]+\.[\w\d]+$/;

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function() {
  console.log("Server running on: http://localhost:" + app.get('port'))
})
