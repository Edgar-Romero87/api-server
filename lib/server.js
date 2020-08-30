'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error = require('./middleware/404');
const error500 = require('./middleware/500');
app.use(express.urlencoded({
  extended:true, 
}))
app.use(express.json());
app.use(timeStamp);
app.use(logger);



app.post('/products', (req, res) => {
  products.push(req.body)
  res.status(200).json(req.body)
})
app.get('/products', (req, res) => {
  res.json({
    count: products.length,
    results: products
  })
})
app.get('/products/:id', (req, res) => {
  let apple = products.filter(obj => {
    if (obj.id === req.params.id){
      return true;
    }
  })
  res.json(apple[0]);
})
app.put('/products/:id', (req, res) => {})
app.delete('/products:id', (req, res) => {})

app.post('/categories', (req, res) => {})
app.get('/categories', (req, res) => {
  res.json(categories)
})
app.get('/categories/:id', (req, res) => {})
app.put('/categories/:id', (req, res) => {})
app.delete('/categories:id', (req, res) => {})


app.use(error);
app.use(error500);

const products =[
  {
    name: "edgar",
    display_name: "Edgar Romero",
    description: "full name",
    id: 1
  },
  {
    name: "Romero",
    display_name: "Edgar Romero",
    description: "2full name",
    id: 2
  }
]

const categories = [
  {
    name: "jon",
    display_name: "Edgar Romero",
    description: "full name",
    id: 1
  },
  {
    name: "Romero",
    display_name: "Edgar Romero",
    description: "2full name",
    id: 2
  },
  {
    name: "Edgar",
    display_name: "Edgar Romero",
    description: "categories full name",
    id: 3
  }
]

module.exports ={
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`running on`, port))
  }
}
