"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Practica = connection_1.default.define('practica', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    objetivo: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    timestamps: false
});
exports.default = Practica;
//# sourceMappingURL=practica.js.map