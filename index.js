'use strict';

const mongoose = require('mongoose');

const server = require('./lib/server');
require('dotenv').config();

const MONGODB_URI = 'mongodb://localhost:27017/class-08';


//server.start(process.env.PORT);


const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(MONGODB_URI, mongooseOptions => {
  
  server.start(3000);

});
