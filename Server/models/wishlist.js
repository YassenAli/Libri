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
    }
}, {
    sequelize,
    modelName: 'Wishlist',
    timestamps: false
});

sequelize.sync()
