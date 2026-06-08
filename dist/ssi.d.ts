import { AportesCompletos, DatosLaborales, RiesgoARL, TipoCotizante } from "./types";
export declare class SSI {
    private salarioMinimo;
    constructor(salarioMinimo?: number);
    static readonly Riesgo: typeof RiesgoARL;
    static readonly TipoCotizante: typeof TipoCotizante;
    static conSalarioMinimo(salarioMinimo: number): SSI;
    calcularCompleto(datos: DatosLaborales): AportesCompletos;
}
//# sourceMappingURL=ssi.d.ts.map