import { DataTypes } from 'sequelize';
import db from '../db/connection';


const ComponenteMira = db.define('mira',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    tipo:{
        type:DataTypes.STRING
    },
    nombre_practica:{
        type:DataTypes.STRING
    },
    escala:{
        type:DataTypes.STRING
    }
},{
    timestamps:false
});

export default ComponenteMira;