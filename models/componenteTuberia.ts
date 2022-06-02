import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComponenteTuberia =db.define('tuberias',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    diametro:{
        type: DataTypes.FLOAT
    },
    longitud:{
        type: DataTypes.FLOAT
    },
    material:{
        type: DataTypes.STRING
    },
    vejez:{
        type: DataTypes.INTEGER
    },
    nombre_practica:{
        type: DataTypes.STRING
    } 
},{
    timestamps: false
});


export default ComponenteTuberia;