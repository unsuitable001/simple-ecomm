const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));
router.use('/', require('./auth'));

module.exports = router;