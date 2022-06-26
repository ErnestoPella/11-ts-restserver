import { DataTypes } from 'sequelize';
import db from "../db/connection";

const PracticaBancoBomba = db.define('practica_banco_bomba',{
    id_practica:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING,
        
    }
},{
    timestamps: false
});

export default PracticaBancoBomba;