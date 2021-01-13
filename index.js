var http = require('http');
var fs = require('fs');
var path = require('path');
var ext = /[\w\d_-]+\.[\w\d]+$/;
var port = 8000;

http.createServer(function(req, res){
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    } 
}).listen(port);
console.log("Server running on: http://localhost:"+port);