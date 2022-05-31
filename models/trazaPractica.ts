import {DataTypes} from 'sequelize';
import db from '../db/connection';

const TrazaPractica = db.define('traza_practica',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

export default TrazaPractica;