import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularValorHoraOrdinaria } from "../prestaciones/valor-hora";

describe("calcularValorHoraOrdinaria", () => {
  it("calcula valor hora con jornada 42h semanales, 6 días", () => {
    const result = calcularValorHoraOrdinaria(2_100_000);
    assert.strictEqual(result.horasSemanales, 42);
    assert.strictEqual(result.horasDiarias, 7);
    assert.strictEqual(result.valorHoraOrdinaria, 10_000);
  });

  it("respeta parámetros personalizados", () => {
    const result = calcularValorHoraOrdinaria(2_400_000, 48, 6);
    assert.strictEqual(result.valorHoraOrdinaria, 10_000);
  });
});
