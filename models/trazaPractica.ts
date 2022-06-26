import {DataTypes} from 'sequelize';
import db from '../db/connection';

const TrazaPractica = db.define('traza_practica',{
    id_traza:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    id_practica:{
        type: DataTypes.INTEGER
    },
    username:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

export default TrazaPractica;