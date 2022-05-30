"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componentes_1 = require("../controllers/componentes");
const router = (0, express_1.Router)();
router.get('/', componentes_1.getComponentes);
router.get('/:id', componentes_1.getComponente);
router.post('/', componentes_1.postComponente);
router.put('/:id', componentes_1.putComponente);
router.delete('/:id', componentes_1.deleteComponente);
exports.default = router;
//# sourceMappingURL=componente.js.map