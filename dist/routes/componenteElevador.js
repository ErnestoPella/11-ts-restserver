"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componenteElevadores_1 = require("../controllers/componenteElevadores");
const router = (0, express_1.Router)();
router.get('/', componenteElevadores_1.getComponentesElevadores);
router.get('/:id', componenteElevadores_1.getComponenteElevador);
router.post('/', componenteElevadores_1.postComponenteElevador);
router.put('/:id', componenteElevadores_1.postComponenteElevador);
router.delete('/:id', componenteElevadores_1.deleteComponenteElevador);
exports.default = router;
//# sourceMappingURL=componenteElevador.js.map