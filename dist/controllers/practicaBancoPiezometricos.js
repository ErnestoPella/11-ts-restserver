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
exports.deletePracticaBancoPieazometrico = exports.putPracticaBancoPieazometrico = exports.postPracticaBancoPieazometrico = exports.getPracticaBancoPieazometrico = exports.getPracticasBancoPieazometrico = void 0;
const practicaBancoPiezometrico_1 = __importDefault(require("../models/practicaBancoPiezometrico"));
const getPracticasBancoPieazometrico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const practicaBancoPiezometrico = yield practicaBancoPiezometrico_1.default.findAll();
    res.json(practicaBancoPiezometrico);
});
exports.getPracticasBancoPieazometrico = getPracticasBancoPieazometrico;
const getPracticaBancoPieazometrico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    try {
        const practicaBancoPiezometrico = yield practicaBancoPiezometrico_1.default.findOne({
            where: {
                nombre: nombre
            }
        });
        res.json(practicaBancoPiezometrico);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe una practica de tipo banco piezometrico con el nombre ${nombre}`
        });
    }
});
exports.getPracticaBancoPieazometrico = getPracticaBancoPieazometrico;
const postPracticaBancoPieazometrico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existePracticaBancoP = yield practicaBancoPiezometrico_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existePracticaBancoP) {
            return res.status(400).json({
                msg: `Ya existe una practica con ese nombre ${body.nombre}`
            });
        }
        const practicaBancoPiezometrico = new practicaBancoPiezometrico_1.default(body);
        yield practicaBancoPiezometrico.save();
        res.json(practicaBancoPiezometrico);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postPracticaBancoPieazometrico = postPracticaBancoPieazometrico;
const putPracticaBancoPieazometrico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const { body } = req;
    try {
        const practicaBancoPiezometrico = yield practicaBancoPiezometrico_1.default.findOne({
            where: {
                nombre: nombre
            }
        });
        if (!practicaBancoPiezometrico) {
            return res.status(404).json({
                msg: `La practica con el nombre ${nombre} no existe`
            });
        }
        yield practicaBancoPiezometrico.update(body);
        res.json(practicaBancoPiezometrico);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putPracticaBancoPieazometrico = putPracticaBancoPieazometrico;
const deletePracticaBancoPieazometrico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const practicaBancoPiezometrico = yield practicaBancoPiezometrico_1.default.findOne({
        where: {
            nombre: nombre
        }
    });
    if (!practicaBancoPiezometrico) {
        return res.status(404).json({
            msg: `La practica con el nombre ${nombre} no existe`
        });
    }
    yield practicaBancoPiezometrico.destroy();
    res.json({
        msg: `Practica ${nombre} eliminada`
    });
});
exports.deletePracticaBancoPieazometrico = deletePracticaBancoPieazometrico;
//# sourceMappingURL=practicaBancoPiezometricos.js.map