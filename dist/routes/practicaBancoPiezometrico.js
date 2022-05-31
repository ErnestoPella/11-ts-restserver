"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const practicaBancoPiezometricos_1 = require("../controllers/practicaBancoPiezometricos");
const router = (0, express_1.Router)();
router.get('/', practicaBancoPiezometricos_1.getPracticasBancoPieazometrico);
router.get('/:nombre', practicaBancoPiezometricos_1.getPracticaBancoPieazometrico);
router.post('/', practicaBancoPiezometricos_1.postPracticaBancoPieazometrico);
router.put('/:nombre', practicaBancoPiezometricos_1.putPracticaBancoPieazometrico);
router.delete('/:nombre', practicaBancoPiezometricos_1.deletePracticaBancoPieazometrico);
exports.default = router;
//# sourceMappingURL=practicaBancoPiezometrico.js.map