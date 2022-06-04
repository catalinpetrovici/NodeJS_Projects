const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const Review = require('../models/Review');
const Product = require('../models/Product');
const { checkPermissions } = require(`../utils`);

const createReview = async (req, res) => {
  const { product: productId } = req.body;

  const isValidProduct = await Product.findOne({ _id: productId });

  if (!isValidProduct)
    throw new CustomError.NotFoundError(`No product with id: ${productId}`);

  const alreadySubmitted = await Review.findOne({
    product: productId,
    user: req.user.userId,
  });

  if (alreadySubmitted)
    throw new CustomError.BadRequestError(
      'Already submitted review for this product'
    );

  req.body.user = req.user.userId;
  const review = await Review.create(req.body);

  res.status(StatusCodes.CREATED).json({ review });
};

const getAllReviews = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get All Reviews' });
};

const getSingleReview = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get Single Review' });
};

const updateReview = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Update Review' });
};

const deleteReview = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Delete Review' });
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
