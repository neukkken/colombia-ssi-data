import { PrestacionParams, PrestacionesCompletas } from "../types";
import { calcularCesantias } from "./cesantias";
import { calcularPrima } from "./prima";
import { calcularVacaciones } from "./vacaciones";

export function calcularPrestacionesCompletas(params: PrestacionParams): PrestacionesCompletas {
  const cesantias = calcularCesantias(params);
  const prima = calcularPrima(params);
  const vacaciones = calcularVacaciones(params);

  const totalPrestaciones = cesantias.total + prima.prima + vacaciones.vacaciones;

  return {
    cesantias,
    prima,
    vacaciones,
    totalPrestaciones,
    granTotal: totalPrestaciones,
  };
}
