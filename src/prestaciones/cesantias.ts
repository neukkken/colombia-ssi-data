import { DIAS_ANO_COMERCIAL, TASA_INTERES_CESANTIAS } from "../constants";
import { CesantiasParams, CesantiasResult, TipoCotizante } from "../types";
import { calcularDiasLaborados } from "../utils";

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

  const dias = calcularDiasLaborados(diasTrabajados, fechaInicio, fechaFin);

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
