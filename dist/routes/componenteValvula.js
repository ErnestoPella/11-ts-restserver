"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componenteValvulas_1 = require("../controllers/componenteValvulas");
const router = (0, express_1.Router)();
router.get('/', componenteValvulas_1.getComponentesValvulas);
router.get('/:id', componenteValvulas_1.getComponenteValvula);
router.post('/', componenteValvulas_1.postComponenteValvula);
router.put('/:id', componenteValvulas_1.putComponenteValvula);
router.delete('/:id', componenteValvulas_1.deleteComponenteValvula);
exports.default = router;
//# sourceMappingURL=componenteValvula.js.map