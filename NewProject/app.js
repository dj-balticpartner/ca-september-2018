var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var person = {
    name: "Jonas",
    age: 25
}

app.get('/', function (req, res) {
    res.json(person);
});

app.listen(3000, function () {
    console.log('server started on port 3000...');
});