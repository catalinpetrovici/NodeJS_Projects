require('dotenv').config();

// express
const express = require('express');
const app = express();

// database & start
const connectDB = require('./db/connect');
const startServer = require('./db/startServer');

app.use('/', (req, res) => {
  res.send('Hello World!');
});

startServer(app, connectDB);
