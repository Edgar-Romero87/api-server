'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  inStock: { type: Number, required: true}
})

const productsSchema = mongoose.model('products', products);
module.exports = new Model(productsSchema)
