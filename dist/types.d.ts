export declare enum RiesgoARL {
    I = 1,
    II = 2,
    III = 3,
    IV = 4,
    V = 5
}
export declare enum TipoCotizante {
    DEPENDIENTE = "DEPENDIENTE",
    INDEPENDIENTE = "INDEPENDIENTE"
}
export declare enum TipoContrato {
    INDEFINIDO = "INDEFINIDO",
    FIJO = "FIJO"
}
export interface AportesSalud {
    total: number;
    empleado: number;
    empleador: number;
    porcentajeTotal: number;
    porcentajeEmpleado: number;
    porcentajeEmpleador: number;
}
export interface AportesPension {
    total: number;
    empleado: number;
    empleador: number;
    porcentajeTotal: number;
    porcentajeEmpleado: number;
    porcentajeEmpleador: number;
    fondoDeSolidaridad?: number;
}
export interface AportesARL {
    total: number;
    empleado: number;
    empleador: number;
    porcentaje: number;
    nivelRiesgo: RiesgoARL;
}
export interface AportesCCF {
    total: number;
    empleador: number;
    porcentaje: number;
    aplica: boolean;
}
export interface AportesParafiscales {
    sena: number;
    icbf: number;
    total: number;
}
export interface AportesCompletos {
    salud: AportesSalud;
    pension: AportesPension;
    arl: AportesARL;
    ccf: AportesCCF;
    parafiscales: AportesParafiscales;
    totalSeguridadSocial: number;
    totalParafiscales: number;
    granTotal: number;
}
export interface PrestacionParams {
    salarioBase: number;
    tipoCotizante: TipoCotizante;
    diasTrabajados?: number;
    fechaInicio?: Date;
    fechaFin?: Date;
    salarioMinimo?: number;
}
export interface CesantiasParams extends PrestacionParams {
}
export interface CesantiasResult {
    cesantias: number;
    interesesCesantias: number;
    total: number;
    diasTrabajados: number;
    aplica: boolean;
}
export interface PrimaResult {
    prima: number;
    diasTrabajados: number;
    aplica: boolean;
}
export interface VacacionesResult {
    vacaciones: number;
    diasTrabajados: number;
    aplica: boolean;
}
export interface PrestacionesCompletas {
    cesantias: CesantiasResult;
    prima: PrimaResult;
    vacaciones: VacacionesResult;
    totalPrestaciones: number;
    granTotal: number;
}
export interface AuxilioTransporteResult {
    auxilioTransporte: number;
    aplica: boolean;
    smlv: number;
}
export interface IndemnizacionParams {
    salarioBase: number;
    tipoContrato: TipoContrato;
    fechaInicio: Date;
    fechaFin: Date;
    salarioMinimo?: number;
}
export interface IndemnizacionResult {
    indemnizacion: number;
    tipoContrato: TipoContrato;
    salarioBase: number;
    aniosCompletos: number;
    mesesFraccion: number;
    diasSalario: number;
    aplica: boolean;
}
export interface ValorHoraResult {
    valorHoraOrdinaria: number;
    horasSemanales: number;
    horasDiarias: number;
}
export interface SalarioIntegralResult {
    esIntegral: boolean;
    salarioBase: number;
    factorPrestacional: number;
    salarioSinPrestaciones: number;
    smlv: number;
}
export interface LiquidacionNominaResult {
    salarioBase: number;
    auxilioTransporte: number;
    totalDevengado: number;
    deduccionSalud: number;
    deduccionPension: number;
    totalDeducciones: number;
    netoAPagar: number;
    salud: AportesSalud;
    pension: AportesPension;
    arl: AportesARL;
    ccf: AportesCCF;
    parafiscales: AportesParafiscales;
    provisionCesantias: number;
    provisionInteresesCesantias: number;
    provisionPrima: number;
    provisionVacaciones: number;
    totalSeguridadSocialEmpleador: number;
    totalParafiscales: number;
    totalProvisiones: number;
    costoTotalEmpleador: number;
}
export interface DatosLaborales {
    salarioBase: number;
    tipoCotizante: TipoCotizante;
    nivelRiesgo: RiesgoARL;
    salarioMinimo?: number;
}
//# sourceMappingURL=types.d.ts.map