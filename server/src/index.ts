import express, {Application} from 'express';

import indexRoutes from './routes/indexRoutes';
import servicioRoutes from './routes/serviciosRoutes';
import residenciaRoutes from './routes/residenciaRoutes';
import residenteRoutes from './routes/residenteRoutes';

import morgan from 'morgan';
import cors from 'cors';
import { json } from 'body-parser';


class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.congif();
        this.routes();
    }

    congif(): void{
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/servicios',servicioRoutes);
        this.app.use('/api/residencia',residenciaRoutes);
        this.app.use('/api/residente',residenteRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('server on port ', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();