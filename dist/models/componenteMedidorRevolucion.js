"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ComponenteMedidorRevoluciones = connection_1.default.define('medidor_revoluciones', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre_practica: {
        type: sequelize_1.DataTypes.STRING
    },
    escala: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.default = ComponenteMedidorRevoluciones;
//# sourceMappingURL=componenteMedidorRevolucion.js.map