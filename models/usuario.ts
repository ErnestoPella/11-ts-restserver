import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuario',{
    username:{
        type: DataTypes.STRING,
        primaryKey:true
    },
    password:{
        type: DataTypes.STRING
    },
    nombre:{
        type: DataTypes.STRING
    }
},{
    timestamps:false
});


export default Usuario;

