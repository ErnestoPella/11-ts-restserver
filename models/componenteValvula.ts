import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComponenteValvula = db.define('valvula',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo:{
        type: DataTypes.STRING
    },
    cant_aperturas:{
        type: DataTypes.INTEGER
    },
    nombre_practica:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
});


export default ComponenteValvula;