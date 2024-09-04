import express from 'express';
import { Login, Register } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';
import { User } from '../models/index.js';

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