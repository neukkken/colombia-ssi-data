"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularIBC = calcularIBC;
const constants_1 = require("./constants");
function calcularIBC(salarioBase, salarioMinimo = constants_1.SALARIO_MINIMO_2025) {
    const topeMaximo = salarioMinimo * constants_1.TOPE_MAXIMO_SMLV;
    return Math.min(salarioBase, topeMaximo);
}
//# sourceMappingURL=utils.js.map