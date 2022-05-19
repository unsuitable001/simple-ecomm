const {Router} = require('express');
const {param, body, validationResult} = require('express-validator');
const router = new Router();
const OrderModel = require('../../../models/Order');

router.post('/create-order/:seller_id',
    param('seller_id', 'Please enter a valid seller id').isMongoId(),
    body('products', 'Provide a valid products array')
        .exists().isArray().notEmpty(),
    body('products.*', 'Provide valid product id(s)').isMongoId(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
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
