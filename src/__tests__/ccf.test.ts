import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularCCF } from "../ccf";
import { TipoCotizante } from "../types";

describe("calcularCCF", () => {
  it("calcula CCF para dependiente con salario <= 10 SMLV", () => {
    const result = calcularCCF(2_000_000, TipoCotizante.DEPENDIENTE);
    assert.ok(result.aplica);
    assert.strictEqual(result.total, Math.round(2_000_000 * 0.04));
    assert.strictEqual(result.empleador, result.total);
  });

  it("exonera CCF para salario > 10 SMLV", () => {
    const smlv = 1_000_000;
    const result = calcularCCF(15_000_000, TipoCotizante.DEPENDIENTE, smlv);
    assert.strictEqual(result.aplica, false);
    assert.strictEqual(result.total, 0);
  });

  it("no aplica CCF para independiente", () => {
    const result = calcularCCF(2_000_000, TipoCotizante.INDEPENDIENTE);
    assert.strictEqual(result.aplica, false);
    assert.strictEqual(result.total, 0);
  });
});
