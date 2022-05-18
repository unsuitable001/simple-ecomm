const mongoose = require('../databases/users');

const {Schema} = require('mongoose');
const AccountType = require('./AccountType');

const UsersSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  account_type: {
    type: String,
    enum: [AccountType.BUYER, AccountType.SELLER],
    default: 'buyer',
  },
});

const UserModel = mongoose.model('Users', UsersSchema);
module.exports = UserModel;
