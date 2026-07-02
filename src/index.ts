export { SSI } from "./ssi";
export { calcularSalud } from "./eps";
export { calcularPension } from "./pension";
export { calcularARL } from "./arl";
export { calcularCCF } from "./ccf";
export { calcularParafiscales } from "./parafiscales";
export { calcularIBC } from "./utils";
export {
  calcularCesantias,
  calcularPrima,
  calcularVacaciones,
  calcularPrestacionesCompletas,
  calcularAuxilioTransporte,
  calcularIndemnizacion,
  calcularValorHoraOrdinaria,
  calcularSalarioIntegral,
  calcularLiquidacionNomina,
} from "./prestaciones";

export {
  RiesgoARL,
  TipoCotizante,
  TipoContrato,
  AportesSalud,
  AportesPension,
  AportesARL,
  AportesCCF,
  AportesParafiscales,
  AportesCompletos,
  DatosLaborales,
  CesantiasParams,
  CesantiasResult,
  PrestacionParams,
  PrimaResult,
  VacacionesResult,
  PrestacionesCompletas,
  AuxilioTransporteResult,
  IndemnizacionParams,
  IndemnizacionResult,
  ValorHoraResult,
  SalarioIntegralResult,
  LiquidacionNominaResult,
} from "./types";

export {
  SALARIO_MINIMO_2025,
  AUXILIO_TRANSPORTE_2025,
  SALARIO_MINIMO_2026,
  AUXILIO_TRANSPORTE_2026,
  TASAS,
  DIAS_ANO_COMERCIAL,
  TASA_INTERES_CESANTIAS,
  TOPE_AUXILIO_TRANSPORTE_SMLV,
  HORAS_SEMANALES_MAXIMO,
  DIAS_SEMANA_LABORALES,
} from "./constants";

export { EPS_LIST } from "./data/eps";
export type { EPS } from "./data/eps";

export { AFP_LIST } from "./data/afp";
export type { AFP } from "./data/afp";

export { ARL_LIST } from "./data/arl";
export type { ARL } from "./data/arl";

export { CCF_LIST } from "./data/ccf";
export type { CCF } from "./data/ccf";

export { CESANTIAS_LIST } from "./data/cesantias";
export type { CesantiasFondo } from "./data/cesantias";
