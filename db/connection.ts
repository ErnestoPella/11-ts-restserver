import { Sequelize } from 'sequelize';



const db = new Sequelize('practicaBD','postgres','Pell@.2000',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
    //logging: false 
}); 

export default db;