import { SALARIO_MINIMO_2025, TOPE_MAXIMO_SMLV } from "./constants";

export function calcularIBC(salarioBase: number, salarioMinimo: number = SALARIO_MINIMO_2025): number {
  const topeMaximo = salarioMinimo * TOPE_MAXIMO_SMLV;
  return Math.min(salarioBase, topeMaximo);
}
