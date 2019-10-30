import {Router} from 'express';
import {residenteController} from '../controllers/residenteController';

class ResidenteRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',residenteController.list);
        this.router.get('/:xcodigo',residenteController.buscarResidente);
        this.router.post('/',residenteController.registroResidente);
        this.router.put('/:xcodigo',residenteController.actualizarResidente);
        this.router.delete('/:xcodigo',residenteController.borrarResidente);
    }
}

const residenteRoutes =  new ResidenteRoutes();
export default residenteRoutes.router;