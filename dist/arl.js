"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularARL = calcularARL;
const constants_1 = require("./constants");
const types_1 = require("./types");
const utils_1 = require("./utils");
function calcularARL(salarioBase, nivelRiesgo, tipoCotizante, salarioMinimo) {
    const ibc = (0, utils_1.calcularIBC)(salarioBase, salarioMinimo);
    const esIndependiente = tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE;
    const porcentaje = constants_1.TASAS.ARL;
    const tasa = porcentaje[nivelRiesgo];
    const total = Math.round(ibc * tasa);
    return {
        total,
        empleado: esIndependiente ? total : 0,
        empleador: esIndependiente ? 0 : total,
        porcentaje: tasa,
        nivelRiesgo,
    };
}
//# sourceMappingURL=arl.js.map