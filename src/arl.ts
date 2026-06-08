import { TASAS } from "./constants";
import { AportesARL, RiesgoARL, TipoCotizante } from "./types";
import { calcularIBC } from "./utils";

export function calcularARL(
  salarioBase: number,
  nivelRiesgo: RiesgoARL,
  tipoCotizante: TipoCotizante,
  salarioMinimo?: number
): AportesARL {
  const ibc = calcularIBC(salarioBase, salarioMinimo);
  const esIndependiente = tipoCotizante === TipoCotizante.INDEPENDIENTE;

  const porcentaje: Record<number, number> = TASAS.ARL;
  const tasa = porcentaje[nivelRiesgo];

  const total = esIndependiente ? 0 : Math.round(ibc * tasa);

  return {
    total,
    empleador: total,
    porcentaje: tasa,
    nivelRiesgo,
  };
}
