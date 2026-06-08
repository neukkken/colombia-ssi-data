"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularCCF = calcularCCF;
const constants_1 = require("./constants");
const types_1 = require("./types");
const utils_1 = require("./utils");
function calcularCCF(salarioBase, tipoCotizante, salarioMinimo = constants_1.SALARIO_MINIMO_2025) {
    const ibc = (0, utils_1.calcularIBC)(salarioBase, salarioMinimo);
    if (tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE) {
        return { total: 0, empleador: 0, porcentaje: constants_1.TASAS.CCF.TASA, aplica: false };
    }
    const aplica = salarioBase <= salarioMinimo * constants_1.TASAS.CCF.EXONERADO_SMLV;
    const total = aplica ? Math.round(ibc * constants_1.TASAS.CCF.TASA) : 0;
    return {
        total,
        empleador: total,
        porcentaje: constants_1.TASAS.CCF.TASA,
        aplica,
    };
}
//# sourceMappingURL=ccf.js.map