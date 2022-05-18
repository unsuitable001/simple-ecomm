const mongoose = require('../databases/ecommerce');

const { Schema, Types } = require('mongoose');
const ProductSchema = require('./Product');

const CatalogSchema = new Schema({
  sellerId: {
    type: Types.ObjectId,
    unique: true
  },
  products: {
    type: [ ProductSchema ]
  }
});

const CatalogModel = mongoose.model('Catalogs', CatalogSchema);
module.exports = CatalogModel;
