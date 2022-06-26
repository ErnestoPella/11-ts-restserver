"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ComponenteValvula = connection_1.default.define('valvula', {
    id_componente: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    tipo: {
        type: sequelize_1.DataTypes.STRING
    },
    cant_aperturas: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false
});
exports.default = ComponenteValvula;
//# sourceMappingURL=componenteValvula.js.map