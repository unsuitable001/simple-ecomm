const express = require('express');
const router = express.Router();

router.use('/health', require('./health'));
router.use('/user', require('./user'));
router.use('/auth', require('./auth'));

router.use('/buyer', require('./buyer'));
router.use('/seller', require('./seller'));

module.exports = router;
