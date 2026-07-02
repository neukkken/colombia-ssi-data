"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSalarioIntegral = calcularSalarioIntegral;
const constants_1 = require("../constants");
const FACTOR_PRESTACIONAL = 0.3;
function calcularSalarioIntegral(salarioBase, salarioMinimo = constants_1.SALARIO_MINIMO_2026) {
    const esIntegral = salarioBase >= salarioMinimo * 10;
    const factorPrestacional = esIntegral ? FACTOR_PRESTACIONAL : 0;
    const basePrestacional = esIntegral ? Math.round(salarioBase / (1 + FACTOR_PRESTACIONAL)) : salarioBase;
    return {
        esIntegral,
        salarioBase,
        factorPrestacional,
        salarioSinPrestaciones: basePrestacional,
        smlv: salarioMinimo,
    };
}
//# sourceMappingURL=salario-integral.js.map