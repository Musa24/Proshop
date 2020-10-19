import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.route('/profile').get(protectRoute, getUserProfile);
router.post('/', registerUser);

export default router;
