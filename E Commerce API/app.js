require('dotenv').config();
require('express-async-errors'); // instead of writing try & catch in all controllers. we use express-async-errors

// express
const express = require('express');
const app = express();

// rest of the packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

// database & start
const connectDB = require('./db/connect');
const startServer = require('./db/startServer');

// routers
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const orderRouter = require('./routes/orderRoutes');

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust prox', 1);
app.use(rateLimiter({ windowMs: 15 * 60 * 1000, max: 60 }));
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

app.use(morgan('tiny')); // debug => Example: GET / 304 - - 1.841 ms & GET /yes 404 30 - 0.609 ms
app.use(express.json()); // access to json data in req.body
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static(`./public`));
app.use(fileUpload());

app.get('/', (req, res) => {
  console.log(req.signedCookies);
  res.json({ msg: 'E-Commerce API' });
});
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/orders', orderRouter);

app.use(notFoundMiddleware); // 404 - if user is looking for a route that doesn't exist
app.use(errorHandlerMiddleware); // error - if there is an error we want to apply it

startServer(app, connectDB);
