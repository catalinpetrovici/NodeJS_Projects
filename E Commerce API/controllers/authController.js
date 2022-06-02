const register = async (req, res) => {
  res.json({ msg: 'register user' });
};
const login = async (req, res) => {
  res.json({ msg: 'login user' });
};
const logout = async (req, res) => {
  res.json({ msg: 'logout user' });
};

module.exports = { register, login, logout };
