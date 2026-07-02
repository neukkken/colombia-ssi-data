"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularCesantias = calcularCesantias;
const constants_1 = require("../constants");
const types_1 = require("../types");
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
    let dias = diasTrabajados;
    if (dias === undefined && fechaInicio && fechaFin) {
        const diffMs = fechaFin.getTime() - fechaInicio.getTime();
        dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }
    dias = dias ?? constants_1.DIAS_ANO_COMERCIAL;
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