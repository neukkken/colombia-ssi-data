import { describe, it } from "node:test";
import assert from "node:assert";
import { calcularPrestacionesCompletas } from "../prestaciones/prestaciones-completas";
import { TipoCotizante } from "../types";

describe("calcularPrestacionesCompletas", () => {
  it("agrega todas las prestaciones para dependiente con año completo", () => {
    const result = calcularPrestacionesCompletas({
      salarioBase: 1_423_500,
      tipoCotizante: TipoCotizante.DEPENDIENTE,
      diasTrabajados: 360,
    });
    assert.strictEqual(result.cesantias.cesantias, 1_423_500);
    assert.strictEqual(result.cesantias.interesesCesantias, 170_820);
    assert.strictEqual(result.prima.prima, 1_423_500);
    assert.strictEqual(result.vacaciones.vacaciones, 711_750);
    assert.strictEqual(result.totalPrestaciones, 3_729_570);
    assert.strictEqual(result.granTotal, 3_729_570);
  });

  it("retorna valores en cero para independiente", () => {
    const result = calcularPrestacionesCompletas({
      salarioBase: 2_000_000,
      tipoCotizante: TipoCotizante.INDEPENDIENTE,
      diasTrabajados: 360,
    });
    assert.strictEqual(result.cesantias.aplica, false);
    assert.strictEqual(result.prima.aplica, false);
    assert.strictEqual(result.vacaciones.aplica, false);
    assert.strictEqual(result.totalPrestaciones, 0);
    assert.strictEqual(result.granTotal, 0);
  });
});
