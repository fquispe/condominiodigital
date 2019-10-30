"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const serviciosRoutes_1 = __importDefault(require("./routes/serviciosRoutes"));
const residenciaRoutes_1 = __importDefault(require("./routes/residenciaRoutes"));
const residenteRoutes_1 = __importDefault(require("./routes/residenteRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.congif();
        this.routes();
    }
    congif() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/servicios', serviciosRoutes_1.default);
        this.app.use('/api/residencia', residenciaRoutes_1.default);
        this.app.use('/api/residente', residenteRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
