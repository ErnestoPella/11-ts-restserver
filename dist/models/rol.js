"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Rol = connection_1.default.define('rol', {
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    rol: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});
exports.default = Rol;
//# sourceMappingURL=rol.js.map