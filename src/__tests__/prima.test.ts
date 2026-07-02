import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularPrima } from "../prestaciones/prima";
import { TipoCotizante } from "../types";

describe("calcularPrima", () => {
  it("calcula prima para dependiente con año completo (360 días)", () => {
    const result = calcularPrima({
      salarioBase: 1_423_500,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      diasTrabajados: 360,
    });
    assert.strictEqual(result.prima, 1_423_500);
    assert.strictEqual(result.diasTrabajados, 360);
    assert.strictEqual(result.aplica, true);
  });

  it("calcula prima para dependiente con medio año (180 días)", () => {
    const result = calcularPrima({
      salarioBase: 2_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      diasTrabajados: 180,
    });
    assert.strictEqual(result.prima, 1_000_000);
    assert.strictEqual(result.diasTrabajados, 180);
    assert.strictEqual(result.aplica, true);
  });

  it("calcula prima usando fechas", () => {
    const result = calcularPrima({
      salarioBase: 1_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      fechaInicio: new Date(2025, 0, 1),
      fechaFin: new Date(2025, 0, 31),
    });
    assert.strictEqual(result.diasTrabajados, 30);
    assert.strictEqual(result.prima, 83_333);
    assert.strictEqual(result.aplica, true);
  });

  it("retorna aplica=false para independiente", () => {
    const result = calcularPrima({
      salarioBase: 2_000_000,
      tipoCotizante: TipoCotizante.INDEPENDIENTE,
      diasTrabajados: 360,
    });
    assert.strictEqual(result.aplica, false);
    assert.strictEqual(result.prima, 0);
    assert.strictEqual(result.diasTrabajados, 0);
  });
});
