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
exports.deletePracticaUsuario = exports.putPracticaUsuario = exports.postPracticaUsuario = exports.getPracticaUsuario = exports.getPracticaUsuarios = void 0;
const practicaUsuario_1 = __importDefault(require("../models/practicaUsuario"));
const getPracticaUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const practicaUsuarios = yield practicaUsuario_1.default.findAll();
    res.json(practicaUsuarios);
});
exports.getPracticaUsuarios = getPracticaUsuarios;
const getPracticaUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    try {
        const practicaUsuario = yield practicaUsuario_1.default.findOne({
            where: {
                username: username
            }
        });
        res.json(practicaUsuario);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe una relacion con ese username${username}`
        });
    }
});
exports.getPracticaUsuario = getPracticaUsuario;
const postPracticaUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existePracticaUsuario = yield practicaUsuario_1.default.findOne({
            where: {
                id_practica: body.id_practica,
                username: body.username
            }
        });
        if (existePracticaUsuario) {
            return res.status(400).json({
                msg: `Ya existe la relacion`
            });
        }
        const practicaUsuario = new practicaUsuario_1.default(body);
        yield practicaUsuario.save();
        res.json(practicaUsuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postPracticaUsuario = postPracticaUsuario;
const putPracticaUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    const { body } = req;
    try {
        const practicaUsuario = yield practicaUsuario_1.default.findOne({
            where: {
                username: username
            }
        });
        if (!practicaUsuario) {
            return res.status(404).json({
                msg: `No existe el usuario ${username}`
            });
        }
        yield practicaUsuario.update(body);
        res.json(practicaUsuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putPracticaUsuario = putPracticaUsuario;
const deletePracticaUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const practicaUsuario = yield practicaUsuario_1.default.findOne({
        where: {
            id_practica: body.id_practica,
            username: body.username
        }
    });
    if (!practicaUsuario) {
        return res.status(404).json({
            msg: `No existe la relacion ${username}`
        });
    }
    yield practicaUsuario.destroy();
    res.json({
        msg: `Relacion eliminada`
    });
});
exports.deletePracticaUsuario = deletePracticaUsuario;
//# sourceMappingURL=practicaUsuarios.js.map