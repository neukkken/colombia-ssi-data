import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularSalud } from "../eps";
import { TipoCotizante } from "../types";

describe("calcularSalud", () => {
  it("calcula salud para dependiente", () => {
    const result = calcularSalud(2_000_000, TipoCotizante.DEPENDIENTE);
    assert.strictEqual(result.total, 250_000);
    assert.strictEqual(result.empleado, 80_000);
    assert.strictEqual(result.empleador, 170_000);
  });

  it("calcula salud para independiente", () => {
    const result = calcularSalud(2_000_000, TipoCotizante.INDEPENDIENTE);
    assert.strictEqual(result.total, 250_000);
    assert.strictEqual(result.empleado, 250_000);
    assert.strictEqual(result.empleador, 0);
  });

  it("respeta tope IBC de 25 SMLV", () => {
    const smlv = 1_000_000;
    const result = calcularSalud(50_000_000, TipoCotizante.DEPENDIENTE, smlv);
    const ibcMaximo = 25_000_000;
    assert.strictEqual(result.total, Math.round(ibcMaximo * 0.125));
  });
});
