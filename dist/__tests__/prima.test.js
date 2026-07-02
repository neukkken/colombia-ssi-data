"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const prima_1 = require("../prestaciones/prima");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularPrima", () => {
    (0, node_test_1.it)("calcula prima para dependiente con año completo (360 días)", () => {
        const result = (0, prima_1.calcularPrima)({
            salarioBase: 1423500,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            diasTrabajados: 360,
        });
        node_assert_1.default.strictEqual(result.prima, 1423500);
        node_assert_1.default.strictEqual(result.diasTrabajados, 360);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("calcula prima para dependiente con medio año (180 días)", () => {
        const result = (0, prima_1.calcularPrima)({
            salarioBase: 2000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            diasTrabajados: 180,
        });
        node_assert_1.default.strictEqual(result.prima, 1000000);
        node_assert_1.default.strictEqual(result.diasTrabajados, 180);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("calcula prima usando fechas", () => {
        const result = (0, prima_1.calcularPrima)({
            salarioBase: 1000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            fechaInicio: new Date(2025, 0, 1),
            fechaFin: new Date(2025, 0, 31),
        });
        node_assert_1.default.strictEqual(result.diasTrabajados, 30);
        node_assert_1.default.strictEqual(result.prima, 83333);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("retorna aplica=false para independiente", () => {
        const result = (0, prima_1.calcularPrima)({
            salarioBase: 2000000,
            tipoCotizante: types_1.TipoCotizante.INDEPENDIENTE,
            diasTrabajados: 360,
        });
        node_assert_1.default.strictEqual(result.aplica, false);
        node_assert_1.default.strictEqual(result.prima, 0);
        node_assert_1.default.strictEqual(result.diasTrabajados, 0);
    });
});
//# sourceMappingURL=prima.test.js.map