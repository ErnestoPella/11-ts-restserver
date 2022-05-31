"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const PracticaCanal = connection_1.default.define('practica_canal', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    }
}, {
    timestamps: false
});
exports.default = PracticaCanal;
//# sourceMappingURL=practicaCanal.js.map