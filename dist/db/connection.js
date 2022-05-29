"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('practicaBD', 'postgres', 'Pell@.2000', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433,
    //logging: false 
});
exports.default = db;
//# sourceMappingURL=connection.js.map