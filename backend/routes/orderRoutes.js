import express from 'express';
const router = express.Router();
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

router.route('/').post(protectRoute, addOrderItems);
router.route('/:id').get(protectRoute, getOrderById);

export default router;
