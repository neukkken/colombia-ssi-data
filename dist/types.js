"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoContrato = exports.TipoCotizante = exports.RiesgoARL = void 0;
var RiesgoARL;
(function (RiesgoARL) {
    RiesgoARL[RiesgoARL["I"] = 1] = "I";
    RiesgoARL[RiesgoARL["II"] = 2] = "II";
    RiesgoARL[RiesgoARL["III"] = 3] = "III";
    RiesgoARL[RiesgoARL["IV"] = 4] = "IV";
    RiesgoARL[RiesgoARL["V"] = 5] = "V";
})(RiesgoARL || (exports.RiesgoARL = RiesgoARL = {}));
var TipoCotizante;
(function (TipoCotizante) {
    TipoCotizante["DEPENDIENTE"] = "DEPENDIENTE";
    TipoCotizante["INDEPENDIENTE"] = "INDEPENDIENTE";
})(TipoCotizante || (exports.TipoCotizante = TipoCotizante = {}));
var TipoContrato;
(function (TipoContrato) {
    TipoContrato["INDEFINIDO"] = "INDEFINIDO";
    TipoContrato["FIJO"] = "FIJO";
})(TipoContrato || (exports.TipoContrato = TipoContrato = {}));
//# sourceMappingURL=types.js.map