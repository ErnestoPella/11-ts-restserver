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
exports.deleteTrazaComponente = exports.putTrzaComponente = exports.postTrazaComponente = exports.getTrazaComponente = exports.getTrazasComponentes = void 0;
const trazaComponente_1 = __importDefault(require("../models/trazaComponente"));
const getTrazasComponentes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trazasComponentes = yield trazaComponente_1.default.findAll();
    res.json(trazasComponentes);
});
exports.getTrazasComponentes = getTrazasComponentes;
const getTrazaComponente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const trazaComponente = yield trazaComponente_1.default.findOne({
            where: {
                id_traza: id
            }
        });
        res.json(trazaComponente);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe la traza con id ${id}`
        });
    }
});
exports.getTrazaComponente = getTrazaComponente;
const postTrazaComponente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existetrazaComponente = yield trazaComponente_1.default.findOne({
            where: {
                id_traza: body.id_traza
            }
        });
        if (existetrazaComponente) {
            return res.status(400).json({
                msg: `Ya existe una traza con el id ${body.id_traza}`
            });
        }
        const trazaComponente = new trazaComponente_1.default(body);
        yield trazaComponente.save();
        res.json(trazaComponente);
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.postTrazaComponente = postTrazaComponente;
const putTrzaComponente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const trazaComponente = yield trazaComponente_1.default.findOne({
            where: {
                id_traza: id
            }
        });
        if (!trazaComponente) {
            return res.status(404).json({
                msg: `No existe la traza ${id}`
            });
        }
        yield trazaComponente.update(body);
        res.json(trazaComponente);
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.putTrzaComponente = putTrzaComponente;
const deleteTrazaComponente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const trazaComponente = yield trazaComponente_1.default.findOne({
        where: {
            id_traza: id
        }
    });
    if (!trazaComponente) {
        return res.status(400).json({
            msg: `No existe una traza con el id ${id}`
        });
    }
    yield trazaComponente.destroy();
    res.json({
        msg: `Traza eliminada`
    });
});
exports.deleteTrazaComponente = deleteTrazaComponente;
//# sourceMappingURL=trazaComponentes.js.map