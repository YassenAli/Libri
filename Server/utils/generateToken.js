import jwt from 'jsonwebtoken';
import { Wishlist } from '../models/index.js';

const generateToken = (user) => {
    return jwt.sign({ id: user.id, name: user.username, email: user.email, WishlistId: Wishlist.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export default generateToken;
// module.exports = generateToken;