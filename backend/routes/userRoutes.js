import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
} from '../controllers/userController.js';
import { protectRoute, admin } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

router.route('/').post(registerUser).get(protectRoute, admin, getUsers);

export default router;
