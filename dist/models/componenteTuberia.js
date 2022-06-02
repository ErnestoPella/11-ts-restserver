"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ComponenteTuberia = connection_1.default.define('tuberias', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    diametro: {
        type: sequelize_1.DataTypes.FLOAT
    },
    longitud: {
        type: sequelize_1.DataTypes.FLOAT
    },
    material: {
        type: sequelize_1.DataTypes.STRING
    },
    vejez: {
        type: sequelize_1.DataTypes.INTEGER
    },
    nombre_practica: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
exports.default = ComponenteTuberia;
//# sourceMappingURL=componenteTuberia.js.map