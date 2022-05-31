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
exports.deleteTrazaPractica = exports.putTrazaPractica = exports.postTrazaPractica = exports.getTrazaPractica = exports.getTrazasPracticas = void 0;
const trazaPractica_1 = __importDefault(require("../models/trazaPractica"));
const getTrazasPracticas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trazasPracticas = yield trazaPractica_1.default.findAll();
    res.json(trazasPracticas);
});
exports.getTrazasPracticas = getTrazasPracticas;
const getTrazaPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const trazaPractica = yield trazaPractica_1.default.findOne({
            where: {
                id: id
            }
        });
        res.json(trazaPractica);
    }
    catch (error) {
        res.status(404).json({
            msg: `No se encontro ninguna traza con el id ${id}`
        });
    }
});
exports.getTrazaPractica = getTrazaPractica;
const postTrazaPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existetrazaPractica = yield trazaPractica_1.default.findOne({
            where: {
                id: body.id
            }
        });
        if (existetrazaPractica) {
            return res.status(400).json({
                msg: `Ya existe una traza con el id ${body.id}`
            });
        }
        const trazaPractica = new trazaPractica_1.default(body);
        yield trazaPractica.save();
        res.json(trazaPractica);
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.postTrazaPractica = postTrazaPractica;
const putTrazaPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const trazaPractica = yield trazaPractica_1.default.findOne({
            where: {
                id: id
            }
        });
        if (!trazaPractica) {
            return res.status(404).json({
                msg: `No existe una traza con el id ${id}`
            });
        }
        yield trazaPractica.update(body);
        res.json(trazaPractica);
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.putTrazaPractica = putTrazaPractica;
const deleteTrazaPractica = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const trazaPractica = yield trazaPractica_1.default.findOne({
        where: {
            id: id
        }
    });
    if (!trazaPractica) {
        return res.status(404).json({
            msg: `No existe una traza con el id ${id}`
        });
    }
    yield trazaPractica.destroy();
    res.json(trazaPractica);
    res.status(500).json({
        msg: `Traza eliminada`
    });
});
exports.deleteTrazaPractica = deleteTrazaPractica;
//# sourceMappingURL=trazaPracticas.js.map