"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const residenteController_1 = require("../controllers/residenteController");
class ResidenteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', residenteController_1.residenteController.list);
        this.router.get('/:xcodigo', residenteController_1.residenteController.buscarResidente);
        this.router.post('/', residenteController_1.residenteController.registroResidente);
        this.router.put('/:xcodigo', residenteController_1.residenteController.actualizarResidente);
        this.router.delete('/:xcodigo', residenteController_1.residenteController.borrarResidente);
    }
}
const residenteRoutes = new ResidenteRoutes();
exports.default = residenteRoutes.router;
