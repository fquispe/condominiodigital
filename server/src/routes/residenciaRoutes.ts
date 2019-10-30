import {Router} from 'express';
import {residenciaController} from '../controllers/residenciaController';

class ResidenciaRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',residenciaController.index);
        this.router.post('/',residenciaController.registroResidencia);
    }
}

const residenciaRoutes =  new ResidenciaRoutes();
export default residenciaRoutes.router;