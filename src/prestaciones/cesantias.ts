import { DIAS_ANO_COMERCIAL, TASA_INTERES_CESANTIAS } from "../constants";
import { CesantiasParams, CesantiasResult, TipoCotizante } from "../types";

export function calcularCesantias(params: CesantiasParams): CesantiasResult {
  const { salarioBase, tipoCotizante, diasTrabajados, fechaInicio, fechaFin } = params;

  if (tipoCotizante === TipoCotizante.INDEPENDIENTE) {
    return {
      cesantias: 0,
      interesesCesantias: 0,
      total: 0,
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

  const cesantias = Math.round((salarioBase * dias) / DIAS_ANO_COMERCIAL);
  const interesesCesantias = Math.round((cesantias * TASA_INTERES_CESANTIAS * dias) / DIAS_ANO_COMERCIAL);

  return {
    cesantias,
    interesesCesantias,
    total: cesantias + interesesCesantias,
    diasTrabajados: dias,
    aplica: true,
  };
}
