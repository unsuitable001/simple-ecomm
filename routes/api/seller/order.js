const router = require('express').Router();
const {UnimplementedError} = require('../../../models/Error');
const OrderModel = require('../../../models/Order');

router.get('/orders', (req, res, next) => {
  OrderModel.find({
    sellerId: req.user._id,
  }, (err, orders) => {
    if (err) {
      next(err);
      return;
    }
    res.status(200).send({
      orders: orders ?? [],
    });
  });
});

module.exports = router;
