import express from 'express';
import { createBook, getAllBooks, getBookById } from '../controllers/bookController.js';
// import authMiddleware from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', upload.single('bookCover'), createBook);

export default router;