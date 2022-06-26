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
exports.deleteRol = exports.putRol = exports.postRol = exports.getRol = exports.getRoles = void 0;
const rol_1 = __importDefault(require("../models/rol"));
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roles = yield rol_1.default.findAll();
    res.json(roles);
});
exports.getRoles = getRoles;
const getRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.params;
    try {
        const rol = yield rol_1.default.findOne({
            where: {
                descripcion: descripcion
            }
        });
        res.json(rol);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe un rol con ese nombre ${descripcion}`
        });
    }
});
exports.getRol = getRol;
const postRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeRol = yield rol_1.default.findOne({
            where: {
                descripcion: body.descripcion
            }
        });
        if (existeRol) {
            return res.status(400).json({
                msg: `Ya existe un rol llamado ${body.descripcion}`
            });
        }
        const rol = new rol_1.default(body);
        yield rol.save();
        res.json(rol);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postRol = postRol;
const putRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.params;
    const { body } = req;
    try {
        const rol = yield rol_1.default.findOne({
            where: {
                descripcion: descripcion
            }
        });
        if (!rol) {
            return res.status(404).json({
                msg: `No existe el rol ${descripcion}`
            });
        }
        yield rol.update(body);
        res.json(rol);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putRol = putRol;
const deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.params;
    const rol = yield rol_1.default.findOne({
        where: {
            descripcion: descripcion
        }
    });
    if (!rol) {
        return res.status(404).json({
            msg: `No existe el rol ${descripcion}`
        });
    }
    yield rol.destroy();
    res.json({
        msg: `Rol eliminado`
    });
});
exports.deleteRol = deleteRol;
//# sourceMappingURL=roles.js.map