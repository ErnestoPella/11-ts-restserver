"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const componenteMiras_1 = require("../controllers/componenteMiras");
const router = (0, express_1.Router)();
router.get('/', componenteMiras_1.getComponentesMiras);
router.get('/:id', componenteMiras_1.getComponenteMira);
router.post('/', componenteMiras_1.postComponenteMira);
router.put('/:id', componenteMiras_1.putComponenteMira);
router.delete('/:id', componenteMiras_1.deleteComponenteMira);
exports.default = router;
//# sourceMappingURL=componenteMira.js.map