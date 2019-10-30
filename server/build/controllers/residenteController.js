"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ResidenteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listaResidentes = yield database_1.default.query('select * from condigi.condigit_residente where residv_estado = 1');
            res.json(listaResidentes);
        });
    }
    buscarResidente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const residente = yield database_1.default.query('select * from condigi.condigit_residente where residv_codigo = "' + req.params.xcodigo + '" and residv_estado = 1');
            if (residente.length > 0) {
                res.json(residente[0]);
            }
            else {
                res.json({ msg: "Residente no encontrado --Fail--" });
            }
            //res.status(404).json({msg:"Residente no encontrado --Fail--"})
        });
    }
    registroResidente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var xparam = "'" + req.body.residv_codigo
                + "','" + req.body.residv_nombres
                + "','" + req.body.residv_apelpaterno
                + "','" + req.body.residv_apelmaterno
                + "','" + req.body.residv_dni
                + "','" + req.body.residd_fechanace
                + "','" + req.body.residv_tiporeside
                + "','" + req.body.residv_resphogar
                + "','" + req.body.residv_userreg + "'";
            //console.log(xparam);
            const xresult = yield database_1.default.query('CALL CONDIGISI_RESIDENTE (' + xparam + ')');
            var xmsg = xresult[0];
            res.json(xmsg[0].msg);
        });
    }
    actualizarResidente(req, res) {
        res.json({ text: 'Se actualizo al residente correctamente: ' + req.params.xcodigo });
    }
    borrarResidente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const xdelete = yield database_1.default.query('UPDATE condigi.condigit_residente SET residv_estado = "0" WHERE (residv_codigo = "' + req.params.xcodigo + '")');
            res.json({ text: 'Se elimino al residente correctamente con el Codigo: ' + req.params.xcodigo });
        });
    }
}
exports.residenteController = new ResidenteController();
