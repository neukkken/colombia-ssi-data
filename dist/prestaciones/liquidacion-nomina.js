"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularLiquidacionNomina = calcularLiquidacionNomina;
const constants_1 = require("../constants");
const eps_1 = require("../eps");
const pension_1 = require("../pension");
const arl_1 = require("../arl");
const ccf_1 = require("../ccf");
const parafiscales_1 = require("../parafiscales");
const auxilio_transporte_1 = require("./auxilio-transporte");
function calcularLiquidacionNomina(datos) {
    const { salarioBase, tipoCotizante, nivelRiesgo, salarioMinimo } = datos;
    const auxilio = (0, auxilio_transporte_1.calcularAuxilioTransporte)(salarioBase, salarioMinimo);
    const totalDevengado = salarioBase + auxilio.auxilioTransporte;
    const salud = (0, eps_1.calcularSalud)(salarioBase, tipoCotizante, salarioMinimo);
    const pension = (0, pension_1.calcularPension)(salarioBase, tipoCotizante, salarioMinimo);
    const arl = (0, arl_1.calcularARL)(salarioBase, nivelRiesgo, tipoCotizante, salarioMinimo);
    const ccf = (0, ccf_1.calcularCCF)(salarioBase, tipoCotizante, salarioMinimo);
    const parafiscales = (0, parafiscales_1.calcularParafiscales)(salarioBase, tipoCotizante, salarioMinimo);
    const deduccionSalud = salud.empleado;
    const deduccionPension = pension.empleado;
    const totalDeducciones = deduccionSalud + deduccionPension;
    const netoAPagar = totalDevengado - totalDeducciones;
    const provisionCesantias = Math.round(salarioBase / 12);
    const provisionInteresesCesantias = Math.round(provisionCesantias * constants_1.TASA_INTERES_CESANTIAS);
    const provisionPrima = Math.round(salarioBase / 12);
    const provisionVacaciones = Math.round(salarioBase / 24);
    const totalSeguridadSocialEmpleador = salud.empleador + pension.empleador + arl.empleador;
    const totalParafiscalesValor = ccf.total + parafiscales.total;
    const totalProvisiones = provisionCesantias + provisionInteresesCesantias + provisionPrima + provisionVacaciones;
    const costoTotalEmpleador = salarioBase + totalSeguridadSocialEmpleador + totalParafiscalesValor + totalProvisiones;
    return {
        salarioBase,
        auxilioTransporte: auxilio.auxilioTransporte,
        totalDevengado,
        deduccionSalud,
        deduccionPension,
        totalDeducciones,
        netoAPagar,
        salud,
        pension,
        arl,
        ccf,
        parafiscales,
        provisionCesantias,
        provisionInteresesCesantias,
        provisionPrima,
        provisionVacaciones,
        totalSeguridadSocialEmpleador,
        totalParafiscales: totalParafiscalesValor,
        totalProvisiones,
        costoTotalEmpleador,
    };
}
//# sourceMappingURL=liquidacion-nomina.js.map