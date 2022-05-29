const {
  getAllProductsStatic,
  getAllProducts,
} = require(`../controllers/products`);
const express = require('express');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/static', getAllProductsStatic);

module.exports = router;
