import { DataTypes } from 'sequelize';
import db from '../db/connection';


const ComponenteTanque = db.define('tanques',{
    id_componente:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    altura:{
        type: DataTypes.FLOAT
    },
    color:{
        type: DataTypes.STRING
    },
    escala:{
        type: DataTypes.FLOAT
    },
    diametro:{
        type: DataTypes.FLOAT
    }
    
},{
    timestamps: false
});

export default ComponenteTanque;