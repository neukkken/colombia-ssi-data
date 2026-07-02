import { DIAS_ANO_COMERCIAL } from "../constants";
import { PrestacionParams, PrimaResult, TipoCotizante } from "../types";

export function calcularPrima(params: PrestacionParams): PrimaResult {
  const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;

  if (tipoCotizante === TipoCotizante.INDEPENDIENTE) {
    return {
      prima: 0,
      diasTrabajados: 0,
      aplica: false,
    };
  }

  let dias = diasTrabajados;
  if (dias === undefined && fechaInicio && fechaFin) {
    const diffMs = fechaFin.getTime() - fechaInicio.getTime();
    dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }
  dias = dias ?? DIAS_ANO_COMERCIAL;

  return {
    prima: Math.round((salarioBase * dias) / DIAS_ANO_COMERCIAL),
    diasTrabajados: dias,
    aplica: true,
  };
}
