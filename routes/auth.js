const passport = require('passport');
const UserModel = require('../models/Users');
const APIError = require('../models/Error');
const { hashSync, compareSync } = require('bcrypt');
const router = require('express').Router();
const jwt = require('jsonwebtoken')

router.post('/register', (req, res, next) => {
    const user = new UserModel({
        username: req.body.username,
        password: hashSync(req.body.password, 10),
        account_type: req.body.account_type
    })

    user.save().then(user => {
        res.send({
            success: true,
            message: "User created successfully.",
            user: {
                id: user._id,
                username: user.username,
                account_type: user.account_type
            }
        })
    }).catch(next);
});


router.post('/login', async (req, res, next) => {
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user) {
        next(new APIError("Could not find the user", 401));
        return;
    }
    if (!compareSync(req.body.password, user.password)) {
        next(new APIError("Incorrect password", 401));
        return;
    }

    const payload = {
        username: user.username,
        account_type: user.account_type,
        id: user._id
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" })

    return res.status(200).send({
        success: true,
        message: "Logged in successfully!",
        token: "Bearer " + token
    })

});

module.exports = router;