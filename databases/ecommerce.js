const mongoose = require('mongoose');

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

// Configure Mongoose
const conn = mongoose.createConnection(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
mongoose.set('debug', true);

module.exports = conn;