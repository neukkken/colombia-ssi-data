"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularPrima = calcularPrima;
const constants_1 = require("../constants");
const types_1 = require("../types");
const utils_1 = require("../utils");
function calcularPrima(params) {
    const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;
    if (tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE) {
        return {
            prima: 0,
            diasTrabajados: 0,
            aplica: false,
        };
    }
    const dias = (0, utils_1.calcularDiasLaborados)(diasTrabajados, fechaInicio, fechaFin);
    return {
        prima: Math.round((salarioBase * dias) / constants_1.DIAS_ANO_COMERCIAL),
        diasTrabajados: dias,
        aplica: true,
    };
}
//# sourceMappingURL=prima.js.map