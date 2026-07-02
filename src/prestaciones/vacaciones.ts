import { DIAS_ANO_COMERCIAL } from "../constants";
import { PrestacionParams, VacacionesResult, TipoCotizante } from "../types";
import { calcularDiasLaborados } from "../utils";

export function calcularVacaciones(params: PrestacionParams): VacacionesResult {
  const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;

  if (tipoCotizante === TipoCotizante.INDEPENDIENTE) {
    return {
      vacaciones: 0,
      diasTrabajados: 0,
      aplica: false,
    };
  }

  const dias = calcularDiasLaborados(diasTrabajados, fechaInicio, fechaFin);

  return {
    vacaciones: Math.round((salarioBase * dias) / (DIAS_ANO_COMERCIAL * 2)),
    diasTrabajados: dias,
    aplica: true,
  };
}
