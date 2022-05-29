"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuarios);
router.get('/:username', usuarios_1.getUsuario);
router.post('/', usuarios_1.postUsuario);
router.put('/:username', usuarios_1.putUsuario);
router.delete('/:username', usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map