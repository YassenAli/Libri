import bcrypt from 'bcrypt';
import { User, Wishlist } from '../models/index.js';
import generateToken from '../utils/generateToken.js';

export const Register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        if (!email || !username || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }
        const existingUser = await User.findOne({ where: { username } });
        const existingEmail = await User.findOne({ where: { email } });
        if (existingUser || existingEmail) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, username, password: hashedPassword, profilePicture: req.file?.filename });

        await Wishlist.create({ userId: user.dataValues.id });
        const token = await generateToken(user);
        
        res.status(201).json({ token });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: error.message });
    }
};

export const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid Username or Password' });
        }
        const token = await generateToken(user);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};