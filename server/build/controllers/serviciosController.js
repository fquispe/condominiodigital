"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiciosController {
    index(req, res) {
        //res.send('hello servicios')
        //pool.query('DESCRIBE condigi.condigit_residente');
        res.json({ text: 'index servicio Controller' });
    }
    registroResidente(req, res) {
        res.json({ text: 'residente registrado' });
    }
}
exports.serviciosController = new ServiciosController();
