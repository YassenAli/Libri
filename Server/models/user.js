import 'dotenv/config';
import { DataTypes, Model, Sequelize } from 'sequelize';
// import validator from 'validator';


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log
});

export class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        // validate: [validator.isEmail, 'Invalid email'],
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING,
        defaultValue: 'uploads/profile/profile.jpg',
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'User',
    timestamps: false
});



// import { Attribute, AutoIncrement, NotNull, PrimaryKey } from '@sequelize/core/decorators-legacy';
// import { IsEmail } from '@sequelize/validator.js';

// export class User extends Model {
//     @Attribute(DataTypes.INTEGER)
//     @PrimaryKey
//     @AutoIncrement
//     id;

//     @Attribute(DataTypes.STRING)
//     @NotNull
//     @IsEmail
//     email;

//     @Attribute(DataTypes.STRING)
//     @NotNull
//     username;

//     @Attribute(DataTypes.STRING)
//     @NotNull
//     password;

//     @Attribute(DataTypes.STRING)
//     profilePicture;
// }








// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const User = sequelize.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     profilePicture: {
//         type: DataTypes.STRING,
//         allowNull: true
//     }
// });

// module.exports = User;