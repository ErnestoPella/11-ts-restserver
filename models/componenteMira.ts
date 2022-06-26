import { DataTypes } from 'sequelize';
import db from '../db/connection';


const ComponenteMira = db.define('mira',{
    id_componente:{
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    tipo:{
        type:DataTypes.STRING
    },
    escala:{
        type:DataTypes.FLOAT
    }
},{
    timestamps:false
});

export default ComponenteMira;