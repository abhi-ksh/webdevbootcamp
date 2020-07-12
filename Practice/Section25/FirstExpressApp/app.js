var express = require("express");
// define the app
var app = express();


//define a couple of routes
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/dogs', function (req, res) {
    res.send('Thanks for visiting Dogs page!');
});

app.get('/people', function (req, res) {
    res.send('Thanks for visiting people\'s page!');
});

// start listening
app.listen(3000, function () {
    console.log("Server listening on port: 3000");
});
