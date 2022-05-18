const passport = require('passport');
const router = require('express').Router();

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send({
        success: true,
        user: {
            id: req.user._id,
            username: req.user.username,
            account_type: req.user.account_type,
            email: req.user.email
        }
    })
})

module.exports = router;