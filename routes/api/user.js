const passport = require('passport');
const {Router} = require('express');
const router = new Router();

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  return res.status(200).send({
    user: {
      id: req.user._id,
      username: req.user.username,
      account_type: req.user.account_type,
      email: req.user.email,
    },
  });
});

module.exports = router;
