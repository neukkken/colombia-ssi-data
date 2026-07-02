"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularVacaciones = calcularVacaciones;
const constants_1 = require("../constants");
const types_1 = require("../types");
const utils_1 = require("../utils");
function calcularVacaciones(params) {
    const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;
    if (tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE) {
        return {
            vacaciones: 0,
            diasTrabajados: 0,
            aplica: false,
        };
    }
    const dias = (0, utils_1.calcularDiasLaborados)(diasTrabajados, fechaInicio, fechaFin);
    return {
        vacaciones: Math.round((salarioBase * dias) / (constants_1.DIAS_ANO_COMERCIAL * 2)),
        diasTrabajados: dias,
        aplica: true,
    };
}
//# sourceMappingURL=vacaciones.js.map