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
exports.deleteComponenteValvula = exports.putComponenteValvula = exports.postComponenteValvula = exports.getComponenteValvula = exports.getComponentesValvulas = void 0;
const componenteValvula_1 = __importDefault(require("../models/componenteValvula"));
const getComponentesValvulas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const componetes = yield componenteValvula_1.default.findAll();
    res.json(componetes);
});
exports.getComponentesValvulas = getComponentesValvulas;
const getComponenteValvula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const componenteValvula = yield componenteValvula_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        res.json(componenteValvula);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe una valvula con el id ${id}`
        });
    }
});
exports.getComponenteValvula = getComponenteValvula;
const postComponenteValvula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeValvula = yield componenteValvula_1.default.findOne({
            where: {
                id_componente: body.id_componente
            }
        });
        if (existeValvula) {
            return res.status(400).json({
                msg: `Ya existe una valvula con el id ${body.id_componente}`
            });
        }
        const componenteValvula = new componenteValvula_1.default(body);
        yield componenteValvula.save();
        res.json({
            msg: `Valvula agregada`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.postComponenteValvula = postComponenteValvula;
const putComponenteValvula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const componenteValvula = yield componenteValvula_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        if (!componenteValvula) {
            return res.json({
                msg: `El componente con el ${id} no existe`
            });
        }
        yield componenteValvula.update(body);
        res.json({
            msg: `Valvula actualizada`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.putComponenteValvula = putComponenteValvula;
const deleteComponenteValvula = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const componenteValvula = yield componenteValvula_1.default.findOne({
        where: {
            id_componente: id
        }
    });
    if (!componenteValvula) {
        return res.json({
            msg: `El componente con el ${id} no existe`
        });
    }
    yield componenteValvula.destroy();
    res.json({
        msg: `Valvula eliminada`
    });
});
exports.deleteComponenteValvula = deleteComponenteValvula;
//# sourceMappingURL=componenteValvulas.js.map