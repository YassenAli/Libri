import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import { Book } from './book.js';
import { Borrow } from './borrow.js';
import { User } from './user.js';
import { Wishlist } from './wishlist.js';

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: MySqlDialect,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    models: [User, Book, Wishlist, Borrow],
});

// sequelize.sync({ force: false });

// module.exports = sequelize;