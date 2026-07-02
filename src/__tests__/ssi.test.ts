import { describe, it } from "node:test";
import assert from "node:assert";
import { SSI } from "../ssi";
import { RiesgoARL, TipoCotizante } from "../types";

describe("SSI", () => {
  it("calcula completo para dependiente", () => {
    const ssi = new SSI();
    const result = ssi.calcularCompleto({
      salarioBase: 2_500_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      nivelRiesgo: RiesgoARL.II,
    });
    assert.ok(result.salud.total > 0);
    assert.ok(result.pension.total > 0);
    assert.ok(result.arl.total > 0);
    assert.ok(result.granTotal > 0);
  });

  it("calcula completo para independiente", () => {
    const ssi = new SSI();
    const result = ssi.calcularCompleto({
      salarioBase: 3_000_000,
      tipoCotizante: TipoCotizante.INDEPENDIENTE,
      nivelRiesgo: RiesgoARL.I,
    });
    assert.strictEqual(result.salud.empleador, 0);
    assert.strictEqual(result.pension.empleador, 0);
    assert.ok(result.arl.total > 0);
  });

  it("usa salarioMinimo personalizado", () => {
    const ssi = SSI.conSalarioMinimo(2_000_000);
    const result = ssi.calcularCompleto({
      salarioBase: 10_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      nivelRiesgo: RiesgoARL.I,
    });
    assert.ok(result.granTotal > 0);
  });
});
