import { SALARIO_MINIMO_2025, TASAS } from "./constants";
import { AportesPension, TipoCotizante } from "./types";
import { calcularIBC } from "./utils";

export function calcularPension(
  salarioBase: number,
  tipoCotizante: TipoCotizante,
  salarioMinimo: number = SALARIO_MINIMO_2025
): AportesPension {
  const ibc = calcularIBC(salarioBase, salarioMinimo);
  const esIndependiente = tipoCotizante === TipoCotizante.INDEPENDIENTE;

  const total = Math.round(ibc * TASAS.PENSION.TOTAL);
  const empleado = esIndependiente ? total : Math.round(ibc * TASAS.PENSION.EMPLEADO);
  const empleador = esIndependiente ? 0 : Math.round(ibc * TASAS.PENSION.EMPLEADOR);

  const smlv = salarioMinimo;
  let fondoDeSolidaridad: number | undefined;

  if (ibc > smlv * TASAS.PENSION.FONDO_SOLIDARIDAD.UMBRAL_SMLV) {
    fondoDeSolidaridad = Math.round(ibc * TASAS.PENSION.FONDO_SOLIDARIDAD.TASA);
  }

  return {
    total,
    empleado,
    empleador,
    porcentajeTotal: TASAS.PENSION.TOTAL,
    porcentajeEmpleado: esIndependiente ? TASAS.PENSION.TOTAL : TASAS.PENSION.EMPLEADO,
    porcentajeEmpleador: esIndependiente ? 0 : TASAS.PENSION.EMPLEADOR,
    fondoDeSolidaridad,
  };
}
