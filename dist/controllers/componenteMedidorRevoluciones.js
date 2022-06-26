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
exports.deleteComponenteMedidorRevoluciones = exports.putComponenteMedidorRevoluciones = exports.postComponenteMedidorRevoluciones = exports.getComponenteMedidorRevoluciones = exports.getComponentesMedidorRevoluciones = void 0;
const componenteMedidorRevolucion_1 = __importDefault(require("../models/componenteMedidorRevolucion"));
const getComponentesMedidorRevoluciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const componentes = yield componenteMedidorRevolucion_1.default.findAll();
    res.json(componentes);
});
exports.getComponentesMedidorRevoluciones = getComponentesMedidorRevoluciones;
const getComponenteMedidorRevoluciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const componenteMedidorRevoluciones = yield componenteMedidorRevolucion_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        res.json(componenteMedidorRevoluciones);
    }
    catch (error) {
        res.status(404).json({
            msg: `El medidor de revoluviones con el i ${id} no existe`
        });
    }
});
exports.getComponenteMedidorRevoluciones = getComponenteMedidorRevoluciones;
const postComponenteMedidorRevoluciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeMedidor = yield componenteMedidorRevolucion_1.default.findOne({
            where: {
                id_componente: body.id_componente
            }
        });
        if (existeMedidor) {
            return res.status(400).json({
                msg: `El medidor de revoluciones ya existe`
            });
        }
        const componenteMedidorRevoluciones = new componenteMedidorRevolucion_1.default(body);
        yield componenteMedidorRevoluciones.save();
        res.json({
            msg: `Medidor agregado`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.postComponenteMedidorRevoluciones = postComponenteMedidorRevoluciones;
const putComponenteMedidorRevoluciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const componenteMedidorRevoluciones = yield componenteMedidorRevolucion_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        if (!componenteMedidorRevoluciones) {
            return res.status(400).json({
                msg: `El medidor de revoluciones ${id} no existe`
            });
        }
        yield componenteMedidorRevoluciones.update(body);
        res.json({
            msg: `Medidor actualizado`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.putComponenteMedidorRevoluciones = putComponenteMedidorRevoluciones;
const deleteComponenteMedidorRevoluciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const componenteMedidorRevoluciones = yield componenteMedidorRevolucion_1.default.findOne({
        where: {
            id_componente: id
        }
    });
    if (!componenteMedidorRevoluciones) {
        return res.status(400).json({
            msg: `El medidor de revoluciones ${id} no existe`
        });
    }
    yield componenteMedidorRevoluciones.destroy();
    res.json({
        msg: `Medidor eliminado`
    });
});
exports.deleteComponenteMedidorRevoluciones = deleteComponenteMedidorRevoluciones;
//# sourceMappingURL=componenteMedidorRevoluciones.js.map