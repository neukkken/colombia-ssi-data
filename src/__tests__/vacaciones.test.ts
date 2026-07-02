import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularVacaciones } from "../prestaciones/vacaciones";
import { TipoCotizante } from "../types";

describe("calcularVacaciones", () => {
  it("calcula vacaciones para dependiente con año completo (360 días)", () => {
    const result = calcularVacaciones({
      salarioBase: 1_423_500,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      diasTrabajados: 360,
    });
    assert.strictEqual(result.vacaciones, 711_750);
    assert.strictEqual(result.diasTrabajados, 360);
    assert.strictEqual(result.aplica, true);
  });

  it("calcula vacaciones para dependiente con medio año (180 días)", () => {
    const result = calcularVacaciones({
      salarioBase: 2_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      diasTrabajados: 180,
    });
    assert.strictEqual(result.vacaciones, 500_000);
    assert.strictEqual(result.diasTrabajados, 180);
    assert.strictEqual(result.aplica, true);
  });

  it("calcula vacaciones usando fechas", () => {
    const result = calcularVacaciones({
      salarioBase: 1_000_000,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      fechaInicio: new Date(2025, 0, 1),
      fechaFin: new Date(2025, 0, 31),
    });
    assert.strictEqual(result.diasTrabajados, 30);
    assert.strictEqual(result.vacaciones, 41_667);
    assert.strictEqual(result.aplica, true);
  });

  it("retorna aplica=false para independiente", () => {
    const result = calcularVacaciones({
      salarioBase: 2_000_000,
      tipoCotizante: TipoCotizante.INDEPENDIENTE,
      diasTrabajados: 360,
    });
    assert.strictEqual(result.aplica, false);
    assert.strictEqual(result.vacaciones, 0);
    assert.strictEqual(result.diasTrabajados, 0);
  });
});
