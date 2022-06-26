"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_1 = require("../controllers/roles");
const router = (0, express_1.Router)();
router.get('/', roles_1.getRoles);
router.get('/:descripcion', roles_1.getRol);
router.post('/', roles_1.postRol);
router.put('/:descripcion', roles_1.putRol);
router.delete('/:descripcion', roles_1.deleteRol);
exports.default = router;
//# sourceMappingURL=rol.js.map