import 'dotenv/config';
import { DataTypes, Model, Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log
});

export class Borrow extends Model {}

Borrow.init({
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
    },
    borrowDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Borrow',
    timestamps: false
});

// import { Attribute, AutoIncrement, Default, NotNull, PrimaryKey } from '@sequelize/core/decorators-legacy';

// export class Borrow extends Model {
//     @Attribute(DataTypes.INTEGER)
//     @PrimaryKey
//     @AutoIncrement
//     id;

//     @Attribute(DataTypes.INTEGER)
//     @NotNull
//     bookId;

//     @Attribute(DataTypes.INTEGER)
//     @NotNull
//     userId;

//     @Attribute(DataTypes.DATE)
//     @Default(DataTypes.NOW)
//     borrowDate;

//     @Attribute(DataTypes.DATE)
//     @NotNull
//     returnDate;
// }



// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const Borrow = sequelize.define('Borrow', {
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
//     },
//     borrowDate: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     returnDate: {
//         type: DataTypes.DATE,
//         allowNull: false
//     }
// });

// module.exports = Borrow;