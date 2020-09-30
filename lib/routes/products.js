'use strict';

const express = require('express');
const products = require('../models/products/products-collection.js');
let router = express.Router();
//ROUTES
router.post('/products', create);
router.get('/products', getAll);
router.get('/products/:id', getOne);
router.put('/products/:id', update);
router.delete('/products/:id', destroy);

//CRUD
async function create(req, res, next){
  let newRecord = await products.create(req.body)
  res.status(200).json(newRecord)
}

async function getAll(req, res, next){
  let allProducts = await products.readAll();
  res.json({
    count: allProducts.length,
    results: allProducts
  })
}

async function getOne(req, res, next){
  let oneProduct = await products.read(req.params.id);
  res.status(200).json(oneProduct);
}

async function update(req, res, next){
  let updateOne = await products.update(req.params.id, req.body)
  res.status(200).json(updateOne)
}

async function destroy(req, res, next){
  let deleteOne = await products.delete(req.params.id)
  res.status(200).json(deleteOne)
}


module.exports = router;