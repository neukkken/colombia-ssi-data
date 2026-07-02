import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularARL } from "../arl";
import { RiesgoARL, TipoCotizante } from "../types";

describe("calcularARL", () => {
  it("calcula ARL para dependiente nivel I", () => {
    const result = calcularARL(2_000_000, RiesgoARL.I, TipoCotizante.DEPENDIENTE);
    assert.strictEqual(result.total, Math.round(2_000_000 * 0.00522));
    assert.strictEqual(result.empleador, result.total);
    assert.strictEqual(result.empleado, 0);
  });

  it("calcula ARL para dependiente nivel V", () => {
    const result = calcularARL(2_000_000, RiesgoARL.V, TipoCotizante.DEPENDIENTE);
    assert.strictEqual(result.total, Math.round(2_000_000 * 0.0696));
  });

  it("calcula ARL para independiente", () => {
    const result = calcularARL(2_000_000, RiesgoARL.II, TipoCotizante.INDEPENDIENTE);
    assert.strictEqual(result.total, Math.round(2_000_000 * 0.01044));
    assert.strictEqual(result.empleado, result.total);
    assert.strictEqual(result.empleador, 0);
  });
});
