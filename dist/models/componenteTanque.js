"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ComponenteTanque = connection_1.default.define('tanques', {
    id_componente: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    altura: {
        type: sequelize_1.DataTypes.FLOAT
    },
    color: {
        type: sequelize_1.DataTypes.STRING
    },
    escala: {
        type: sequelize_1.DataTypes.FLOAT
    },
    diametro: {
        type: sequelize_1.DataTypes.FLOAT
    }
}, {
    timestamps: false
});
exports.default = ComponenteTanque;
//# sourceMappingURL=componenteTanque.js.map