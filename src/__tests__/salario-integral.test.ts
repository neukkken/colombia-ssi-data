import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularSalarioIntegral } from "../prestaciones/salario-integral";

describe("calcularSalarioIntegral", () => {
  it("identifica salario integral >= 10 SMLV", () => {
    const result = calcularSalarioIntegral(25_000_000, 1_000_000);
    assert.strictEqual(result.esIntegral, true);
    assert.strictEqual(result.factorPrestacional, 0.3);
  });

  it("identifica salario no integral < 10 SMLV", () => {
    const result = calcularSalarioIntegral(3_000_000, 1_000_000);
    assert.strictEqual(result.esIntegral, false);
    assert.strictEqual(result.factorPrestacional, 0);
  });
});
