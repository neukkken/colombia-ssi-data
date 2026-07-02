import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularCesantias } from "../prestaciones/cesantias";
import { TipoCotizante } from "../types";

describe("calcularCesantias", () => {
  it("calcula cesantías para dependiente con año completo (360 días)", () => {
    const result = calcularCesantias({
      salarioBase: 1_423_500,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      diasTrabajados: 360,
    });
    assert.strictEqual(result.cesantias, 1_423_500);
    assert.strictEqual(result.interesesCesantias, 170_820);
    assert.strictEqual(result.total, 1_594_320);
    assert.strictEqual(result.diasTrabajados, 360);
    assert.strictEqual(result.aplica, true);
  });

  it("calcula cesantías para dependiente con medio año (180 días)", () => {
    const result = calcularCesantias({
      salarioBase: 2_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      diasTrabajados: 180,
    });
    assert.strictEqual(result.cesantias, 1_000_000);
    assert.strictEqual(result.interesesCesantias, 60_000);
    assert.strictEqual(result.total, 1_060_000);
    assert.strictEqual(result.diasTrabajados, 180);
    assert.strictEqual(result.aplica, true);
  });

  it("calcula cesantías usando fechas en lugar de días", () => {
    const result = calcularCesantias({
      salarioBase: 1_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      fechaInicio: new Date(2025, 0, 1),
      fechaFin: new Date(2025, 0, 31),
    });
    assert.strictEqual(result.diasTrabajados, 30);
    assert.strictEqual(result.cesantias, 83_333);
    assert.strictEqual(result.interesesCesantias, 833);
    assert.strictEqual(result.total, 84_166);
    assert.strictEqual(result.aplica, true);
  });

  it("retorna aplica=false para independiente", () => {
    const result = calcularCesantias({
      salarioBase: 2_000_000,
      tipoCotizante: TipoCotizante.INDEPENDIENTE,
      diasTrabajados: 360,
    });
    assert.strictEqual(result.aplica, false);
    assert.strictEqual(result.cesantias, 0);
    assert.strictEqual(result.interesesCesantias, 0);
    assert.strictEqual(result.total, 0);
    assert.strictEqual(result.diasTrabajados, 0);
  });

  it("calcula cesantías para período corto (30 días)", () => {
    const result = calcularCesantias({
      salarioBase: 1_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      diasTrabajados: 30,
    });
    assert.strictEqual(result.cesantias, 83_333);
    assert.strictEqual(result.interesesCesantias, 833);
    assert.strictEqual(result.total, 84_166);
    assert.strictEqual(result.diasTrabajados, 30);
    assert.strictEqual(result.aplica, true);
  });
});
