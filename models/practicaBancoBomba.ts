import { DataTypes } from 'sequelize';
import db from "../db/connection";

const PracticaBancoBomba = db.define('practica_banco_bomba',{
    nombre:{
        type:DataTypes.STRING,
        primaryKey:true
    }
},{
    timestamps: false
});

export default PracticaBancoBomba;