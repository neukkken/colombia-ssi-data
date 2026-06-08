import { SALARIO_MINIMO_2025, TASAS } from "./constants";
import { AportesCCF, TipoCotizante } from "./types";
import { calcularIBC } from "./utils";

export function calcularCCF(
  salarioBase: number,
  tipoCotizante: TipoCotizante,
  salarioMinimo: number = SALARIO_MINIMO_2025
): AportesCCF {
  const ibc = calcularIBC(salarioBase, salarioMinimo);

  if (tipoCotizante === TipoCotizante.INDEPENDIENTE) {
    return { total: 0, empleador: 0, porcentaje: TASAS.CCF.TASA, aplica: false };
  }

  const aplica = salarioBase <= salarioMinimo * TASAS.CCF.EXONERADO_SMLV;
  const total = aplica ? Math.round(ibc * TASAS.CCF.TASA) : 0;

  return {
    total,
    empleador: total,
    porcentaje: TASAS.CCF.TASA,
    aplica,
  };
}
