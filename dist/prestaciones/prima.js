"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularPrima = calcularPrima;
const constants_1 = require("../constants");
const types_1 = require("../types");
function calcularPrima(params) {
    const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;
    if (tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE) {
        return {
            prima: 0,
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
    return {
        prima: Math.round((salarioBase * dias) / constants_1.DIAS_ANO_COMERCIAL),
        diasTrabajados: dias,
        aplica: true,
    };
}
//# sourceMappingURL=prima.js.map