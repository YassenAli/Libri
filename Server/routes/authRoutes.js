import express from 'express';
import multer from 'multer';
import { Login, Register } from '../controllers/authController.js';

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profile');
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

router.route('/register')
    .post(upload.single('profilePicture'), Register);
router.post('/login', Login);

export default router;