import express from 'express';
import { createBook, getAllBooks, getBookById } from '../controllers/bookController.js';
// import authMiddleware from '../middleware/authMiddleware.js';
import multer from 'multer';

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/books');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        const fileName = `${file.fieldname}-${Date.now()}.${ext}`;
        cb(null, fileName);
    }
});

const fileFilter = function (req, file, cb) {
    const imageType = file.mimetype.split('/')[0];
    if (imageType === 'image') {
        return cb(null, true);
    } else {
        return cb(null, false);
    }
}

const upload = multer({ storage: diskStorage, fileFilter });

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', upload.single('bookCover'), createBook);

export default router;