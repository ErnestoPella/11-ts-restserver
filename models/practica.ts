import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Practica = db.define('practica',{
    nombre:{
        type:DataTypes.STRING,
    },
    descripcion:{
        type: DataTypes.STRING
    },
    objetivo:{
        type: DataTypes.STRING
    },
},{
    timestamps: false
});

export default Practica;