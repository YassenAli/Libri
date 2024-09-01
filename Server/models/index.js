import 'dotenv/config';
import { Book } from './book.js';
import { Borrow } from './borrow.js';
import { User } from './user.js';
import { Wishlist } from './wishlist.js';
import { sequelize } from '../config/config.js';

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

export { User, Book, Borrow, Wishlist, sequelize };
