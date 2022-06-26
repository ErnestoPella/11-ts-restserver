import { DataTypes } from 'sequelize';
import db from '../db/connection';

const ComponenteValvula = db.define('valvula',{
    id_componente:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tipo:{
        type: DataTypes.STRING
    },
    cant_aperturas:{
        type: DataTypes.INTEGER
    }
},{
    timestamps: false
});


export default ComponenteValvula;