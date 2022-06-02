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
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const practica_1 = __importDefault(require("../routes/practica"));
const componente_1 = __importDefault(require("../routes/componente"));
const traza_1 = __importDefault(require("../routes/traza"));
const trazaPractica_1 = __importDefault(require("../routes/trazaPractica"));
const trazaComponente_1 = __importDefault(require("../routes/trazaComponente"));
const practicaBancoPiezometrico_1 = __importDefault(require("../routes/practicaBancoPiezometrico"));
const practicaBancoBomba_1 = __importDefault(require("../routes/practicaBancoBomba"));
const practicaCanal_1 = __importDefault(require("../routes/practicaCanal"));
const componenteTuberia_1 = __importDefault(require("../routes/componenteTuberia"));
const componenteTanque_1 = __importDefault(require("../routes/componenteTanque"));
const componenteValvula_1 = __importDefault(require("../routes/componenteValvula"));
const componenteMira_1 = __importDefault(require("../routes/componenteMira"));
const componenteMedidorRevoluciones_1 = __importDefault(require("../routes/componenteMedidorRevoluciones"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            practicas: '/api/practicas',
            componentes: '/api/componentes',
            trazas: '/api/trazas',
            trazaPractica: '/api/trazaPractica',
            trazaComponente: '/api/trazaComponente',
            practicaBancoPiezometrico: '/api/practicaBancoPiezometrico',
            practicaBancoBomba: '/api/practicaBancoBomba',
            pacticaCanal: '/api/practicaCanal',
            componenteTuberia: '/api/componenteTuberia',
            componenteTanque: '/api/componenteTanque',
            componenteValvula: '/api/componenteValvula',
            componenteMira: '/api/componenteMira',
            componenteMedidorRevoluciones: '/api/componenteMedidorRevoluciones'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                throw new Error('Error al conectar con la bd');
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.practicas, practica_1.default);
        this.app.use(this.apiPaths.componentes, componente_1.default);
        this.app.use(this.apiPaths.trazas, traza_1.default);
        this.app.use(this.apiPaths.trazaPractica, trazaPractica_1.default);
        this.app.use(this.apiPaths.trazaComponente, trazaComponente_1.default);
        this.app.use(this.apiPaths.practicaBancoPiezometrico, practicaBancoPiezometrico_1.default);
        this.app.use(this.apiPaths.practicaBancoBomba, practicaBancoBomba_1.default);
        this.app.use(this.apiPaths.pacticaCanal, practicaCanal_1.default);
        this.app.use(this.apiPaths.componenteTuberia, componenteTuberia_1.default);
        this.app.use(this.apiPaths.componenteTanque, componenteTanque_1.default);
        this.app.use(this.apiPaths.componenteValvula, componenteValvula_1.default);
        this.app.use(this.apiPaths.componenteMira, componenteMira_1.default);
        this.app.use(this.apiPaths.componenteMedidorRevoluciones, componenteMedidorRevoluciones_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map