import jwt from 'jsonwebtoken';
import { Wishlist } from '../models/index.js';

const generateToken = async (user) => {
    try {
        const wishlist = await Wishlist.findOne({ where: { userId: user.id } });

        return jwt.sign(
            {
                id: user.id,
                name: user.username,
                email: user.email,
                WishlistId: wishlist ? wishlist.dataValues.id : null,
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
    } catch (error) {
        throw new Error('Failed to generate token with Wishlist ID');
    }
};

export default generateToken;
// module.exports = generateToken;