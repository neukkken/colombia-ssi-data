import { SALARIO_MINIMO_2026, TASAS } from "./constants";
import { AportesParafiscales, TipoCotizante } from "./types";
import { calcularIBC } from "./utils";

export function calcularParafiscales(
  salarioBase: number,
  tipoCotizante: TipoCotizante,
  salarioMinimo: number = SALARIO_MINIMO_2026
): AportesParafiscales {
  const ibc = calcularIBC(salarioBase, salarioMinimo);

  if (tipoCotizante === TipoCotizante.INDEPENDIENTE) {
    return { sena: 0, icbf: 0, total: 0 };
  }

  const aplica = salarioBase <= salarioMinimo * TASAS.SENA.EXONERADO_SMLV;
  const sena = aplica ? Math.round(ibc * TASAS.SENA.TASA) : 0;
  const icbf = aplica ? Math.round(ibc * TASAS.ICBF.TASA) : 0;

  return {
    sena,
    icbf,
    total: sena + icbf,
  };
}
