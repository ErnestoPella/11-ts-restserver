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
exports.deletePracticaBancoBomba = exports.putPracticaBancoBomba = exports.postPracticaBancoBomba = exports.getPracticaBancoBomba = exports.getPracticasBancoBomba = void 0;
const practicaBancoBomba_1 = __importDefault(require("../models/practicaBancoBomba"));
const getPracticasBancoBomba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const practicaBancoBomba = yield practicaBancoBomba_1.default.findAll();
    res.json(practicaBancoBomba);
});
exports.getPracticasBancoBomba = getPracticasBancoBomba;
const getPracticaBancoBomba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    try {
        const practicaBancoBomba = yield practicaBancoBomba_1.default.findByPk(nombre);
        res.json(practicaBancoBomba);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe una practica con ese nombre${nombre}`
        });
    }
});
exports.getPracticaBancoBomba = getPracticaBancoBomba;
const postPracticaBancoBomba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existepracticaBancoB = yield practicaBancoBomba_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existepracticaBancoB) {
            return res.status(400).json({
                msg: `Ya existe una practica con ese nombre ${body.nombre}`
            });
        }
        const practicaBancoBomba = new practicaBancoBomba_1.default(body);
        yield practicaBancoBomba.save();
        res.json(practicaBancoBomba);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postPracticaBancoBomba = postPracticaBancoBomba;
const putPracticaBancoBomba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const { body } = req;
    try {
        const practicaBancoBomba = yield practicaBancoBomba_1.default.findOne({
            where: {
                nombre: nombre
            }
        });
        if (!practicaBancoBomba) {
            return res.status(404).json({
                msg: `La practica con el nombre ${nombre} no existe`
            });
        }
        yield practicaBancoBomba.update(body);
        res.json(practicaBancoBomba);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putPracticaBancoBomba = putPracticaBancoBomba;
const deletePracticaBancoBomba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const practicaBancoBomba = yield practicaBancoBomba_1.default.findOne({
        where: {
            nombre: nombre
        }
    });
    if (!practicaBancoBomba) {
        return res.status(404).json({
            msg: `La practica con el nombre ${nombre} no existe`
        });
    }
    yield practicaBancoBomba.destroy();
    res.json({
        msg: `Practica ${nombre} eliminada`
    });
});
exports.deletePracticaBancoBomba = deletePracticaBancoBomba;
//# sourceMappingURL=practicaBancoBombas.js.map