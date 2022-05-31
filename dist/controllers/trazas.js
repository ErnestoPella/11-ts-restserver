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
exports.deleteTraza = exports.putTraza = exports.postTraza = exports.getTraza = exports.getTrazas = void 0;
const traza_1 = __importDefault(require("../models/traza"));
const getTrazas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trazas = yield traza_1.default.findAll();
    res.json(trazas);
});
exports.getTrazas = getTrazas;
const getTraza = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const traza = yield traza_1.default.findByPk(id);
        res.json(traza);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe una traza con el id ${id}`
        });
    }
});
exports.getTraza = getTraza;
const postTraza = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const traza = new traza_1.default(body);
        yield traza.save();
        res.json(traza);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postTraza = postTraza;
const putTraza = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const traza = yield traza_1.default.findByPk(id);
        if (!traza) {
            return res.status(400).json({
                msg: `No existe una traza con ese id ${id}`
            });
        }
        yield traza.update(body);
        res.json(traza);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putTraza = putTraza;
const deleteTraza = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const traza = yield traza_1.default.findOne({
        where: {
            id: id
        }
    });
    if (!traza) {
        return res.status(400).json({
            msg: `No existe una traza con ese id ${id}`
        });
    }
    yield traza.destroy();
    res.json({
        msg: `Traza eliminada`
    });
});
exports.deleteTraza = deleteTraza;
//# sourceMappingURL=trazas.js.map