'use strict';


const express = require('express');
const products = require('../models/products/products-collection');

let router = express.Router();

router.post('/products', (req, res) => {
  products.push(req.body)
  res.status(200).json(req.body)
})

router.get('/products', (req, res) => {
  res.json({
    count: products.length,
    results: products
  })
})

router.get('/products/:id', (req, res) => {
  let apple = products.filter(obj => {
    if (obj.id == req.params.id){
      return obj;
    } else {
      return false;
    }
  })
  res.status(200).json(apple[0]);
})

router.put('/products/:id', (req, res) => {
  let results ;
  products.forEach((obj, i) => {
    if(obj.id == req.params.id){
      results = i;
    } 
  })
  products[results] = req.body;
  res.status(200).json(req.body)
})

router.delete('/products/:id', (req, res) => {
  let results ;
  products.forEach((obj, i) => {
    if(obj.id == req.params.id){
      results = i;
    }
  })
  delete products[results];
  res.status(200).json('delete')
})

const productsData =[
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

module.exports = router;