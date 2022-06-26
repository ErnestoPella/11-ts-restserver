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
exports.deleteUsuarioRol = exports.putUsuarioRol = exports.postUsuarioRol = exports.getUsuarioRol = exports.getUsuarioRoles = void 0;
const usuario_rol_1 = __importDefault(require("../models/usuario_rol"));
const getUsuarioRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioRoles = yield usuario_rol_1.default.findAll();
    res.json(usuarioRoles);
});
exports.getUsuarioRoles = getUsuarioRoles;
const getUsuarioRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    try {
        const usuarioRol = yield usuario_rol_1.default.findOne({
            where: {
                username: username
            }
        });
        res.json(usuarioRol);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe un usuario con ese username${username}`
        });
    }
});
exports.getUsuarioRol = getUsuarioRol;
const postUsuarioRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeUsuarioRol = yield usuario_rol_1.default.findOne({
            where: {
                username: body.username,
                rol: body.rol
            }
        });
        if (existeUsuarioRol) {
            return res.status(400).json({
                msg: `Ya existe un usuario llamado ${body.username}`
            });
        }
        const usuarioRol = new usuario_rol_1.default(body);
        yield usuarioRol.save();
        res.json(usuarioRol);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postUsuarioRol = postUsuarioRol;
const putUsuarioRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    const { body } = req;
    try {
        const usuarioRol = yield usuario_rol_1.default.findOne({
            where: {
                username: username
            }
        });
        if (!usuarioRol) {
            return res.status(404).json({
                msg: `No existe el usuario ${username}`
            });
        }
        yield usuarioRol.update(body);
        res.json(usuarioRol);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putUsuarioRol = putUsuarioRol;
const deleteUsuarioRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.params;
    const usuarioRol = yield usuario_rol_1.default.findOne({
        where: {
            username: username
        }
    });
    if (!usuarioRol) {
        return res.status(404).json({
            msg: `No existe el usuario ${username}`
        });
    }
    yield usuarioRol.destroy();
    res.json({
        msg: `Usuario eliminado`
    });
});
exports.deleteUsuarioRol = deleteUsuarioRol;
//# sourceMappingURL=usuarioRoles.js.map