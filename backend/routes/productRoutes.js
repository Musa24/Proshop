import express from 'express';
const router = express.Router();
import {
  deleteProduct,
  getProductById,
  getProducts,
} from '../controllers/productController.js';
import { protectRoute, admin } from '../middleware/authMiddleware.js';

// router.get('/', getProducts);
router.route('/').get(getProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(protectRoute, admin, deleteProduct);

export default router;
