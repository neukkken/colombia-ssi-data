"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSI = void 0;
const constants_1 = require("./constants");
const eps_1 = require("./eps");
const pension_1 = require("./pension");
const arl_1 = require("./arl");
const ccf_1 = require("./ccf");
const parafiscales_1 = require("./parafiscales");
const types_1 = require("./types");
class SSI {
    constructor(salarioMinimo = constants_1.SALARIO_MINIMO_2025) {
        this.salarioMinimo = salarioMinimo;
    }
    static conSalarioMinimo(salarioMinimo) {
        return new SSI(salarioMinimo);
    }
    calcularCompleto(datos) {
        const { salarioBase, tipoCotizante, nivelRiesgo } = datos;
        const smlv = datos.salarioMinimo ?? this.salarioMinimo;
        const salud = (0, eps_1.calcularSalud)(salarioBase, tipoCotizante, smlv);
        const pension = (0, pension_1.calcularPension)(salarioBase, tipoCotizante, smlv);
        const arl = (0, arl_1.calcularARL)(salarioBase, nivelRiesgo, tipoCotizante, smlv);
        const ccf = (0, ccf_1.calcularCCF)(salarioBase, tipoCotizante, smlv);
        const parafiscales = (0, parafiscales_1.calcularParafiscales)(salarioBase, tipoCotizante, smlv);
        const totalSeguridadSocial = salud.total + pension.total + arl.total;
        const totalParafiscales = ccf.total + parafiscales.total;
        return {
            salud,
            pension,
            arl,
            ccf,
            parafiscales,
            totalSeguridadSocial,
            totalParafiscales,
            granTotal: totalSeguridadSocial + totalParafiscales,
        };
    }
}
exports.SSI = SSI;
SSI.Riesgo = types_1.RiesgoARL;
SSI.TipoCotizante = types_1.TipoCotizante;
//# sourceMappingURL=ssi.js.map