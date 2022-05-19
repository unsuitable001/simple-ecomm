const {Router} = require('express');
const router = new Router();

router.use('/api', require('./api'));

module.exports = router;
