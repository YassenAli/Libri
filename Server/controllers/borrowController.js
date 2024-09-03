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
        if (!book.isAvailable) {
            return res.status(404).json({ message: 'Book is not available' });
        }
        book.isAvailable = false;
        await book.save();
        const borrow = await Borrow.create({ bookId, userId, borrowDate, returnDate });
        res.status(201).json(borrow);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getBorrowedBooks = async (req, res) => {
    try {
        const userId = req.user.id;
        const borrows = await Borrow.findAll({ where: { userId } });
        const borrowedBooks = await Promise.all(borrows.map(async (borrow) => {
            const book = await Book.findByPk(borrow.bookId);
            return {
                borrowId: borrow.id,
                book: book,
            };
        }));
        res.status(200).json(borrowedBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const returnBorrowedBook = async (req, res) => {
    try {
        const borrow = await Borrow.findByPk(req.params.id);
        const book = await Book.findByPk(borrow.bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        if (!borrow) {
            return res.status(404).json({ message: 'Borrow not found' });
        }

        book.isAvailable = true;
        await book.save();

        await borrow.destroy();

        res.status(200).json({ message: 'Book returned successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
