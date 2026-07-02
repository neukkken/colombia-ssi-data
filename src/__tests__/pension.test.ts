import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularPension } from "../pension";
import { TipoCotizante } from "../types";

describe("calcularPension", () => {
  it("calcula pension para dependiente", () => {
    const result = calcularPension(2_000_000, TipoCotizante.DEPENDIENTE);
    assert.strictEqual(result.total, 320_000);
    assert.strictEqual(result.empleado, 80_000);
    assert.strictEqual(result.empleador, 240_000);
  });

  it("sin fondo de solidaridad para IBC <= 4 SMLV", () => {
    const result = calcularPension(4_000_000, TipoCotizante.DEPENDIENTE, 1_000_000);
    assert.strictEqual(result.fondoDeSolidaridad, undefined);
  });

  it("fondo solidaridad 1% para IBC entre 4 y 16 SMLV", () => {
    const smlv = 1_000_000;
    const result = calcularPension(10_000_000, TipoCotizante.DEPENDIENTE, smlv);
    assert.strictEqual(result.fondoDeSolidaridad, 100_000);
  });

  it("fondo solidaridad 1.2% para IBC entre 16 y 17 SMLV", () => {
    const smlv = 1_000_000;
    const result = calcularPension(16_500_000, TipoCotizante.DEPENDIENTE, smlv);
    assert.strictEqual(result.fondoDeSolidaridad, Math.round(16_500_000 * 0.012));
  });

  it("fondo solidaridad 2% para IBC > 20 SMLV", () => {
    const smlv = 1_000_000;
    const result = calcularPension(25_000_000, TipoCotizante.DEPENDIENTE, smlv);
    assert.strictEqual(result.fondoDeSolidaridad, Math.round(25_000_000 * 0.02));
  });

  it("calcula pension para independiente", () => {
    const result = calcularPension(2_000_000, TipoCotizante.INDEPENDIENTE);
    assert.strictEqual(result.total, 320_000);
    assert.strictEqual(result.empleado, 320_000);
    assert.strictEqual(result.empleador, 0);
  });
});
