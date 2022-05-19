const mongoose = require('mongoose');

const ecommerceDb = require('../../databases/ecommerce');
const usersDb = require('../../databases/users');

const {Router} = require('express');
const router = new Router();

// GET dummy ping route for the server
router.get('/', (req, res) => {
  if (mongoose.STATES[ecommerceDb.readyState] === 'connected' &&
        mongoose.STATES[usersDb.readyState] === 'connected') {
    return res.sendStatus(200);
  } else {
    return res.status(500).json({
      'health': 'degraded',
      'ecommerce': ecommerceDb.readyState,
      'auth': usersDb.readyState,
    });
  }
});

router.post('/', (req, res) => {
  return res.send(req.body);
});

module.exports = router;
