const express = require 'express';
var port = process.env.PORT || 3000;
var app = express.createServer();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).configure(function() {
    app.use('/fonts', express.static(__dirname + '/fonts'));
}).listen(port);