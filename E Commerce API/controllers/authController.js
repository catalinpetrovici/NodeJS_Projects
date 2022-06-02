const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { createJWT, isTokenValid } = require('../utils');

const register = async (req, res) => {
  const { email, name, password } = req.body;
  const emailCheckExists = await User.findOne({ email });
  if (emailCheckExists) {
    throw new CustomError.BadRequestError('Email already exists');
  }

  // first register user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });

  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  const token = createJWT({ payload: tokenUser });

  res.status(StatusCodes.CREATED).json({ user: tokenUser, token });
};

const login = async (req, res) => {
  res.json({ msg: 'login user' });
};

const logout = async (req, res) => {
  res.json({ msg: 'logout user' });
};

module.exports = { register, login, logout };
