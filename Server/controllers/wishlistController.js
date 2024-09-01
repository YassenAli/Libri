import { Book, User, Wishlist } from "../models/index.js";

export const getWishlistById = async (req, res) => {
    try {
        const wishlist = await Wishlist.findByPk(req.params.id);
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        const books = await wishlist.getBooks();
        const user = await wishlist.getUser();
        res.status(200).json({ wishlist, books, user });
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

export const addBookToWishlist = async (req, res) => {
    try {
      const { bookId, wishlistId } = req.body;
  
      const wishlist = await Wishlist.findByPk(wishlistId);
      if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });
  
      const book = await Book.findByPk(bookId);
      if (!book) return res.status(404).json({ message: 'Book not found' });
  
      await wishlist.addBook(book);
      res.json({ message: `${book.title} added to wishlist successfully` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const deleteBookFromWishlist = async (req, res) => {
    try {
      const { bookId, wishlistId } = req.params;
  
      const wishlist = await Wishlist.findByPk(wishlistId);
      if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });
  
      const book = await Book.findByPk(bookId);
      if (!book) return res.status(404).json({ message: 'Book not found' });
  
      await wishlist.removeBook(book);
      res.json({ message: 'Book removed from wishlist successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };