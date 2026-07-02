import { DIAS_SEMANA_LABORALES, HORAS_SEMANALES_MAXIMO } from "../constants";
import { ValorHoraResult } from "../types";

export function calcularValorHoraOrdinaria(
  salarioBase: number,
  horasSemanales: number = HORAS_SEMANALES_MAXIMO,
  diasSemana: number = DIAS_SEMANA_LABORALES
): ValorHoraResult {
  const horasDiarias = horasSemanales / diasSemana;
  const valor = Math.round(salarioBase / (30 * horasDiarias));

  return {
    valorHoraOrdinaria: valor,
    horasSemanales,
    horasDiarias,
  };
}
