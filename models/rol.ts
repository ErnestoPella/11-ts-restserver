import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Rol = db.define('rol',{
    descripcion:{
        type:DataTypes.STRING
    },
    rol:{
        type:DataTypes.INTEGER,
        primaryKey:true
    }
},{
    timestamps:false
});

export default Rol;