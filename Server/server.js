import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import errorMiddleware from './middleware/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import borrowRoutes from './routes/borrowRoutes.js';
import wishlistRoutes from './routes/wishlistRoutes.js';

const PORT = process.env.PORT;

import mysql from 'mysql';

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect(function (err) {
    if (err) {
        console.log("Error in the connection")
        console.log(err)
    }
    else {
        console.log(`Database Connected`)
        connection.query(`SHOW DATABASES`,
            function (err, result) {
                if (err)
                    console.log(`Error executing the query - ${err}`)
                else
                    console.log("Result: ", result)
            })
    }
});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrows', borrowRoutes);
app.use('/api/wishlists', wishlistRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

