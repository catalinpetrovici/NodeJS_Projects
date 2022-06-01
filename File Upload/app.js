require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');

// database
const connectDB = require('./db/connect');

// product router
const productRouter = require('./routes/productRoutes');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.get('/', (req, res) => {
  res.send('<h1>File Upload Starter</h1>');
});

app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload());

// router
app.use('/api/v1/products', productRouter);

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}...|http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
