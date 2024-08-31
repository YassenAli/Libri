import { Sequelize } from 'sequelize';
import { Book } from './book.js';
import { Borrow } from './borrow.js';
import { User } from './user.js';
import { Wishlist } from './wishlist.js';

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    models: [User, Book, Wishlist, Borrow],
});

User.hasMany(Book, { foreignKey: 'userId' });
Book.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Borrow, { foreignKey: 'userId' });
Borrow.belongsTo(User, { foreignKey: 'userId' });

Book.hasMany(Borrow, { foreignKey: 'bookId' });
Borrow.belongsTo(Book, { foreignKey: 'bookId' });

User.hasOne(Wishlist, { foreignKey: 'userId' });
Wishlist.belongsTo(User, { foreignKey: 'userId' });

Wishlist.belongsToMany(Book, { through: 'WishlistBooks' });
Book.belongsToMany(Wishlist, { through: 'WishlistBooks' });

sequelize.sync()
    // .then(() => console.log("Database & tables created!"));
