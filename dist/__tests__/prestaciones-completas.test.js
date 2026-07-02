"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const prestaciones_completas_1 = require("../prestaciones/prestaciones-completas");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularPrestacionesCompletas", () => {
    (0, node_test_1.it)("agrega todas las prestaciones para dependiente con año completo", () => {
        const result = (0, prestaciones_completas_1.calcularPrestacionesCompletas)({
            salarioBase: 1423500,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            diasTrabajados: 360,
        });
        node_assert_1.default.strictEqual(result.cesantias.cesantias, 1423500);
        node_assert_1.default.strictEqual(result.cesantias.interesesCesantias, 170820);
        node_assert_1.default.strictEqual(result.prima.prima, 1423500);
        node_assert_1.default.strictEqual(result.vacaciones.vacaciones, 711750);
        node_assert_1.default.strictEqual(result.totalPrestaciones, 3729570);
        node_assert_1.default.strictEqual(result.granTotal, 3729570);
    });
    (0, node_test_1.it)("retorna valores en cero para independiente", () => {
        const result = (0, prestaciones_completas_1.calcularPrestacionesCompletas)({
            salarioBase: 2000000,
            tipoCotizante: types_1.TipoCotizante.INDEPENDIENTE,
            diasTrabajados: 360,
        });
        node_assert_1.default.strictEqual(result.cesantias.aplica, false);
        node_assert_1.default.strictEqual(result.prima.aplica, false);
        node_assert_1.default.strictEqual(result.vacaciones.aplica, false);
        node_assert_1.default.strictEqual(result.totalPrestaciones, 0);
        node_assert_1.default.strictEqual(result.granTotal, 0);
    });
});
//# sourceMappingURL=prestaciones-completas.test.js.map