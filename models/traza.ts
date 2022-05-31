import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Traza = db.define('trazas',{
    accion:{
        type: DataTypes.STRING
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull:true,
        defaultValue: DataTypes.NOW,
    },
    id_usuario:{
        type: DataTypes.STRING
    },
    hora:{
        type: DataTypes.TIME,
        allowNull:true,
        defaultValue: DataTypes.NOW
    }
},{
    timestamps:false
});


export default Traza;