"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const UsuarioRol = connection_1.default.define('usuario_rol', {
    username: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    rol: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});
exports.default = UsuarioRol;
//# sourceMappingURL=usuario_rol.js.map