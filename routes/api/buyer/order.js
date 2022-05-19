const {Router} = require('express');
const router = new Router();
const OrderModel = require('../../../models/Order');

router.post('/create-order/:seller_id', (req, res, next) => {
  const order = new OrderModel({
    buyerId: req.user._id,
    sellerId: req.params.seller_id,
    products: req.body.products,
  });

  OrderModel.create(order).then((order) => {
    res.send({
      message: 'Order created successfully',
      order: order,
    });
  }).catch(next);
});

module.exports = router;
