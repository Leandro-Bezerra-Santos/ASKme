import { Sequelize } from "sequelize";
import { connection } from './database.js';


const Responses = connection.define('Responses', {
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    askId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Responses.sync({force: false}).then(() => console.log('Table Responses created'))
//synchronize with database

export const responsesModel = Responses;