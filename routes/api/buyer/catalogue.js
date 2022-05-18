const AccountType = require('../../../models/AccountType');
const CatalogModel = require('../../../models/Catalog');
const UserModel = require('../../../models/User');

const router = require('express').Router();

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

router.get('/seller-catalog/:seller_id', (req, res, next) => {
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
