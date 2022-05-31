"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const practicaCanals_1 = require("../controllers/practicaCanals");
const router = (0, express_1.Router)();
router.get('/', practicaCanals_1.getPracticasCanal);
router.get('/:nombre', practicaCanals_1.getPracticaCanal);
router.post('/', practicaCanals_1.postPracticaCanal);
router.put('/:nombre', practicaCanals_1.putPracticaCanal);
router.delete('/:nombre', practicaCanals_1.deletePracticaCanal);
exports.default = router;
//# sourceMappingURL=practicaCanal.js.map