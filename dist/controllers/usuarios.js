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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json(usuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    try {
        const usuario = yield usuario_1.default.findOne({
            where: {
                username: username
            }
        });
        res.json(usuario);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe un usuario con ese username${username}`
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeUsuario = yield usuario_1.default.findOne({
            where: {
                username: body.username
            }
        });
        if (existeUsuario) {
            return res.status(400).json({
                msg: `Ya existe un usuario llamado ${body.username}`
            });
        }
        const usuario = new usuario_1.default(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findOne({
            where: {
                username: username
            }
        });
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe el usuario ${username}`
            });
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    const usuario = yield usuario_1.default.findOne({
        where: {
            username: username
        }
    });
    if (!usuario) {
        return res.status(404).json({
            msg: `No existe el usuario ${username}`
        });
    }
    yield usuario.destroy();
    res.json({
        msg: `Usuario eliminado`
    });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map