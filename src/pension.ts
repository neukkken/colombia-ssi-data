import { SALARIO_MINIMO_2026, TASAS } from "./constants";
import { AportesPension, TipoCotizante } from "./types";
import { calcularIBC } from "./utils";

export function calcularPension(
  salarioBase: number,
  tipoCotizante: TipoCotizante,
  salarioMinimo: number = SALARIO_MINIMO_2026
): AportesPension {
  const ibc = calcularIBC(salarioBase, salarioMinimo);
  const esIndependiente = tipoCotizante === TipoCotizante.INDEPENDIENTE;

  const total = Math.round(ibc * TASAS.PENSION.TOTAL);
  const empleado = esIndependiente ? total : Math.round(ibc * TASAS.PENSION.EMPLEADO);
  const empleador = esIndependiente ? 0 : Math.round(ibc * TASAS.PENSION.EMPLEADOR);

  const smlv = salarioMinimo;
  let fondoDeSolidaridad: number | undefined;

  if (ibc > smlv * TASAS.PENSION.FONDO_SOLIDARIDAD.UMBRAL_SMLV) {
    const smlvs = ibc / smlv;
    let tasaSolidaridad: number = TASAS.PENSION.FONDO_SOLIDARIDAD.TASA_BASE;

    if (smlvs > 16) {
      if (smlvs <= 17) tasaSolidaridad = 0.012;
      else if (smlvs <= 18) tasaSolidaridad = 0.014;
      else if (smlvs <= 19) tasaSolidaridad = 0.016;
      else if (smlvs <= 20) tasaSolidaridad = 0.018;
      else tasaSolidaridad = 0.02;
    }

    fondoDeSolidaridad = Math.round(ibc * tasaSolidaridad);
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
