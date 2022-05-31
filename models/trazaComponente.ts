import { DataTypes } from 'sequelize';
import db from '../db/connection';

const TrazaComponente = db.define('traza_componente',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    id_componente:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING
    }
},{
    timestamps: false
});


export default TrazaComponente;