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
exports.deleteComponenteTaque = exports.putComponenteTanque = exports.postComponenteTanque = exports.getComponenteTanque = exports.getComponentesTanques = void 0;
const componenteTanque_1 = __importDefault(require("../models/componenteTanque"));
const getComponentesTanques = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const componentes = yield componenteTanque_1.default.findAll();
    res.json(componentes);
});
exports.getComponentesTanques = getComponentesTanques;
const getComponenteTanque = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const componenteTanque = yield componenteTanque_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        res.json(componenteTanque);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe un tanque con el id ${id}`
        });
    }
});
exports.getComponenteTanque = getComponenteTanque;
const postComponenteTanque = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeTanque = yield componenteTanque_1.default.findOne({
            where: {
                id_componente: body.id_componente
            }
        });
        if (existeTanque) {
            return res.status(400).json({
                msg: `Ya existe un tanque con el id ${body.id_componente}`
            });
        }
        const componenteTanque = new componenteTanque_1.default(body);
        yield componenteTanque.save();
        res.json({
            msg: `Tanque agregado`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.postComponenteTanque = postComponenteTanque;
const putComponenteTanque = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const componenteTanque = yield componenteTanque_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        if (!componenteTanque) {
            return res.json({
                msg: `El componente con el ${id} no existe`
            });
        }
        yield componenteTanque.update(body);
        res.json({
            msg: `Tanque actualizado`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.putComponenteTanque = putComponenteTanque;
const deleteComponenteTaque = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const componenteTanque = yield componenteTanque_1.default.findOne({
        where: {
            id_componente: id
        }
    });
    if (!componenteTanque) {
        return res.status(404).json({
            msg: `El tanque con el id ${id} no existe`
        });
    }
    yield componenteTanque.destroy();
    res.json({
        msg: `Tanque${id} eliminada`
    });
});
exports.deleteComponenteTaque = deleteComponenteTaque;
//# sourceMappingURL=componenteTanques.js.map