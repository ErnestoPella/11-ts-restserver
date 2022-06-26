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
    hora:{
        type: DataTypes.TIME,
        allowNull:true,
        defaultValue: DataTypes.NOW
    },
    username:{
        type: DataTypes.STRING
    }
},{
    timestamps:false
});


export default Traza;