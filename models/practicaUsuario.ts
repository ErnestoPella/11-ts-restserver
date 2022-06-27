import {DataTypes} from 'sequelize';
import db from '../db/connection';


const PracticaUsuario = db.define('practica_usuario',{
    id_practica:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    username:{
        type: DataTypes.STRING,
        primaryKey:true
    }
},{
    timestamps:false
});


export default PracticaUsuario;