const {Router} = require('express');
const passport = require('passport');
const AccountType = require('../../../models/AccountType');
const {AuthenticationError} = require('../../../models/Error');

const router = new Router();

router.use(passport.authenticate('jwt', {session: false}));
router.use((req, _, next) => {
  if (req.user.account_type != AccountType.SELLER) {
    throw new AuthenticationError(`You do not have a seller account. You are a 
    ${req.user.account_type}`);
  }
  next();
});
router.use('/', require('./catalogue'));
router.use('/', require('./order'));

module.exports = router;
