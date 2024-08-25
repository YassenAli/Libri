const express = require('express');
const router = express.Router();
const { getAllWishlists, getWishlistById, createWishlist } = require('../controllers/wishlistController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.get('/wishlists', getAllWishlists);
router.get('/wishlists/:id', getWishlistById);
router.post('/wishlists', createWishlist);

module.exports = router;