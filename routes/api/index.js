const express = require('express');
const router = express.Router();

router.use('/health', require('./health'));
router.use('/user', require('./user'));

module.exports = router;