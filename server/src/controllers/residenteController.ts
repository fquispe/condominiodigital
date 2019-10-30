import {Request, Response} from 'express';
import pool from '../database';
import { promises } from 'fs';

class ResidenteController{

    public async list (req: Request, res: Response): Promise<void>{
        const listaResidentes = await pool.query('select * from condigi.condigit_residente where residv_estado = 1');
        res.json(listaResidentes);
    }

    public async buscarResidente (req: Request, res: Response):Promise<void>{
        const residente = await pool.query('select * from condigi.condigit_residente where residv_codigo = "'+req.params.xcodigo+'" and residv_estado = 1');
        if (residente.length > 0){
            res.json(residente[0]);
        }else{
            res.json({msg:"Residente no encontrado --Fail--"})
        }
        //res.status(404).json({msg:"Residente no encontrado --Fail--"})
    }

    public async registroResidente (req: Request, res: Response):Promise<void>{
        var xparam = "'"+req.body.residv_codigo
        +"','"+req.body.residv_nombres
        +"','"+req.body.residv_apelpaterno
        +"','"+req.body.residv_apelmaterno
        +"','"+req.body.residv_dni
        +"','"+req.body.residd_fechanace
        +"','"+req.body.residv_tiporeside
        +"','"+req.body.residv_resphogar
        +"','"+req.body.residv_userreg+"'"; 
        //console.log(xparam);
        const xresult = await pool.query('CALL CONDIGISI_RESIDENTE ('+xparam+')');
        var xmsg = xresult[0]
        res.json(xmsg[0].msg);
    }

    public actualizarResidente (req: Request, res: Response){
        
        res.json({text:'Se actualizo al residente correctamente: '+req.params.xcodigo})
    }

    public async borrarResidente (req: Request, res: Response):Promise<void>{
        const xdelete = await pool.query('UPDATE condigi.condigit_residente SET residv_estado = "0" WHERE (residv_codigo = "'+req.params.xcodigo+'")'); 
        res.json({text:'Se elimino al residente correctamente con el Codigo: '+req.params.xcodigo})

    }

}

export const residenteController =  new ResidenteController();
