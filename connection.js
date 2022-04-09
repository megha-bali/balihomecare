const mongoose = require('mongoose');

var bodyParser = require('body-parser');

var fs = require('fs');
var path = require('path');
require('dotenv/config');
let mongoDB = process.env.MONGO_URL;
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log('connected');
  }
);
module.exports = mongoose.connect(mongoDB);
