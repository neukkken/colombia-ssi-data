"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSalud = calcularSalud;
const constants_1 = require("./constants");
const types_1 = require("./types");
const utils_1 = require("./utils");
function calcularSalud(salarioBase, tipoCotizante, salarioMinimo) {
    const ibc = (0, utils_1.calcularIBC)(salarioBase, salarioMinimo);
    const esIndependiente = tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE;
    const total = Math.round(ibc * constants_1.TASAS.SALUD.TOTAL);
    const empleado = esIndependiente ? total : Math.round(ibc * constants_1.TASAS.SALUD.EMPLEADO);
    const empleador = esIndependiente ? 0 : Math.round(ibc * constants_1.TASAS.SALUD.EMPLEADOR);
    return {
        total,
        empleado,
        empleador,
        porcentajeTotal: constants_1.TASAS.SALUD.TOTAL,
        porcentajeEmpleado: esIndependiente ? constants_1.TASAS.SALUD.TOTAL : constants_1.TASAS.SALUD.EMPLEADO,
        porcentajeEmpleador: esIndependiente ? 0 : constants_1.TASAS.SALUD.EMPLEADOR,
    };
}
//# sourceMappingURL=eps.js.map