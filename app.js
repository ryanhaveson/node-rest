var os = require("os");
var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app = express();

var port = process.env.PORT || 3000;


var bookRouter = express.Router();
bookRouter.route('/Books')
    .get((req, res) => {
        var query = {};
        if(req.query.genre) {
            query.genre = req.query.genre;
        }
        Book.find(query, (err, books) => {
            if(err)
                res.status(500).send(err);
            else
                res.json(books); 
        });
    });

bookRouter.route('/Books/:bookId')
    .get((req, res) => {
        Book.findById(req.params.bookId, (err, book) => {
            if(err)
                res.status(500).send(err);
            else
                res.json(book); 
        });
    });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my API!');
});

app.listen(port, () => {
    
    console.log("running my server on Cloud9 -> https://" + process.env.C9_HOSTNAME + ":" + port);
});

