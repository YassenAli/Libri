import express from 'express';
import { getWishlistById, createWishlist, addBookToWishlist, deleteBookFromWishlist } from '../controllers/wishlistController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/:id', getWishlistById);
router.post('/', createWishlist);
router.post('/addToWishlist', addBookToWishlist);
router.delete('/:wishlistId/:bookId', deleteBookFromWishlist);

export default router;