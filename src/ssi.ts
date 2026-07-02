import { SALARIO_MINIMO_2026 } from "./constants";
import { calcularSalud } from "./eps";
import { calcularPension } from "./pension";
import { calcularARL } from "./arl";
import { calcularCCF } from "./ccf";
import { calcularParafiscales } from "./parafiscales";
import { AportesCompletos, DatosLaborales, RiesgoARL, TipoCotizante } from "./types";

export class SSI {
  private salarioMinimo: number;

  constructor(salarioMinimo: number = SALARIO_MINIMO_2026) {
    this.salarioMinimo = salarioMinimo;
  }

  static readonly Riesgo = RiesgoARL;
  static readonly TipoCotizante = TipoCotizante;

  static conSalarioMinimo(salarioMinimo: number): SSI {
    return new SSI(salarioMinimo);
  }

  calcularCompleto(datos: DatosLaborales): AportesCompletos {
    const { salarioBase, tipoCotizante, nivelRiesgo } = datos;
    const smlv = datos.salarioMinimo ?? this.salarioMinimo;

    const salud = calcularSalud(salarioBase, tipoCotizante, smlv);
    const pension = calcularPension(salarioBase, tipoCotizante, smlv);
    const arl = calcularARL(salarioBase, nivelRiesgo, tipoCotizante, smlv);
    const ccf = calcularCCF(salarioBase, tipoCotizante, smlv);
    const parafiscales = calcularParafiscales(salarioBase, tipoCotizante, smlv);

    const totalSeguridadSocial = salud.total + pension.total + arl.total;
    const totalParafiscales = ccf.total + parafiscales.total;

    return {
      salud,
      pension,
      arl,
      ccf,
      parafiscales,
      totalSeguridadSocial,
      totalParafiscales,
      granTotal: totalSeguridadSocial + totalParafiscales,
    };
  }
}
