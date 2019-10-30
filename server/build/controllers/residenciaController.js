"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResidenciaController {
    index(req, res) {
        res.json({ text: 'Index Residencia' });
    }
    registroResidencia(req, res) {
        res.json({ text: 'Se registro la residencia correctamente' });
    }
}
exports.residenciaController = new ResidenciaController();
