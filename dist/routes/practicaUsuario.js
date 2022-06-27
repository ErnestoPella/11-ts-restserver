"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const practicaUsuarios_1 = require("../controllers/practicaUsuarios");
const router = (0, express_1.Router)();
router.get('/', practicaUsuarios_1.getPracticaUsuarios);
router.get('/:username', practicaUsuarios_1.getPracticaUsuario);
router.post('/', practicaUsuarios_1.postPracticaUsuario);
router.put('/:username', practicaUsuarios_1.putPracticaUsuario);
router.delete('/', practicaUsuarios_1.deletePracticaUsuario);
exports.default = router;
//# sourceMappingURL=practicaUsuario.js.map