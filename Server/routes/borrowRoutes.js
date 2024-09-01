import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { createBorrow, getBorrowedBooks, returnBorrowedBook } from '../controllers/borrowController.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/', createBorrow);
router.get('/', getBorrowedBooks);
router.put('/:id', returnBorrowedBook);

export default router;