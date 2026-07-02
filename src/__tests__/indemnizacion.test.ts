import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularIndemnizacion } from "../prestaciones/indemnizacion";
import { TipoContrato } from "../types";

describe("calcularIndemnizacion", () => {
  it("calcula indemnización para contrato indefinido <10 SMLV con 2 años", () => {
    const result = calcularIndemnizacion({
      salarioBase: 2_000_000,
      tipoContrato: TipoContrato.INDEFINIDO,
      fechaInicio: new Date(2023, 0, 1),
      fechaFin: new Date(2025, 0, 1),
    });
    assert.ok(result.indemnizacion > 0);
    assert.strictEqual(result.aniosCompletos, 2);
    assert.strictEqual(result.aplica, true);
  });

  it("no aplica para contrato fijo", () => {
    const result = calcularIndemnizacion({
      salarioBase: 2_000_000,
      tipoContrato: TipoContrato.FIJO,
      fechaInicio: new Date(2023, 0, 1),
      fechaFin: new Date(2025, 0, 1),
    });
    assert.strictEqual(result.aplica, false);
    assert.strictEqual(result.indemnizacion, 0);
  });
});
