const Product = require(`../models/product`);

const getAllProductsStatic = async (req, res) => {
  // Basic Find: get all the products with featured true
  // const products = await Product.find({featured: true,});

  // Basic Find: get the product with the name 'vase table'
  // const products = await Product.find({ name: 'vase table' });

  //   const search = 'a';
  //   const products = await Product.find({
  //     // https://www.mongodb.com/docs/manual/reference/operator/query/regex/#mongodb-query-op.-regex
  //     name: { $regex: search, $options: 'i' },
  //   });

  // Sort Alphabetical
  const products = await Product.find({}).sort('name price');
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  // get all the products with => Query Params
  // const products = await Product.find(req.query);

  // get all the products that have featured true or false
  // and if there is no featured query we get all the products bcs we have an empty object
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  console.log(queryObject);
  let result = Product.find(queryObject);

  // Sorting does not affect the amount of items we're returning just the order in which they are displayed
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    // sort by time
    result = result.sort('createdAt');
  }

  const products = await result;
  res.status(200).json({ msg: products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
