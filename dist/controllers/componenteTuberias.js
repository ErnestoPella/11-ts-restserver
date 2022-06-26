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
exports.deleteComponenteTuberia = exports.putComponenteTuberia = exports.postComponenteTuberia = exports.getComponenteTuberia = exports.getComponentesTuberias = void 0;
const componenteTuberia_1 = __importDefault(require("../models/componenteTuberia"));
const getComponentesTuberias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const componentes = yield componenteTuberia_1.default.findAll();
    res.json(componentes);
});
exports.getComponentesTuberias = getComponentesTuberias;
const getComponenteTuberia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const componenteTuberia = yield componenteTuberia_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        res.json(componenteTuberia);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe un componente con el id ${id}`
        });
    }
});
exports.getComponenteTuberia = getComponenteTuberia;
const postComponenteTuberia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeComponenteTuberia = yield componenteTuberia_1.default.findOne({
            where: {
                id_componente: body.id_componente
            }
        });
        if (existeComponenteTuberia) {
            return res.status(400).json({
                msg: `Ya existe una tuberia con el id ${body.id_componente}`
            });
        }
        const componenteTuberia = new componenteTuberia_1.default(body);
        yield componenteTuberia.save();
        res.json({
            msg: `Tuberia agregada`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.postComponenteTuberia = postComponenteTuberia;
const putComponenteTuberia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const componenteTuberia = yield componenteTuberia_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        if (!componenteTuberia) {
            return res.json({
                msg: `El componente con el ${id} no existe`
            });
        }
        yield componenteTuberia.update(body);
        res.json({
            msg: `Tuberia actualizada`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.putComponenteTuberia = putComponenteTuberia;
const deleteComponenteTuberia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const componenteTuberia = yield componenteTuberia_1.default.findOne({
        where: {
            id_componente: id
        }
    });
    if (!componenteTuberia) {
        return res.status(404).json({
            msg: `La tuberia con el id ${id} no existe`
        });
    }
    yield componenteTuberia.destroy();
    res.json({
        msg: `Tuberia ${id} eliminada`
    });
});
exports.deleteComponenteTuberia = deleteComponenteTuberia;
//# sourceMappingURL=componenteTuberias.js.map