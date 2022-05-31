import { DataTypes } from 'sequelize';
import db from '../db/connection';

const PracticaCanal = db.define('practica_canal',{
    nombre:{
        type:DataTypes.STRING,
        primaryKey:true
    }
},{
    timestamps: false
});


export default PracticaCanal;