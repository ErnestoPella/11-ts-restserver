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
exports.deletePractica = exports.putPractica = exports.postPractica = exports.getPractica = exports.getPracticas = void 0;
const practica_1 = __importDefault(require("../models/practica"));
const getPracticas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const practicas = yield practica_1.default.findAll();
    res.json(practicas);
});
exports.getPracticas = getPracticas;
const getPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    try {
        const practica = yield practica_1.default.findByPk(nombre);
        res.json(practica);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe una practica con ese nombre${nombre}`
        });
    }
});
exports.getPractica = getPractica;
const postPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const { body } = req;
    try {
        const existepractica = yield practica_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existepractica) {
            return res.status(400).json({
                msg: `Ya existe una practica con ese nombre ${body.nombre}`
            });
        }
        const practica = new practica_1.default(body);
        yield practica.save();
        res.json(practica);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postPractica = postPractica;
const putPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const { body } = req;
    try {
        const practica = yield practica_1.default.findOne({
            where: {
                nombre: nombre
            }
        });
        if (!practica) {
            return res.status(404).json({
                msg: `La practica con el nombre ${nombre} no existe`
            });
        }
        yield practica.update(body);
        res.json(practica);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putPractica = putPractica;
const deletePractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const practica = yield practica_1.default.findOne({
        where: {
            nombre: nombre
        }
    });
    if (!practica) {
        return res.status(404).json({
            msg: `La practica con el nombre ${nombre} no existe`
        });
    }
    yield practica.destroy();
    res.json({
        msg: `Practica ${nombre} eliminada`
    });
});
exports.deletePractica = deletePractica;
//# sourceMappingURL=practica.js.map