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
        allowNull: false,
        unique: true
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

sequelize.sync()

