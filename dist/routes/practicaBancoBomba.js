"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const practicaBancoBombas_1 = require("../controllers/practicaBancoBombas");
const router = (0, express_1.Router)();
router.get('/', practicaBancoBombas_1.getPracticasBancoBomba);
router.get('/:nombre', practicaBancoBombas_1.getPracticaBancoBomba);
router.post('/', practicaBancoBombas_1.postPracticaBancoBomba);
router.put('/:nombre', practicaBancoBombas_1.putPracticaBancoBomba);
router.delete('/:nombre', practicaBancoBombas_1.deletePracticaBancoBomba);
exports.default = router;
//# sourceMappingURL=practicaBancoBomba.js.map