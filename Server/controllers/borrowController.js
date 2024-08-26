const borrow = require('../models/borrow');
const book = require('../models/book');
const user = require('../models/user');

exports.getAllBorrows = async (req, res) => {
    try {
        const borrows = await borrow.findAll();
        res.status(200).json(borrows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getBorrowById = async (req, res) => {
    try {
        const borrow = await borrow.findByPk(req.params.id);
        if (!borrow) {
            return res.status(404).json({ message: 'Borrow not found' });
        }
        res.status(200).json(borrow);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createBorrow = async (req, res) => {
    try {
        const { bookId, userId, borrowDate, returnDate } = req.body;
        const book = await book.findByPk(bookId);
        const user = await user.findByPk(userId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const borrow = await borrow.create({ bookId, userId, borrowDate, returnDate });
        res.status(201).json(borrow);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}