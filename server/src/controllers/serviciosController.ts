import {Request, Response} from 'express';
import pool from '../database';

class ServiciosController{

    public index (req: Request, res: Response){
        //res.send('hello servicios')
        //pool.query('DESCRIBE condigi.condigit_residente');
        res.json({text:'index servicio Controller'});
    }

    public registroResidente (req: Request, res: Response){
        res.json({text:'residente registrado'})
    }

}

export const serviciosController =  new ServiciosController();
