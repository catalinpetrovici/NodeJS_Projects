const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createReview = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: 'Create Review' });
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
