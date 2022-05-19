const AccountType = require('../../../models/AccountType');
const CatalogModel = require('../../../models/Catalog');
const UserModel = require('../../../models/User');

const {Router} = require('express');
const {param, validationResult} = require('express-validator');
const router = new Router();

router.get('/list-of-sellers', (_, res, next) => {
  UserModel.find({
    account_type: AccountType.SELLER,
  }, 'id username', (err, sellers) => {
    if (err) {
      next(err);
      return;
    }
    res.status(200).send({
      sellers: sellers ?? [],
    });
  });
});

router.get('/seller-catalog/:seller_id',
    param('seller_id', 'Please enter a valid seller id').isMongoId(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
      CatalogModel.findOne({
        sellerId: req.params.seller_id,
      }, function(err, catalog) {
        if (err) {
          next(err);
          return;
        }
        res.send({
          message: 'Fetched catalog successfully',
          catalog: catalog,
        });
      });
    });


module.exports = router;
