import express from 'express';
import { createBorrow, getAllBorrows, getBorrowById } from '../controllers/borrowController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getAllBorrows);
router.get('/:id', getBorrowById);
router.post('/', createBorrow);

export default router;