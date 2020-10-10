import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
//Models
import Product from '../models/productModel.js';

//@Desc   Fetch all products
//@route GET /api/products
// @access public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@Desc   Fetch single product
//@route GET /api/products/:id
// @access private
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById({ _id: req.params.id });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not Found' });
    }
  })
);

export default router;
