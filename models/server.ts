import express, {Application} from 'express';
import userRoutes from '../routes/usuario';
import practicaRoutes from '../routes/practica';
import componenteRoutes from '../routes/componente';
import trazaRoutes from '../routes/traza';
import trazaPracticaRouter from '../routes/trazaPractica';
import trazaComponenteRouter from '../routes/trazaComponente';
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
        trazaComponente: '/api/trazaComponente'
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
    }


    listen(){
        this.app.listen(this.port,() =>{
            console.log('Servidor corriendo ' + this.port);
        })
    }
}


export default Server;