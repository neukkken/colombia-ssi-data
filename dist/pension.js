"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularPension = calcularPension;
const constants_1 = require("./constants");
const types_1 = require("./types");
const utils_1 = require("./utils");
function calcularPension(salarioBase, tipoCotizante, salarioMinimo = constants_1.SALARIO_MINIMO_2026) {
    const ibc = (0, utils_1.calcularIBC)(salarioBase, salarioMinimo);
    const esIndependiente = tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE;
    const total = Math.round(ibc * constants_1.TASAS.PENSION.TOTAL);
    const empleado = esIndependiente ? total : Math.round(ibc * constants_1.TASAS.PENSION.EMPLEADO);
    const empleador = esIndependiente ? 0 : Math.round(ibc * constants_1.TASAS.PENSION.EMPLEADOR);
    const smlv = salarioMinimo;
    let fondoDeSolidaridad;
    if (ibc > smlv * constants_1.TASAS.PENSION.FONDO_SOLIDARIDAD.UMBRAL_SMLV) {
        const smlvs = ibc / smlv;
        let tasaSolidaridad = constants_1.TASAS.PENSION.FONDO_SOLIDARIDAD.TASA_BASE;
        if (smlvs > 16) {
            if (smlvs <= 17)
                tasaSolidaridad = 0.012;
            else if (smlvs <= 18)
                tasaSolidaridad = 0.014;
            else if (smlvs <= 19)
                tasaSolidaridad = 0.016;
            else if (smlvs <= 20)
                tasaSolidaridad = 0.018;
            else
                tasaSolidaridad = 0.02;
        }
        fondoDeSolidaridad = Math.round(ibc * tasaSolidaridad);
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