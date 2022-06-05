const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const getAllOrders = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get All Orders' });
};

const getSingleOrder = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get Single Order' });
};

const getCurrentUserOrders = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Get Current User Orders' });
};

const createOrder = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: 'Create Order' });
};

const updateOrder = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Update Order' });
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
