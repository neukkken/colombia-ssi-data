import { TASAS } from "./constants";
import { AportesSalud, TipoCotizante } from "./types";
import { calcularIBC } from "./utils";

export function calcularSalud(
  salarioBase: number,
  tipoCotizante: TipoCotizante,
  salarioMinimo?: number
): AportesSalud {
  const ibc = calcularIBC(salarioBase, salarioMinimo);
  const esIndependiente = tipoCotizante === TipoCotizante.INDEPENDIENTE;

  const total = Math.round(ibc * TASAS.SALUD.TOTAL);
  const empleado = esIndependiente ? total : Math.round(ibc * TASAS.SALUD.EMPLEADO);
  const empleador = esIndependiente ? 0 : Math.round(ibc * TASAS.SALUD.EMPLEADOR);

  return {
    total,
    empleado,
    empleador,
    porcentajeTotal: TASAS.SALUD.TOTAL,
    porcentajeEmpleado: esIndependiente ? TASAS.SALUD.TOTAL : TASAS.SALUD.EMPLEADO,
    porcentajeEmpleador: esIndependiente ? 0 : TASAS.SALUD.EMPLEADOR,
  };
}
