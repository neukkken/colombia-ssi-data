"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularCesantias = calcularCesantias;
const constants_1 = require("../constants");
const types_1 = require("../types");
const utils_1 = require("../utils");
function calcularCesantias(params) {
    const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;
    if (tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE) {
        return {
            cesantias: 0,
            interesesCesantias: 0,
            total: 0,
            diasTrabajados: 0,
            aplica: false,
        };
    }
    const dias = (0, utils_1.calcularDiasLaborados)(diasTrabajados, fechaInicio, fechaFin);
    const cesantias = Math.round((salarioBase * dias) / constants_1.DIAS_ANO_COMERCIAL);
    const interesesCesantias = Math.round((cesantias * constants_1.TASA_INTERES_CESANTIAS * dias) / constants_1.DIAS_ANO_COMERCIAL);
    return {
        cesantias,
        interesesCesantias,
        total: cesantias + interesesCesantias,
        diasTrabajados: dias,
        aplica: true,
    };
}
//# sourceMappingURL=cesantias.js.map