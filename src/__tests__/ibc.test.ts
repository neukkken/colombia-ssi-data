import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularIBC, calcularDiasLaborados } from "../utils";

describe("calcularIBC", () => {
  it("retorna salario cuando es menor al tope", () => {
    assert.strictEqual(calcularIBC(2_000_000), 2_000_000);
  });

  it("topea al máximo de 25 SMLV", () => {
    const smlv = 1_000_000;
    assert.strictEqual(calcularIBC(50_000_000, smlv), 25_000_000);
  });
});

describe("calcularDiasLaborados", () => {
  it("retorna diasTrabajados si se pasa", () => {
    assert.strictEqual(calcularDiasLaborados(180), 180);
  });

  it("calcula días entre dos fechas", () => {
    const result = calcularDiasLaborados(undefined, new Date(2025, 0, 1), new Date(2025, 0, 31));
    assert.strictEqual(result, 30);
  });

  it("retorna default cuando no se pasa nada", () => {
    assert.strictEqual(calcularDiasLaborados(), 360);
  });
});
