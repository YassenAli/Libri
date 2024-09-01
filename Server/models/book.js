import 'dotenv/config';
import { DataTypes, Model, Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log
});

export class Book extends Model {}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coverImage: {
        type: DataTypes.STRING,
        defaultValue: 'https://placehold.co/150x200',
        allowNull: true
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'Book',
    timestamps: false
});

sequelize.sync()
    // .then(() => console.log("Database & tables created!"));

// export class Book extends Model {
//     @Attribute(DataTypes.INTEGER)
//     @PrimaryKey
//     @AutoIncrement
//     id;

//     @Attribute(DataTypes.STRING)
//     @NotNull
//     title;

//     @Attribute(DataTypes.STRING)
//     @NotNull
//     author;

//     @Attribute(DataTypes.STRING)
//     @NotNull
//     genre;

//     @Attribute(DataTypes.STRING)
//     @NotNull
//     description;

//     // @Attribute(DataTypes.STRING)
//     // coverImage;
// }







// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const Book = sequelize.define('Book', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     author: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     genre: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     coverImage: {
//         type: DataTypes.STRING,
//         allowNull: true
//     }
// });

// module.exports = Book;