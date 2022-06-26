"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const PracticaBancoPiezometrico = connection_1.default.define('practica_banco_piezometricos', {
    id_practica: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    timestamps: false
});
exports.default = PracticaBancoPiezometrico;
//# sourceMappingURL=practicaBancoPiezometrico.js.map