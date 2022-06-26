import { DataTypes } from "sequelize";
import db from "../db/connection";

const PracticaBancoPiezometrico = db.define('practica_banco_piezometricos',{
    id_practica:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:DataTypes.STRING,
        
    }
},{
    timestamps:false
});

export default PracticaBancoPiezometrico;