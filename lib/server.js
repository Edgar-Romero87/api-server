'use strict';

const express = require('express');
const app = express();
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error = require('./middleware/404');
const error500 = require('./middleware/500');
const categories = require('./routes/categories');
const products = require('./routes/products');
app.use(express.urlencoded({
  extended:true, 
}))
app.use(express.json()); //this makes {} into re.body
app.use(timeStamp);
app.use(logger);
app.use(categories);
app.use(products);


app.use(error);
app.use(error500);


module.exports ={
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`running on`, port))
  }
}
