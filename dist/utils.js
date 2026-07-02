"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularIBC = calcularIBC;
exports.calcularDiasLaborados = calcularDiasLaborados;
const constants_1 = require("./constants");
function calcularIBC(salarioBase, salarioMinimo = constants_1.SALARIO_MINIMO_2026) {
    const topeMaximo = salarioMinimo * constants_1.TOPE_MAXIMO_SMLV;
    return Math.min(salarioBase, topeMaximo);
}
function calcularDiasLaborados(diasTrabajados, fechaInicio, fechaFin, defaultDias = constants_1.DIAS_ANO_COMERCIAL) {
    if (diasTrabajados !== undefined)
        return diasTrabajados;
    if (fechaInicio && fechaFin) {
        const diffMs = fechaFin.getTime() - fechaInicio.getTime();
        return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }
    return defaultDias;
}
//# sourceMappingURL=utils.js.map