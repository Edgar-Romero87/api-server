'use strict';

const express = require('express');
const categories = require('../models/categories/categories-collection');

let router = express.Router();

router.post('/categories', (req, res) => {
  categories.push(req.body)
  res.status(200).json(req.body)
})


router.get('/categories', (req, res) => {
  res.json({
    count: categories.length,
    results: categories
  })
})

router.get('/categories/:id', (req, res) => {
  let apple = categories.filter(obj => {
    if (obj.id == req.params.id){
      return obj;
    } else {
      return false;
    }
  })
  res.status(200).json(apple[0]);
})

router.put('/categories/:id', (req, res) => {
  let results ;
  categories.forEach((obj, i) => {
    if(obj.id == req.params.id){
      results = i;
    } 
  })
  categories[results] = req.body;
  res.status(200).json(req.body)
})

router.delete('/categories/:id', (req, res) => {
  let results ;
  categories.forEach((obj, i) => {
    if(obj.id == req.params.id){
      results = i;
    }
  })
  delete categories[results];
  res.status(200).json('delete')
})


const categoriesData = [
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


module.exports = router;