import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Comun = db.define('comun',{
    id_componente:{
        type: DataTypes.INTEGER,
        primaryKey:true
    }
},{
    timestamps:false
});


export default Comun;