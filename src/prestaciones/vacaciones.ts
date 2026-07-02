import { DIAS_ANO_COMERCIAL } from "../constants";
import { PrestacionParams, VacacionesResult, TipoCotizante } from "../types";

export function calcularVacaciones(params: PrestacionParams): VacacionesResult {
  const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;

  if (tipoCotizante === TipoCotizante.INDEPENDIENTE) {
    return {
      vacaciones: 0,
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
    vacaciones: Math.round((salarioBase * dias) / (DIAS_ANO_COMERCIAL * 2)),
    diasTrabajados: dias,
    aplica: true,
  };
}
