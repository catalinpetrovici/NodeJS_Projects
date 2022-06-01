const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

const uploadProductImage = async (req, res) => {
  console.log(req.files);
  res.send('upload product image');
};

module.exports = {
  uploadProductImage,
};
