// Dynamically add values to the database

require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require(`./models/product`);

const jsonProducts = require(`./products.json`);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Success!...');

    // remove all the products that are currently there
    await Product.deleteMany();
    // and then create and pass the JSON product
    await Product.create(jsonProducts);

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
