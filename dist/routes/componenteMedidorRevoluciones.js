"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componenteMedidorRevoluciones_1 = require("../controllers/componenteMedidorRevoluciones");
const router = (0, express_1.Router)();
router.get('/', componenteMedidorRevoluciones_1.getComponentesMedidorRevoluciones);
router.get('/:id', componenteMedidorRevoluciones_1.getComponenteMedidorRevoluciones);
router.post('/', componenteMedidorRevoluciones_1.postComponenteMedidorRevoluciones);
router.put('/:id', componenteMedidorRevoluciones_1.putComponenteMedidorRevoluciones);
router.delete('/:id', componenteMedidorRevoluciones_1.deleteComponenteMedidorRevoluciones);
exports.default = router;
//# sourceMappingURL=componenteMedidorRevoluciones.js.map