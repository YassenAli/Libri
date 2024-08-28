import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign({ id: user.id, name: user.username, email: user.email, password: user.password }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export default generateToken;
// module.exports = generateToken;