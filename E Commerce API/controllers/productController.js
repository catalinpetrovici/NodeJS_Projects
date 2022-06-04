const createProduct = async (req, res) => {
  res.status(200).json({ msg: 'Create Product' });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: 'Get All Products' });
};

const getSingleProduct = async (req, res) => {
  res.status(200).json({ msg: 'Get Single Product' });
};

const updateProduct = async (req, res) => {
  res.status(200).json({ msg: 'Update Product' });
};

const deleteProduct = async (req, res) => {
  res.status(200).json({ msg: 'Delete Product' });
};

const uploadImage = async (req, res) => {
  res.status(200).json({ msg: 'Upload Image' });
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
