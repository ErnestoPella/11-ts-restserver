import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComponenteMedidorRevoluciones = db.define('medidor_revoluciones',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    tipo:{
        type:DataTypes.STRING
    },
    nombre_practica:{
        type:DataTypes.STRING
    },
    escala:{
        type: DataTypes.STRING
    }
},{
    timestamps:false
});


export default ComponenteMedidorRevoluciones;