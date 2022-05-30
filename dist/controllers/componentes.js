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
exports.deleteComponente = exports.putComponente = exports.postComponente = exports.getComponente = exports.getComponentes = void 0;
const componente_1 = __importDefault(require("../models/componente"));
const getComponentes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const componentes = yield componente_1.default.findAll();
    res.json(componentes);
});
exports.getComponentes = getComponentes;
const getComponente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const componente = yield componente_1.default.findByPk(id);
        res.json(componente);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe un componente con el id ${id}`
        });
    }
});
exports.getComponente = getComponente;
const postComponente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const componente = new componente_1.default(body);
        yield componente.save();
        res.json({
            msg: `Componente guardado`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postComponente = postComponente;
const putComponente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const componente = yield componente_1.default.findOne({
            where: {
                id: id
            }
        });
        if (!componente) {
            return res.status(404).json({
                msg: `El componente con el id ${id} no existe`
            });
        }
        yield componente.update(body);
        res.json({
            msg: `Componente actualizado`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putComponente = putComponente;
const deleteComponente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const componente = yield componente_1.default.findOne({
        where: {
            id: id
        }
    });
    if (!componente) {
        return res.status(404).json({
            msg: `El componente con el id ${id} no existe`
        });
    }
    yield componente.destroy();
    res.json({
        msg: `Componente ${id} eliminado`
    });
});
exports.deleteComponente = deleteComponente;
//# sourceMappingURL=componentes.js.map