const router = require('express').Router();
const { UnimplementedError } = require('../../../models/Error')

router.get('/orders', (req, res) => {
    throw new UnimplementedError();
});

module.exports = router