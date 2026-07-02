"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularAuxilioTransporte = calcularAuxilioTransporte;
const constants_1 = require("../constants");
function calcularAuxilioTransporte(salarioBase, salarioMinimo = constants_1.SALARIO_MINIMO_2026) {
    const aplica = salarioBase <= salarioMinimo * constants_1.TOPE_AUXILIO_TRANSPORTE_SMLV;
    return {
        auxilioTransporte: aplica ? constants_1.AUXILIO_TRANSPORTE_2026 : 0,
        aplica,
        smlv: salarioMinimo,
    };
}
//# sourceMappingURL=auxilio-transporte.js.map