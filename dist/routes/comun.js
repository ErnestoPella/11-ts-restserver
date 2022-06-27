"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comun_1 = require("../controllers/comun");
const componentes_1 = require("../controllers/componentes");
const router = (0, express_1.Router)();
router.get('/', comun_1.getComunes);
router.get('/:id_componente', comun_1.getComun);
router.post('/', comun_1.postComun);
router.put(':id_componente', componentes_1.putComponente);
router.delete('/:id_componente', comun_1.deleteComun);
exports.default = router;
//# sourceMappingURL=comun.js.map