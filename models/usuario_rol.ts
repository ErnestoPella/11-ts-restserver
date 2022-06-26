import {DataTypes} from 'sequelize';
import db from '../db/connection';

const UsuarioRol = db.define('usuario_rol',{
    username:{
        type: DataTypes.STRING,
        primaryKey:true
    },
    rol:{
        type:DataTypes.INTEGER,
        primaryKey:true
    }
},{
    timestamps:false
});

export default UsuarioRol;