"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componenteTuberias_1 = require("../controllers/componenteTuberias");
const router = (0, express_1.Router)();
router.get('/', componenteTuberias_1.getComponentesTuberias);
router.get('/:id', componenteTuberias_1.getComponenteTuberia);
router.post('/', componenteTuberias_1.postComponenteTuberia);
router.put('/:id', componenteTuberias_1.putComponenteTuberia);
router.delete('/:id', componenteTuberias_1.deleteComponenteTuberia);
exports.default = router;
//# sourceMappingURL=componenteTuberia.js.map