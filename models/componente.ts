import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Componente = db.define('componente',{
    nombre:{
        type: DataTypes.STRING
    },
},{
    timestamps:false
});

export default Componente;