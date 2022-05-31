"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const PracticaBancoBomba = connection_1.default.define('practica_banco_bomba', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    }
}, {
    timestamps: false
});
exports.default = PracticaBancoBomba;
//# sourceMappingURL=practicaBancoBomba.js.map