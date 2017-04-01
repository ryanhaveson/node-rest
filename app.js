var os = require("os");
var express = require('express');
var mongoose = require('mongoose');
bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
app.use('/api', bookRouter);
app.get('/', (req, res) => {
    res.send('welcome to my other API!');
});

app.listen(port, () => {
    
    console.log("running my server on Cloud9 -> https://" + process.env.C9_HOSTNAME + ":" + port);
});

