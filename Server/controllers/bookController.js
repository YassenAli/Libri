const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createBook = async (req, res) => {
    try {
        const { image, title, author, genre, description } = req.body;
        const book = await Book.create({ image, title, author, genre, description });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}