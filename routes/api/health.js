const mongoose = require('mongoose');

const ecommerce_db = require('../../databases/ecommerce');
const users_db = require('../../databases/users');

const router = require('express').Router();

// GET dummy ping route for the server
router.get('/', (req, res) => {
  if (mongoose.STATES[ecommerce_db.readyState] === 'connected' &&
        mongoose.STATES[users_db.readyState] === 'connected') {
    return res.sendStatus(200);
  } else {
    return res.status(500).json({
      'health': 'degraded',
      'ecommerce': ecommerce_db.readyState,
      'auth': users_db.readyState,
    });
  }
});

router.post('/', (req, res) => {
  return res.send(req.body);
});

module.exports = router;
