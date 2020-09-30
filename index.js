'use strict';

const mongoose = require('mongoose');

const server = require('./lib/server');
require('dotenv').config();


const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

server.start(process.env.PORT);