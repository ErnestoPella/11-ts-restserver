import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComponenteElevador = db.define('elevadores',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo: {
        type: DataTypes.STRING
    },
    nombre_practica: {
        type:DataTypes.STRING
    }
},{
    timestamps:false
});


export default ComponenteElevador;