import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularLiquidacionNomina } from "../prestaciones/liquidacion-nomina";
import { RiesgoARL, TipoCotizante } from "../types";

describe("calcularLiquidacionNomina", () => {
  it("calcula liquidación completa para dependiente", () => {
    const result = calcularLiquidacionNomina({
      salarioBase: 2_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      nivelRiesgo: RiesgoARL.I,
    });
    assert.ok(result.netoAPagar > 0);
    assert.ok(result.costoTotalEmpleador > result.salarioBase);
    assert.ok(result.totalSeguridadSocialEmpleador > 0);
    assert.ok(result.totalProvisiones > 0);
  });

  it("incluye provisiones mensuales correctas", () => {
    const result = calcularLiquidacionNomina({
      salarioBase: 1_200_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      nivelRiesgo: RiesgoARL.I,
    });
    assert.strictEqual(result.provisionCesantias, 100_000);
    assert.strictEqual(result.provisionPrima, 100_000);
    assert.strictEqual(result.provisionVacaciones, 50_000);
    assert.strictEqual(result.provisionInteresesCesantias, 12_000);
  });
});
