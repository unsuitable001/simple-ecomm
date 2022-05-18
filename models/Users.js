const mongoose = require('../databases/users');

const { Schema } = require('mongoose');

const UsersSchema = new Schema({
  username: String,
  password: String,
  account_type: {
    type: String,
    enum : ['user','seller'],
    default: 'user'
  }
});

const UserModel = mongoose.model('Users', UsersSchema);
module.exports = UserModel;
