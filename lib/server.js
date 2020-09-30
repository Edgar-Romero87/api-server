'use strict';

const express = require('express');
const app = express();

//middleware
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error = require('./middleware/404');
const error500 = require('./middleware/500');
//routes
const categories = require('./routes/categories');
const products = require('./routes/products');
//use the routes and middleware
app.use(express.urlencoded({
  extended:true, 
}))
app.use(express.json()); //this makes {} into req.body
app.use(timeStamp);
app.use(logger);
app.use(categories);
app.use(products);

app.use(error);
app.use(error500);

//default route
app.get('/', (req, res ) => {
  res.send('Please select Products or Categories');
})

//start server function 
module.exports ={
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`running on`, port))
  }
}
