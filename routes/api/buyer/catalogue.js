const AccountType = require('../../../models/AccountType');
const UserModel = require('../../../models/User');

const router = require('express').Router();

router.get('/list-of-sellers', (_, res, next) => {
    UserModel.find({
        account_type: AccountType.SELLER,
    }, 'id username', (err, sellers) => {
        if (err) next(err);
        res.status(200).send({
            sellers: sellers ?? []
        });
    });
});

router.get('/seller-catalogue/:seller-id', (req, res) => {
    throw new UnimplementedError();
});


module.exports = router