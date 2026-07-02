import { DIAS_ANO_COMERCIAL } from "../constants";
import { PrestacionParams, PrimaResult, TipoCotizante } from "../types";
import { calcularDiasLaborados } from "../utils";

export function calcularPrima(params: PrestacionParams): PrimaResult {
  const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;

  if (tipoCotizante === TipoCotizante.INDEPENDIENTE) {
    return {
      prima: 0,
      diasTrabajados: 0,
      aplica: false,
    };
  }

  const dias = calcularDiasLaborados(diasTrabajados, fechaInicio, fechaFin);

  return {
    prima: Math.round((salarioBase * dias) / DIAS_ANO_COMERCIAL),
    diasTrabajados: dias,
    aplica: true,
  };
}
