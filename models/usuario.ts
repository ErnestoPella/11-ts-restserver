import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuario',{
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    nombre:{
        type: DataTypes.STRING
    },
    rol:{
        type: DataTypes.BOOLEAN
    },
},{
    timestamps:false
});


export default Usuario;

