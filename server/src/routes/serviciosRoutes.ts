import {Router} from 'express';
import {serviciosController} from '../controllers/serviciosController';

class ServiciosRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',serviciosController.index);
        this.router.post('/',serviciosController.registroResidente);
    }
}

const serviciosRoutes =  new ServiciosRoutes();
export default serviciosRoutes.router;