const CatalogModel = require('../../../models/Catalog');

const router = require('express').Router();

router.post('/create-catalog', (req, res, next) => {
    const catalog = new CatalogModel({
        sellerId: req.user._id,
        products: req.body
    });

    CatalogModel.create(catalog).then(catalog => {
        res.send({
            message: "Catalog created successfully",
            catalog: catalog
        });
    }).catch(next);
});

module.exports = router;
