import { Book } from '../models/index.js';

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

export const getBookById = async (req, res) => {
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

export const createBook = async (req, res) => {
    try {
        const { title, author, genre, description } = req.body;
        console.log("req", req);

        // const userId = 
        // console.log("userId", userId);

        const book = await Book.create({ title, author, genre, description, bookCover: req.file?.filename });
        // const book = await Book.create({ title, author, genre, description, bookCover: req.file?.filename, userId });
        res.status(201).json(book);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
}