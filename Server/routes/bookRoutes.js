const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', authMiddleware, createBook);

module.exports = router;