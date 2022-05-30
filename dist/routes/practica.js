"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const practicas_1 = require("../controllers/practicas");
const router = (0, express_1.Router)();
router.get('/', practicas_1.getPracticas);
router.get('/:nombre', practicas_1.getPractica);
router.post('/', practicas_1.postPractica);
router.put('/:nombre', practicas_1.putPractica);
router.delete('/:nombre', practicas_1.deletePractica);
exports.default = router;
//# sourceMappingURL=practica.js.map