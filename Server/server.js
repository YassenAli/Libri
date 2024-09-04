import cors from 'cors';
import 'dotenv/config';
import express from 'express';
// import { connectDB } from './config/config.js';
import { connectDB } from './models/index.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import borrowRoutes from './routes/borrowRoutes.js';
import wishlistRoutes from './routes/wishlistRoutes.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

app.use('/Server/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);
app.use('/api/wishlists', wishlistRoutes);

app.use(errorMiddleware);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});