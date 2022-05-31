"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trazaPracticas_1 = require("../controllers/trazaPracticas");
const router = (0, express_1.Router)();
router.get('/', trazaPracticas_1.getTrazasPracticas);
router.get('/:id', trazaPracticas_1.getTrazaPractica);
router.post('/', trazaPracticas_1.postTrazaPractica);
router.put('/:id', trazaPracticas_1.putTrazaPractica);
router.delete('/:id', trazaPracticas_1.deleteTrazaPractica);
exports.default = router;
//# sourceMappingURL=trazaPractica.js.map