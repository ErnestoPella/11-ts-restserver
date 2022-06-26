import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import practicaRoutes from '../routes/practica';
import componenteRoutes from '../routes/componente';
import trazaRoutes from '../routes/traza';
import trazaPracticaRouter from '../routes/trazaPractica';
import trazaComponenteRouter from '../routes/trazaComponente';
import practicaBancoPiezometricoRouter from '../routes/practicaBancoPiezometrico';
import practicaBancoBombaRouter from '../routes/practicaBancoBomba';
import practicaCanalRouter from '../routes/practicaCanal';
import componenteTuberiaRouter from '../routes/componenteTuberia';
import componeteTanqueRouter from '../routes/componenteTanque';
import componenteValvulaRouter from '../routes/componenteValvula';
import componenteMiraRouter from '../routes/componenteMira';
import ComponenteMedidorRevolucionesRouter from '../routes/componenteMedidorRevoluciones';
import ComponenteElevadorRouter from '../routes/componenteElevador';
import rolRouter from '../routes/rol';
import usuarioRol from '../routes/usuarioRol';
import cors from 'cors';
import db from '../db/connection';

class Server {
    
    private app: Application;
    private port: string;
    private apiPaths = {
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
        componenteMedidorRevoluciones: '/api/componenteMedidorRevoluciones',
        componenteElevador: '/api/componenteElevador',
        rol:'/api/rol',
        usuarioRol:'/api/usuarioRol'
    }
    
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        //Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
       

    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error( 'Error al conectar con la bd');
            
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura del body
        this.app.use(express.json());

        //Carpeta publica
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
        this.app.use(this.apiPaths.practicas, practicaRoutes)
        this.app.use(this.apiPaths.componentes, componenteRoutes)
        this.app.use(this.apiPaths.trazas, trazaRoutes)
        this.app.use(this.apiPaths.trazaPractica,trazaPracticaRouter)
        this.app.use(this.apiPaths.trazaComponente, trazaComponenteRouter)
        this.app.use(this.apiPaths.practicaBancoPiezometrico, practicaBancoPiezometricoRouter)
        this.app.use(this.apiPaths.practicaBancoBomba, practicaBancoBombaRouter)
        this.app.use(this.apiPaths.pacticaCanal, practicaCanalRouter)
        this.app.use(this.apiPaths.componenteTuberia, componenteTuberiaRouter)
        this.app.use(this.apiPaths.componenteTanque, componeteTanqueRouter)
        this.app.use(this.apiPaths.componenteValvula, componenteValvulaRouter)
        this.app.use(this.apiPaths.componenteMira, componenteMiraRouter)
        this.app.use(this.apiPaths.componenteMedidorRevoluciones,ComponenteMedidorRevolucionesRouter)
        this.app.use(this.apiPaths.componenteElevador, ComponenteElevadorRouter)
        this.app.use(this.apiPaths.rol, rolRouter)
        this.app.use(this.apiPaths.usuarioRol,usuarioRol)
    }


    listen(){
        this.app.listen(this.port,() =>{
            console.log('Servidor corriendo ' + this.port);
        })
    }
}


export default Server;