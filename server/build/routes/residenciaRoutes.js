"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const residenciaController_1 = require("../controllers/residenciaController");
class ResidenciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', residenciaController_1.residenciaController.index);
        this.router.post('/', residenciaController_1.residenciaController.registroResidencia);
    }
}
const residenciaRoutes = new ResidenciaRoutes();
exports.default = residenciaRoutes.router;
