"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularIndemnizacion = calcularIndemnizacion;
const constants_1 = require("../constants");
const types_1 = require("../types");
const utils_1 = require("../utils");
function calcularIndemnizacion(params) {
    const { salarioBase, tipoContrato, fechaInicio, fechaFin, salarioMinimo } = params;
    const smlv = salarioMinimo ?? constants_1.SALARIO_MINIMO_2026;
    const dias = (0, utils_1.calcularDiasLaborados)(undefined, fechaInicio, fechaFin);
    const aniosCompletos = Math.floor(dias / 360);
    const mesesFraccion = Math.floor((dias % 360) / 30);
    const esSalarioBajo = salarioBase < smlv * 10;
    if (tipoContrato === types_1.TipoContrato.FIJO) {
        return {
            indemnizacion: 0,
            tipoContrato,
            salarioBase,
            aniosCompletos,
            mesesFraccion,
            diasSalario: 0,
            aplica: false,
        };
    }
    const diasPrimerAnio = esSalarioBajo ? 30 : 20;
    const diasAnioAdicional = esSalarioBajo ? 20 : 15;
    let totalDias = 0;
    if (aniosCompletos >= 1) {
        totalDias += diasPrimerAnio;
    }
    if (aniosCompletos > 1) {
        totalDias += (aniosCompletos - 1) * diasAnioAdicional;
        totalDias += (mesesFraccion / 12) * diasAnioAdicional;
    }
    const salarioDiario = salarioBase / 30;
    const indemnizacion = Math.round(totalDias * salarioDiario);
    return {
        indemnizacion,
        tipoContrato,
        salarioBase,
        aniosCompletos,
        mesesFraccion,
        diasSalario: totalDias,
        aplica: totalDias > 0,
    };
}
//# sourceMappingURL=indemnizacion.js.map