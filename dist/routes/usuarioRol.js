"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioRoles_1 = require("../controllers/usuarioRoles");
const router = (0, express_1.Router)();
router.get('/', usuarioRoles_1.getUsuarioRoles);
router.get('/:username', usuarioRoles_1.getUsuarioRol);
router.post('/', usuarioRoles_1.postUsuarioRol);
router.put('/:username', usuarioRoles_1.putUsuarioRol);
router.delete('/:username', usuarioRoles_1.deleteUsuarioRol);
exports.default = router;
//# sourceMappingURL=usuarioRol.js.map