"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularParafiscales = calcularParafiscales;
const constants_1 = require("./constants");
const types_1 = require("./types");
const utils_1 = require("./utils");
function calcularParafiscales(salarioBase, tipoCotizante, salarioMinimo = constants_1.SALARIO_MINIMO_2026) {
    const ibc = (0, utils_1.calcularIBC)(salarioBase, salarioMinimo);
    if (tipoCotizante === types_1.TipoCotizante.INDEPENDIENTE) {
        return { sena: 0, icbf: 0, total: 0 };
    }
    const aplica = salarioBase <= salarioMinimo * constants_1.TASAS.SENA.EXONERADO_SMLV;
    const sena = aplica ? Math.round(ibc * constants_1.TASAS.SENA.TASA) : 0;
    const icbf = aplica ? Math.round(ibc * constants_1.TASAS.ICBF.TASA) : 0;
    return {
        sena,
        icbf,
        total: sena + icbf,
    };
}
//# sourceMappingURL=parafiscales.js.map