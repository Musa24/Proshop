import express from 'express';
const router = express.Router();
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from '../controllers/productController.js';
import { protectRoute, admin } from '../middleware/authMiddleware.js';

// router.get('/', getProducts);
router.route('/').get(getProducts).post(protectRoute, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(protectRoute, admin, deleteProduct)
  .put(protectRoute, admin, updateProduct);

export default router;
