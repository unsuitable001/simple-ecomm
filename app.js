const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');

// Loading environment variables
require('dotenv').config()

// Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

// Initiate our app
const app = express();

// Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, process.env.STATIC_DIR)));

if(!isProduction) {
  app.use(errorHandler());
}

// Routes
app.use(require('./routes'));

// Error handlers & middlewares
if(!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));