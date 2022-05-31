"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trazas_1 = require("../controllers/trazas");
const router = (0, express_1.Router)();
router.get('/', trazas_1.getTrazas);
router.get('/:id', trazas_1.getTraza);
router.post('/', trazas_1.postTraza);
router.put('/:id', trazas_1.putTraza);
router.delete('/:id', trazas_1.deleteTraza);
exports.default = router;
//# sourceMappingURL=traza.js.map