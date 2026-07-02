import { SALARIO_MINIMO_2026 } from "../constants";
import { SalarioIntegralResult } from "../types";

const FACTOR_PRESTACIONAL = 0.3;

export function calcularSalarioIntegral(
  salarioBase: number,
  salarioMinimo: number = SALARIO_MINIMO_2026
): SalarioIntegralResult {
  const esIntegral = salarioBase >= salarioMinimo * 10;
  const factorPrestacional = esIntegral ? FACTOR_PRESTACIONAL : 0;
  const basePrestacional = esIntegral ? Math.round(salarioBase / (1 + FACTOR_PRESTACIONAL)) : salarioBase;

  return {
    esIntegral,
    salarioBase,
    factorPrestacional,
    salarioSinPrestaciones: basePrestacional,
    smlv: salarioMinimo,
  };
}
