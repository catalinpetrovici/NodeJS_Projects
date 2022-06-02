require('dotenv').config();
require('express-async-errors'); // instead of writing try & catch in all controllers. we use express-async-errors

// express
const express = require('express');
const app = express();

// rest of the packages
const morgan = require('morgan');

// database & start
const connectDB = require('./db/connect');
const startServer = require('./db/startServer');

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny')); // debug => Example: GET / 304 - - 1.841 ms & GET /yes 404 30 - 0.609 ms
app.use(express.json()); // access to json data in req.body

app.get('/', (req, res) => {
  res.json({ msg: 'E-Commerce API' });
});

app.use(notFoundMiddleware); // 404 - if user is looking for a route that doesn't exist
app.use(errorHandlerMiddleware); // error - if there is an error we want to apply it

startServer(app, connectDB);
