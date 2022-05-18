const mongoose = require('mongoose');

const options = {
  serverSelectionTimeoutMS: 60000,
};

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// Configure Mongoose
const conn = mongoose.createConnection(`mongodb://${process.env.USERS_DB_USER}:${process.env.USERS_DB_PASS}@${process.env.USERS_DB_HOST}:${process.env.USERS_DB_PORT}/${process.env.USERS_DB_NAME}`, options);
mongoose.set('debug', true);

module.exports = conn;
