const mongoose = require('../databases/ecommerce');

const {Schema, Types} = require('mongoose');

const OrderSchema = new Schema({
  sellerId: {
    type: Types.ObjectId,
    ref: 'Users',
  },
  buyerId: {
    type: Types.ObjectId,
    ref: 'Users',
  },
  products: [{
    type: Types.ObjectId,
    ref: 'Products',
  }],
});

const OrderModel = mongoose.model('Orders', OrderSchema);
module.exports = OrderModel;
