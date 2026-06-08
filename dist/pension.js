"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularPension = calcularPension;
const constants_1 = require("./constants");
const types_1 = require("./types");
const utils_1 = require("./utils");
function calcularPension(salarioBase, tipoCotizante, salarioMinimo = constants_1.SALARIO_MINIMO_2025) {
    const ibc = (0, utils_1.calcularIBC)(salarioBase, salarioMinimo);
    const esIndependiente = tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE;
    const total = Math.round(ibc * constants_1.TASAS.PENSION.TOTAL);
    const empleado = esIndependiente ? total : Math.round(ibc * constants_1.TASAS.PENSION.EMPLEADO);
    const empleador = esIndependiente ? 0 : Math.round(ibc * constants_1.TASAS.PENSION.EMPLEADOR);
    const smlv = salarioMinimo;
    let fondoDeSolidaridad;
    if (ibc > smlv * constants_1.TASAS.PENSION.FONDO_SOLIDARIDAD.UMBRAL_SMLV) {
        fondoDeSolidaridad = Math.round(ibc * constants_1.TASAS.PENSION.FONDO_SOLIDARIDAD.TASA);
    }
    return {
        total,
        empleado,
        empleador,
        porcentajeTotal: constants_1.TASAS.PENSION.TOTAL,
        porcentajeEmpleado: esIndependiente ? constants_1.TASAS.PENSION.TOTAL : constants_1.TASAS.PENSION.EMPLEADO,
        porcentajeEmpleador: esIndependiente ? 0 : constants_1.TASAS.PENSION.EMPLEADOR,
        fondoDeSolidaridad,
    };
}
//# sourceMappingURL=pension.js.map