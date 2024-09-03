import 'dotenv/config';
import { DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './user.js';

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
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Book',
    timestamps: false
});

sequelize.sync()
    