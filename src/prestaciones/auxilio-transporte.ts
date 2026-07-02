import { AUXILIO_TRANSPORTE_2026, SALARIO_MINIMO_2026, TOPE_AUXILIO_TRANSPORTE_SMLV } from "../constants";
import { AuxilioTransporteResult } from "../types";

export function calcularAuxilioTransporte(
  salarioBase: number,
  salarioMinimo: number = SALARIO_MINIMO_2026
): AuxilioTransporteResult {
  const aplica = salarioBase <= salarioMinimo * TOPE_AUXILIO_TRANSPORTE_SMLV;

  return {
    auxilioTransporte: aplica ? AUXILIO_TRANSPORTE_2026 : 0,
    aplica,
    smlv: salarioMinimo,
  };
}
