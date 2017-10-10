const express = require ('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('./')).get('/', function(request, response) {
    response.sendFile('./index.html');
}).listen(port);
