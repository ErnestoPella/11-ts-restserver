import { DataTypes } from 'sequelize';
import db from '../db/connection';


const ComponenteTanque = db.define('tanques',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    altura:{
        type: DataTypes.FLOAT
    },
    escala:{
        type: DataTypes.STRING
    },
    diametro:{
        type: DataTypes.FLOAT
    },
    nombre_practica:{
        type: DataTypes.STRING
    },
    color:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

export default ComponenteTanque;