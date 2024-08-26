const express = require('express');
const router = express.Router();
const { getAllBorrows, getBorrowById, createBorrow } = require('../controllers/borrowController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);
router.get('/borrows', getAllBorrows);
router.get('/borrows/:id', getBorrowById);
router.post('/borrows', createBorrow);

module.exports = router;