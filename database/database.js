import { Sequelize } from 'sequelize';

export const connection = new Sequelize('dbname', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});