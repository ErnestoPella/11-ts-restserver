import { DataTypes } from "sequelize";
import db from "../db/connection";

const PracticaBancoPiezometrico = db.define('practica_banco_piezometricos',{
    nombre:{
        type: DataTypes.STRING,
        primaryKey: true
    }
},{
    timestamps:false
});

export default PracticaBancoPiezometrico;