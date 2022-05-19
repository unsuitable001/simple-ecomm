const UserModel = require('../../models/User');
const {AuthenticationError} = require('../../models/Error');
const {hashSync, compareSync} = require('bcryptjs');
const {Router} = require('express');
const jwt = require('jsonwebtoken');
const {body, validationResult} = require('express-validator');
const AccountType = require('../../models/AccountType');

const router = new Router();


router.post('/register',
    body('username', 'username doesn\'t exists').exists(),
    body('email', 'Invalid Email').isEmail().normalizeEmail(),
    body('password', 'Please use a strong password').isStrongPassword(),
    body('account_type', 'Invalid Account Type').isIn([
      AccountType.BUYER,
      AccountType.SELLER,
    ]),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }

      const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: hashSync(req.body.password, 10),
        account_type: req.body.account_type,
      });
      UserModel.create(user).then((user) => {
        res.send({
          success: true,
          message: 'User created successfully.',
          user: {
            id: user._id,
            username: user.username,
            account_type: user.account_type,
          },
        });
      }).catch(next);
    });


router.post('/login',
    body('username', 'Please enter an username').exists(),
    body('password', 'Please enter a password').exists(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
      }

      UserModel.findOne({username: req.body.username}).then((user) => {
        if (!user) {
          throw new AuthenticationError('Could not find the user');
        }
        if (!compareSync(req.body.password, user.password)) {
          throw new AuthenticationError('Incorrect password');
        }

        const payload = {
          username: user.username,
          email: user.email,
          account_type: user.account_type,
          id: user._id,
        };

        opts = {
          algorithm: 'HS512',
          expiresIn: '1d',
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, opts);

        return res.status(200).send({
          success: true,
          message: 'Logged in successfully!',
          token: 'Bearer ' + token,
        });
      }).catch(next);
    });

module.exports = router;
