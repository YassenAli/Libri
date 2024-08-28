import express from 'express';
import { createWishlist, getAllWishlists, getWishlistById } from '../controllers/wishlistController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getAllWishlists);
router.get('/:id', getWishlistById);
router.post('/', createWishlist);

export default router;