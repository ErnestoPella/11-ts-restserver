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
exports.deleteComponenteElevador = exports.putComponenteElevador = exports.postComponenteElevador = exports.getComponenteElevador = exports.getComponentesElevadores = void 0;
const componenteElevador_1 = __importDefault(require("../models/componenteElevador"));
const getComponentesElevadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const componentes = yield componenteElevador_1.default.findAll();
    res.json(componentes);
});
exports.getComponentesElevadores = getComponentesElevadores;
const getComponenteElevador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const componentes = yield componenteElevador_1.default.findOne({
            where: {
                id: id
            }
        });
        res.json(componentes);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe un elevador con el id ${id}`
        });
    }
});
exports.getComponenteElevador = getComponenteElevador;
const postComponenteElevador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeElevador = yield componenteElevador_1.default.findOne({
            where: {
                id: body.id
            }
        });
        if (existeElevador) {
            return res.status(400).json({
                msg: `El elvedor ya existe`
            });
        }
        const componenteElevador = new componenteElevador_1.default(body);
        yield componenteElevador.save();
        res.json({
            msg: `Elevador agregado`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.postComponenteElevador = postComponenteElevador;
const putComponenteElevador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const componenteElevador = yield componenteElevador_1.default.findOne({
            where: {
                id: id
            }
        });
        if (!componenteElevador) {
            return res.status(400).json({
                msg: `No existe un elevador con el id ${id}`
            });
        }
        yield componenteElevador.update(body);
        res.json({
            msg: `Elevador actualizado`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
    const componentes = componenteElevador_1.default.findAll();
    res.json(componentes);
});
exports.putComponenteElevador = putComponenteElevador;
const deleteComponenteElevador = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const componenteElevador = yield componenteElevador_1.default.findOne({
        where: {
            id: id
        }
    });
    if (!componenteElevador) {
        return res.status(400).json({
            msg: `No existe el levador con el id ${id}`
        });
    }
    yield componenteElevador.destroy();
    res.json({
        msg: `Elevador eliminado`
    });
});
exports.deleteComponenteElevador = deleteComponenteElevador;
//# sourceMappingURL=componenteElevadores.js.map