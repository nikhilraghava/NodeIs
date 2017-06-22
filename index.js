var express = require('express');
var app = express();

//Port web server is running
const port = 8080;

//Enable EJS
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.sendfile(__dirname + '/index.html');
});

app.get('/:attribute', function (request, response) {
    response.render('about', {attribute: request.params.attribute});
});

//Web server
app.listen(port, function () {
    console.log(`Server is now running on localhost port ${port}`);
});