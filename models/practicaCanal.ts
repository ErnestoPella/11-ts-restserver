import { DataTypes } from 'sequelize';
import db from '../db/connection';

const PracticaCanal = db.define('practica_canal',{
    id_practica:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING,
        
    }
},{
    timestamps: false
});


export default PracticaCanal;