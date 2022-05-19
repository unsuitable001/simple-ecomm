const CatalogModel = require('../../../models/Catalog');
const ProductModel = require('../../../models/Product');

const {Router} = require('express');
const router = new Router();

router.post('/create-catalog', (req, res, next) => {
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
