const PORT = process.env.PORT || 5000;
require('dotenv').config();
const connectDB = require('./db/connect');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// express
const express = require('express');
const app = express();

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">Products Route</a>`);
});

// product route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    // connect to DB
    await connectDB(process.env.MONGO_URI);
    //
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...|http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
