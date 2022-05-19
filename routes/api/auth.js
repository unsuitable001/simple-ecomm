const UserModel = require('../../models/User');
const {AuthenticationError} = require('../../models/Error');
const {hashSync, compareSync} = require('bcryptjs');
const {Router} = require('express');
const router = new Router();
const jwt = require('jsonwebtoken');

router.post('/register', (req, res, next) => {
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


router.post('/login', (req, res, next) => {
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

    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'});

    return res.status(200).send({
      success: true,
      message: 'Logged in successfully!',
      token: 'Bearer ' + token,
    });
  }).catch(next);
});

module.exports = router;
