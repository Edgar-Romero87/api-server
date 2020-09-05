'use strict';

const express = require('express');
const app = express();
const timeStamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const error = require('./middleware/404');
const error500 = require('./middleware/500');
app.use(express.urlencoded({
  extended:true, 
}))
app.use(express.json()); //express middleware
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
    if (obj.id == req.params.id){
      return obj;
    } else {
      return false;
    }
  })
  res.status(200).json(apple[0]);
})

app.put('/products/:id', (req, res) => {
  let results ;
  products.forEach((obj, i) => {
    if(obj.id == req.params.id){
      results = i;
    } 
  })
  products[results] = req.body;
  res.status(200).json(req.body)
})

app.delete('/products/:id', (req, res) => {
  let results ;
  products.forEach((obj, i) => {
    if(obj.id == req.params.id){
      results = i;
    }
  })
  delete products[results];
  res.status(200).json('delete')
})



app.post('/categories', (req, res) => {
  categories.push(req.body)
  res.status(200).json(req.body)
})


app.get('/categories', (req, res) => {
  res.json({
    count: categories.length,
    results: categories
  })
})

app.get('/categories/:id', (req, res) => {
  let apple = categories.filter(obj => {
    if (obj.id == req.params.id){
      return obj;
    } else {
      return false;
    }
  })
  res.status(200).json(apple[0]);
})

app.put('/categories/:id', (req, res) => {
  let results ;
  categories.forEach((obj, i) => {
    if(obj.id == req.params.id){
      results = i;
    } 
  })
  categories[results] = req.body;
  res.status(200).json(req.body)
})

app.delete('/categories/:id', (req, res) => {
  let results ;
  categories.forEach((obj, i) => {
    if(obj.id == req.params.id){
      results = i;
    }
  })
  delete categories[results];
  res.status(200).json('delete')
})



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
