const getAllUsers = async (req, res) => {
  res.status(200).json({ msg: 'Get All Users' });
};

const getSingleUser = async (req, res) => {
  res.status(200).json({ msg: 'Get Single User' });
};

const showCurrentUser = async (req, res) => {
  res.status(200).json({ msg: 'Show Current User' });
};

const updateUser = async (req, res) => {
  res.status(200).json({ msg: 'Update User', body: req.body });
};

const updateUserPassword = async (req, res) => {
  res.status(200).json({ msg: 'Update User Password', body: req.body });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
