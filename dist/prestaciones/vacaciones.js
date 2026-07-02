"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularVacaciones = calcularVacaciones;
const constants_1 = require("../constants");
const types_1 = require("../types");
function calcularVacaciones(params) {
    const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;
    if (tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE) {
        return {
            vacaciones: 0,
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
        vacaciones: Math.round((salarioBase * dias) / (constants_1.DIAS_ANO_COMERCIAL * 2)),
        diasTrabajados: dias,
        aplica: true,
    };
}
//# sourceMappingURL=vacaciones.js.map