import 'dotenv/config';
import { DataTypes, Model, Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log
});

export class Wishlist extends Model {}

Wishlist.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Wishlist',
    timestamps: false
});

// import { AllowNull, Attribute, AutoIncrement, NotNull, PrimaryKey } from '@sequelize/core/decorators-legacy';


// export class Wishlist extends Model {
//     @Attribute(DataTypes.INTEGER)
//     @PrimaryKey
//     @AutoIncrement
//     id;

//     @Attribute(DataTypes.STRING)
//     @AllowNull
//     title;

//     @Attribute(DataTypes.INTEGER)
//     @NotNull
//     bookId;

//     @Attribute(DataTypes.INTEGER)
//     @NotNull
//     userId;
// }


// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const Wishlist = sequelize.define('Wishlist', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     bookId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     }
// });

// module.exports = Wishlist;