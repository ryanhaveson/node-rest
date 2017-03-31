var express = require('express');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var app = express();

var port = process.env.PORT || 3000;


var bookRouter = express.Router();
bookRouter .route('/Books')
    .get((req, res) => {
        var responseJson = {hello: "This is my api"};
        res.json(responseJson);
    });
    
app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my API!');
});

app.listen(port, () => {
    console.log("running my server on Cloud9 -> https://" + process.env.C9_HOSTNAME + ":" + port);
});

