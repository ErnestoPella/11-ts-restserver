import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TrazaComponente = db.define('traza_componente',{
    id_traza:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    id_componente:{
        type: DataTypes.INTEGER
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


export default TrazaComponente;