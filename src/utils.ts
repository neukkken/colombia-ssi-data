import { DIAS_ANO_COMERCIAL, SALARIO_MINIMO_2026, TOPE_MAXIMO_SMLV } from "./constants";

export function calcularIBC(salarioBase: number, salarioMinimo: number = SALARIO_MINIMO_2026): number {
  const topeMaximo = salarioMinimo * TOPE_MAXIMO_SMLV;
  return Math.min(salarioBase, topeMaximo);
}

export function calcularDiasLaborados(
  diasTrabajados?: number,
  fechaInicio?: Date,
  fechaFin?: Date,
  defaultDias: number = DIAS_ANO_COMERCIAL
): number {
  if (diasTrabajados !== undefined) return diasTrabajados;
  if (fechaInicio && fechaFin) {
    const diffMs = fechaFin.getTime() - fechaInicio.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }
  return defaultDias;
}
