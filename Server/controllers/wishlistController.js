import { Book } from "../models/book.js";
import { User } from "../models/user.js";
import { Wishlist } from "../models/wishlist.js";

export const getAllWishlists = async (req, res) => {
    try {
        const wishlists = await Wishlist.findAll();
        res.status(200).json(wishlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getWishlistById = async (req, res) => {
    try {
        const wishlist = await Wishlist.findByPk(req.params.id);
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createWishlist = async (req, res) => {
    try {
        const { bookId, userId } = req.body;
        const book = await Book.findByPk(bookId);
        const user = await User.findByPk(userId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const wishlist = await Wishlist.create({ bookId, userId });
        res.status(201).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}