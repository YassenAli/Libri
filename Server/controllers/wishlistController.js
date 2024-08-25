const wishlist = require('../models/wishlist');
const book = require('../models/book');
const user = require('../models/user');

exports.getAllWishlists = async (req, res) => {
    try {
        const wishlists = await wishlist.findAll();
        res.status(200).json(wishlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getWishlistById = async (req, res) => {
    try {
        const wishlist = await wishlist.findByPk(req.params.id);
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createWishlist = async (req, res) => {
    try {
        const { bookId, userId } = req.body;
        const book = await book.findByPk(bookId);
        const user = await user.findByPk(userId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const wishlist = await wishlist.create({ bookId, userId });
        res.status(201).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}