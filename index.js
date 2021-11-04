const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const  mongoose  = require('./db.js');
const cors = require('cors');

var reliefController = require('./controllers/reliefController.js')
var bookmarkController = require('./controllers/bookmarkController.js')

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.listen(8000, () => console.log('Server start at port 8000...'));


app.use('/relief', reliefController);
app.use('/bookmark', bookmarkController);