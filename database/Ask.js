import { Sequelize } from "sequelize";
import { connection } from './database.js';

const Ask = connection.define('ask', {
    title:{
        type: Sequelize.STRING,
        allowNull: false //does not leave the value null/empty
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Ask.sync({force: false}).then(() => console.log('Table is Created'))
//synchronize with database

export const askModel = Ask;