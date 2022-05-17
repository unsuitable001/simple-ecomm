const ecommerce_db = require('../../databases/ecommerce');
const router = require('express').Router();

// GET dummy ping route for the server
router.get('/', (req, res) => {
    if(ecommerce_db.STATES[ecommerce_db.connection.readyState] === "connected")
        return res.sendStatus(200)
    else return res.sendStatus(500)
});

router.post('/', (req, res) => {
    return res.send(req.body)
});

module.exports = router;