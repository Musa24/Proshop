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

//@Desc   Delete a product
//@route DELETE /api/products/:id
// @access private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not Found');
  }
});

//@Desc   Create a product
//@route POST /api/products
// @access private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'sample Name',
    price: 0,
    user: req.user._id,
    image: '/image/sample.png',
    brand: 'brand name',
    category: 'sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample Description',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@Desc   Update a product
//@route PUT /api/products/:id
// @access private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    brand,
    image,
    category,
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.brand = brand;
    product.image = image;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not Found');
  }

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
