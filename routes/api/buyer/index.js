const {Router} = require('express');
const passport = require('passport');
const AccountType = require('../../../models/AccountType');
const {AuthenticationError} = require('../../../models/Error');

const router = new Router();

router.use(passport.authenticate('jwt', {session: false}));
router.use((req, _, next) => {
  if (req.user.account_type !== AccountType.BUYER) {
    throw new AuthenticationError('You do not have a buyer account');
  }
  next();
});
router.use('/', require('./catalogue'));
router.use('/', require('./order'));

module.exports = router;
