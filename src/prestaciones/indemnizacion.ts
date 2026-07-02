import { SALARIO_MINIMO_2026 } from "../constants";
import { IndemnizacionParams, IndemnizacionResult, TipoContrato } from "../types";
import { calcularDiasLaborados } from "../utils";

export function calcularIndemnizacion(params: IndemnizacionParams): IndemnizacionResult {
  const { salarioBase, tipoContrato, fechaInicio, fechaFin, salarioMinimo } = params;
  const smlv = salarioMinimo ?? SALARIO_MINIMO_2026;

  const dias = calcularDiasLaborados(undefined, fechaInicio, fechaFin);
  const aniosCompletos = Math.floor(dias / 360);
  const mesesFraccion = Math.floor((dias % 360) / 30);
  const esSalarioBajo = salarioBase < smlv * 10;

  if (tipoContrato === TipoContrato.FIJO) {
    return {
      indemnizacion: 0,
      tipoContrato,
      salarioBase,
      aniosCompletos,
      mesesFraccion,
      diasSalario: 0,
      aplica: false,
    };
  }

  const diasPrimerAnio = esSalarioBajo ? 30 : 20;
  const diasAnioAdicional = esSalarioBajo ? 20 : 15;

  let totalDias = 0;
  if (aniosCompletos >= 1) {
    totalDias += diasPrimerAnio;
  }
  if (aniosCompletos > 1) {
    totalDias += (aniosCompletos - 1) * diasAnioAdicional;
    totalDias += (mesesFraccion / 12) * diasAnioAdicional;
  }

  const salarioDiario = salarioBase / 30;
  const indemnizacion = Math.round(totalDias * salarioDiario);

  return {
    indemnizacion,
    tipoContrato,
    salarioBase,
    aniosCompletos,
    mesesFraccion,
    diasSalario: totalDias,
    aplica: totalDias > 0,
  };
}
