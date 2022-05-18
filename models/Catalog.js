const mongoose = require('../databases/ecommerce');

const { Schema, Types } = require('mongoose');
const ProductModel = require('./Product');

const CatalogSchema = new Schema({
  sellerId: {
    type: Types.ObjectId,
    ref: 'Users',
    unique: true
  },
  products: {
    type: [ ProductModel.schema ]
  }
});

const CatalogModel = mongoose.model('Catalogs', CatalogSchema);
module.exports = CatalogModel;
