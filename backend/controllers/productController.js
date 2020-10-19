import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@Desc   Fetch all products
//@route GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@Desc   Fetch single product
//@route GET /api/products/:id
// @access private
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById({ _id: req.params.id });
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not Found');
    // res.status(404).json({ message: 'Product not Found' });
  }
});

export { getProducts, getProductById };
