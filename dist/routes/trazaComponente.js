"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trazaComponentes_1 = require("../controllers/trazaComponentes");
const router = (0, express_1.Router)();
router.get('/', trazaComponentes_1.getTrazasComponentes);
router.get('/:id', trazaComponentes_1.getTrazaComponente);
router.post('/', trazaComponentes_1.postTrazaComponente);
router.put('/:id', trazaComponentes_1.putTrzaComponente);
router.delete('/:id', trazaComponentes_1.deleteTrazaComponente);
exports.default = router;
//# sourceMappingURL=trazaComponente.js.map