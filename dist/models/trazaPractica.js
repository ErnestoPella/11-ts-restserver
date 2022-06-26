"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const TrazaPractica = connection_1.default.define('traza_practica', {
    id_traza: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    id_practica: {
        type: sequelize_1.DataTypes.INTEGER
    },
    username: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.default = TrazaPractica;
//# sourceMappingURL=trazaPractica.js.map