"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componenteTanques_1 = require("../controllers/componenteTanques");
const router = (0, express_1.Router)();
router.get('/', componenteTanques_1.getComponentesTanques);
router.get('/:id', componenteTanques_1.getComponenteTanque);
router.post('/', componenteTanques_1.postComponenteTanque);
router.put('/:id', componenteTanques_1.putComponenteTanque);
router.delete('/:id', componenteTanques_1.deleteComponenteTaque);
exports.default = router;
//# sourceMappingURL=componenteTanque.js.map