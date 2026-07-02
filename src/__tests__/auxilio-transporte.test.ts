import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularAuxilioTransporte } from "../prestaciones/auxilio-transporte";

describe("calcularAuxilioTransporte", () => {
  it("aplica para salario <= 2 SMLV", () => {
    const result = calcularAuxilioTransporte(1_000_000, 1_000_000);
    assert.strictEqual(result.aplica, true);
    assert.ok(result.auxilioTransporte > 0);
  });

  it("no aplica para salario > 2 SMLV", () => {
    const result = calcularAuxilioTransporte(5_000_000, 1_000_000);
    assert.strictEqual(result.aplica, false);
    assert.strictEqual(result.auxilioTransporte, 0);
  });
});
