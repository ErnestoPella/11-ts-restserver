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
exports.deletePracticaCanal = exports.putPracticaCanal = exports.postPracticaCanal = exports.getPracticaCanal = exports.getPracticasCanal = void 0;
const practicaCanal_1 = __importDefault(require("../models/practicaCanal"));
const getPracticasCanal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const practicasCanal = yield practicaCanal_1.default.findAll();
    res.json(practicasCanal);
});
exports.getPracticasCanal = getPracticasCanal;
const getPracticaCanal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    try {
        const practicaCanal = yield practicaCanal_1.default.findOne({
            where: {
                nombre: nombre
            }
        });
        res.json(practicaCanal);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe una practica con ese nombre${nombre}`
        });
    }
});
exports.getPracticaCanal = getPracticaCanal;
const postPracticaCanal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existepracticaCanal = yield practicaCanal_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existepracticaCanal) {
            return res.status(400).json({
                msg: `Ya existe una practica con ese nombre ${body.nombre}`
            });
        }
        const practicaCanal = new practicaCanal_1.default(body);
        yield practicaCanal.save();
        res.json(practicaCanal);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postPracticaCanal = postPracticaCanal;
const putPracticaCanal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const { body } = req;
    try {
        const practicaCanal = yield practicaCanal_1.default.findOne({
            where: {
                nombre: nombre
            }
        });
        if (!practicaCanal) {
            return res.status(404).json({
                msg: `La practica con el nombre ${nombre} no existe`
            });
        }
        yield practicaCanal.update(body);
        res.json(practicaCanal);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putPracticaCanal = putPracticaCanal;
const deletePracticaCanal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const practicaCanal = yield practicaCanal_1.default.findOne({
        where: {
            nombre: nombre
        }
    });
    if (!practicaCanal) {
        return res.status(404).json({
            msg: `La practica con el nombre ${nombre} no existe`
        });
    }
    yield practicaCanal.destroy();
    res.json({
        msg: `Practica ${nombre} eliminada`
    });
});
exports.deletePracticaCanal = deletePracticaCanal;
//# sourceMappingURL=practicaCanals.js.map