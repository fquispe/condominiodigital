import {Request, Response} from 'express';
import pool from '../database';

class ResidenciaController{

    public index (req: Request, res: Response){
        res.json({text:'Index Residencia'});
    }

    public registroResidencia (req: Request, res: Response){
        res.json({text:'Se registro la residencia correctamente'})
    }

}

export const residenciaController =  new ResidenciaController();
