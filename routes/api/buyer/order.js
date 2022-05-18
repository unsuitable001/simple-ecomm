const router = require('express').Router();
const { UnimplementedError } = require('../../../models/Error')

router.post('/create-order/:seller-id', (req, res) => {
    throw new UnimplementedError();
});

module.exports = router