const CatalogModel = require('../../../models/Catalog');
const ProductModel = require('../../../models/Product');

const {Router} = require('express');
const {body, validationResult} = require('express-validator');
const router = new Router();

router.post('/create-catalog',
    body('products', 'Provide a valid products array').isArray().notEmpty(),
    body('products.*.name', 'Provide a product name').isString(),
    body('products.*.price', 'Provide a product price').isNumeric(),
    body('products.*.currency', 'Provide a default currency')
        .isString().notEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }
      const products = req.body.products.map(
          (product) => new ProductModel(product));
      const catalog = new CatalogModel({
        sellerId: req.user._id,
        products: products,
      });

      CatalogModel.create(catalog).then((catalog) => {
        res.send({
          message: 'Catalog created successfully',
          catalog: catalog,
        });
      }).catch(next);
    });

module.exports = router;
