import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComponenteTuberia =db.define('tuberias',{
    id_componente:{
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
    }
},{
    timestamps: false
});


export default ComponenteTuberia;