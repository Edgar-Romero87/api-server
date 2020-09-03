'use strict';

// const mongoose = require('mongoose');
// require('dotenv').config();

const server = require('./lib/server');
require('dotenv').config();

server.start(process.env.PORT);


// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,

// })