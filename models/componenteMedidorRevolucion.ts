import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComponenteMedidorRevoluciones = db.define('medidor_revoluciones',{
    id_componente:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    tipo:{
        type:DataTypes.STRING
    },
    escala:{
        type: DataTypes.FLOAT
    }
},{
    timestamps:false
});


export default ComponenteMedidorRevoluciones;