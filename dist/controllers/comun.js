"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComun = exports.putComun = exports.postComun = exports.getComun = exports.getComunes = void 0;
const comun_1 = __importDefault(require("../models/comun"));
const getComunes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comunes = yield comun_1.default.findAll();
    res.json(comunes);
});
exports.getComunes = getComunes;
const getComun = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_componente } = req.params;
    try {
        const comun = yield comun_1.default.findOne({
            where: {
                id_componente: id_componente
            }
        });
        res.json(comun);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe el componente${id_componente}`
        });
    }
});
exports.getComun = getComun;
const postComun = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeComun = yield comun_1.default.findOne({
            where: {
                id_componente: body.id_componente
            }
        });
        if (existeComun) {
            return res.status(400).json({
                msg: `Ya existe ${body.id_componente}`
            });
        }
        const comun = new comun_1.default(body);
        yield comun.save();
        res.json(comun);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postComun = postComun;
const putComun = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_componente } = req.params;
    const { body } = req;
    try {
        const comun = yield comun_1.default.findOne({
            where: {
                id_componente: id_componente
            }
        });
        if (!comun) {
            return res.status(404).json({
                msg: `No existe el componente ${id_componente}`
            });
        }
        yield comun.update(body);
        res.json(comun);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putComun = putComun;
const deleteComun = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_componente } = req.params;
    const comun = yield comun_1.default.findOne({
        where: {
            id_componente: id_componente
        }
    });
    if (!comun) {
        return res.status(404).json({
            msg: `No existe el componente ${id_componente}`
        });
    }
    yield comun.destroy();
    res.json({
        msg: `Usuario eliminado`
    });
});
exports.deleteComun = deleteComun;
//# sourceMappingURL=comun.js.map