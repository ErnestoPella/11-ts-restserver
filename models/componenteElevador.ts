import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComponenteElevador = db.define('elevadores',{
    id_componente:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo: {
        type: DataTypes.STRING
    }
},{
    timestamps:false
});


export default ComponenteElevador;