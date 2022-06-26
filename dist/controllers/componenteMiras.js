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
exports.deleteComponenteMira = exports.putComponenteMira = exports.postComponenteMira = exports.getComponenteMira = exports.getComponentesMiras = void 0;
const componenteMira_1 = __importDefault(require("../models/componenteMira"));
const getComponentesMiras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const componentes = yield componenteMira_1.default.findAll();
    res.json(componentes);
});
exports.getComponentesMiras = getComponentesMiras;
const getComponenteMira = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const componenteMira = yield componenteMira_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        res.json(componenteMira);
    }
    catch (error) {
        res.status(404).json({
            msg: `No existe una mira con el id ${id}`
        });
    }
});
exports.getComponenteMira = getComponenteMira;
const postComponenteMira = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeMira = yield componenteMira_1.default.findOne({
            where: {
                id_componente: body.id_componente
            }
        });
        if (existeMira) {
            return res.status(400).json({
                msg: `Ya existe una mira con el id ${body.id_componente}`
            });
        }
        const componenteMira = new componenteMira_1.default(body);
        yield componenteMira.save();
        res.json({
            msg: `Mira agregada`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.postComponenteMira = postComponenteMira;
const putComponenteMira = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const componenteMira = yield componenteMira_1.default.findOne({
            where: {
                id_componente: id
            }
        });
        if (!componenteMira) {
            return res.status(400).json({
                msg: `No existe una mira con el id ${id}`
            });
        }
        yield componenteMira.update(body);
        res.json({
            msg: `Mira actualizada`
        });
    }
    catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
});
exports.putComponenteMira = putComponenteMira;
const deleteComponenteMira = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const componenteMira = yield componenteMira_1.default.findOne({
        where: {
            id_componente: id
        }
    });
    if (!componenteMira) {
        return res.status(400).json({
            msg: `No existe una mira con el id ${id}`
        });
    }
    yield componenteMira.destroy();
    res.json({
        msg: `Mira eliminada`
    });
});
exports.deleteComponenteMira = deleteComponenteMira;
//# sourceMappingURL=componenteMiras.js.map