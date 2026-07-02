import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularParafiscales } from "../parafiscales";
import { TipoCotizante } from "../types";

describe("calcularParafiscales", () => {
  it("calcula SENA + ICBF para dependiente", () => {
    const result = calcularParafiscales(2_000_000, TipoCotizante.DEPENDIENTE);
    assert.strictEqual(result.sena, 40_000);
    assert.strictEqual(result.icbf, 60_000);
    assert.strictEqual(result.total, 100_000);
  });

  it("exonera para salario > 10 SMLV", () => {
    const smlv = 1_000_000;
    const result = calcularParafiscales(15_000_000, TipoCotizante.DEPENDIENTE, smlv);
    assert.strictEqual(result.sena, 0);
    assert.strictEqual(result.icbf, 0);
    assert.strictEqual(result.total, 0);
  });

  it("no aplica para independiente", () => {
    const result = calcularParafiscales(2_000_000, TipoCotizante.INDEPENDIENTE);
    assert.strictEqual(result.total, 0);
  });
});
