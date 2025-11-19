import { Sequelize } from 'sequelize';

export const connection = new Sequelize('askdev', 'root', 'L34ndr0@95', {
  host: 'localhost',
  dialect: 'mysql'
});