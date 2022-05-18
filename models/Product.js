const mongoose = require('../databases/ecommerce');

const { Schema } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  currency: String,
  price: Number
});

module.exports = ProductSchema;
