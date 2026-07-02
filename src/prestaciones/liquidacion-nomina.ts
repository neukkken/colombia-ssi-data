import { DIAS_ANO_COMERCIAL, TASA_INTERES_CESANTIAS } from "../constants";
import { DatosLaborales, LiquidacionNominaResult } from "../types";
import { calcularSalud } from "../eps";
import { calcularPension } from "../pension";
import { calcularARL } from "../arl";
import { calcularCCF } from "../ccf";
import { calcularParafiscales } from "../parafiscales";
import { calcularAuxilioTransporte } from "./auxilio-transporte";

export function calcularLiquidacionNomina(datos: DatosLaborales): LiquidacionNominaResult {
  const { salarioBase, tipoCotizante, nivelRiesgo, salarioMinimo } = datos;

  const auxilio = calcularAuxilioTransporte(salarioBase, salarioMinimo);
  const totalDevengado = salarioBase + auxilio.auxilioTransporte;

  const salud = calcularSalud(salarioBase, tipoCotizante, salarioMinimo);
  const pension = calcularPension(salarioBase, tipoCotizante, salarioMinimo);
  const arl = calcularARL(salarioBase, nivelRiesgo, tipoCotizante, salarioMinimo);
  const ccf = calcularCCF(salarioBase, tipoCotizante, salarioMinimo);
  const parafiscales = calcularParafiscales(salarioBase, tipoCotizante, salarioMinimo);

  const deduccionSalud = salud.empleado;
  const deduccionPension = pension.empleado;
  const totalDeducciones = deduccionSalud + deduccionPension;
  const netoAPagar = totalDevengado - totalDeducciones;

  const provisionCesantias = Math.round(salarioBase / 12);
  const provisionInteresesCesantias = Math.round(provisionCesantias * TASA_INTERES_CESANTIAS);
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
