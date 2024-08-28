import express from 'express';
import { createBook, getAllBooks, getBookById } from '../controllers/bookController.js';
// import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);

export default router;