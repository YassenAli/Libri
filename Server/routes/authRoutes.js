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

// router.route('/register')
//     .post(upload.single('profilePicture'), Register);

router.route('/register')
    .post(Register);

router.post('/login', Login);

router.post('/upload-profile-picture', authMiddleware, upload.single('profilePicture'), (req, res) => {
  const userId = req.user.id;
  const profilePicture = req.file.filename;

  User.update({ profilePicture }, { where: { id: userId } })
    .then(() => res.json({ message: 'Profile picture uploaded successfully!' }))
    .catch(err => res.status(500).json({ message: err.message }));
});

export default router;