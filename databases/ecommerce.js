const mongoose = require('mongoose');

const options = {
  serverSelectionTimeoutMS: 60000,
};

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// Configure Mongoose
const conn = mongoose.createConnection(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, options);
mongoose.set('debug', true);

module.exports = conn;
