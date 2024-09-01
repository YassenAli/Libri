import { Book, Borrow, User } from '../models/index.js';

export const createBorrow = async (req, res) => {
    try {
        const { bookId, userId, borrowDate, returnDate } = req.body;
        const book = await Book.findByPk(bookId);
        const user = await User.findByPk(userId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const borrow = await Borrow.create({ bookId, userId, borrowDate, returnDate });
        res.status(201).json(borrow);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// export const unBorrowBook = async (req, res) => {
//     try {
//       const { borrowId } = req.params;
  
//       const borrow = await Borrow.findByPk(borrowId);
//       if (!borrow) return res.status(404).json({ message: 'Borrow record not found' });
  
//       const book = await Book.findByPk(borrow.bookId);
//       if (!book) return res.status(404).json({ message: 'Book not found' });
  
//       borrow.returnDate = new Date();
//       await borrow.save();
  
//       book.isAvailable = true;
//       await book.save();
  
//       res.json({ message: 'Book un-borrowed successfully' });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
// };

export const getBorrowedBooks = async (req, res) => {
    try {
        const userId = req.user.id;
        const borrows = await Borrow.findAll({ where: { userId } });
        res.status(200).json(borrows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const returnBorrowedBook = async (req, res) => {
    try {
        const userId = req.user.id;
        const borrow = await Borrow.findOne({ where: { id: req.params.id, userId } });
        const book = await Book.findByPk(borrow.bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        if (!borrow) {
            return res.status(404).json({ message: 'Borrow not found' });
        }

        borrow.returnDate = new Date();
        await borrow.save();

        book.isAvailable = true;
        await book.save();

        res.status(200).json({ message: 'Book returned successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
