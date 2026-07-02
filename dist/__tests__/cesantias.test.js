"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const cesantias_1 = require("../prestaciones/cesantias");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularCesantias", () => {
    (0, node_test_1.it)("calcula cesantías para dependiente con año completo (360 días)", () => {
        const result = (0, cesantias_1.calcularCesantias)({
            salarioBase: 1423500,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            diasTrabajados: 360,
        });
        node_assert_1.default.strictEqual(result.cesantias, 1423500);
        node_assert_1.default.strictEqual(result.interesesCesantias, 170820);
        node_assert_1.default.strictEqual(result.total, 1594320);
        node_assert_1.default.strictEqual(result.diasTrabajados, 360);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("calcula cesantías para dependiente con medio año (180 días)", () => {
        const result = (0, cesantias_1.calcularCesantias)({
            salarioBase: 2000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            diasTrabajados: 180,
        });
        node_assert_1.default.strictEqual(result.cesantias, 1000000);
        node_assert_1.default.strictEqual(result.interesesCesantias, 60000);
        node_assert_1.default.strictEqual(result.total, 1060000);
        node_assert_1.default.strictEqual(result.diasTrabajados, 180);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("calcula cesantías usando fechas en lugar de días", () => {
        const result = (0, cesantias_1.calcularCesantias)({
            salarioBase: 1000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            fechaInicio: new Date(2025, 0, 1),
            fechaFin: new Date(2025, 0, 31),
        });
        node_assert_1.default.strictEqual(result.diasTrabajados, 30);
        node_assert_1.default.strictEqual(result.cesantias, 83333);
        node_assert_1.default.strictEqual(result.interesesCesantias, 833);
        node_assert_1.default.strictEqual(result.total, 84166);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("retorna aplica=false para independiente", () => {
        const result = (0, cesantias_1.calcularCesantias)({
            salarioBase: 2000000,
            tipoCotizante: types_1.TipoCotizante.INDEPENDIENTE,
            diasTrabajados: 360,
        });
        node_assert_1.default.strictEqual(result.aplica, false);
        node_assert_1.default.strictEqual(result.cesantias, 0);
        node_assert_1.default.strictEqual(result.interesesCesantias, 0);
        node_assert_1.default.strictEqual(result.total, 0);
        node_assert_1.default.strictEqual(result.diasTrabajados, 0);
    });
    (0, node_test_1.it)("calcula cesantías para período corto (30 días)", () => {
        const result = (0, cesantias_1.calcularCesantias)({
            salarioBase: 1000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            diasTrabajados: 30,
        });
        node_assert_1.default.strictEqual(result.cesantias, 83333);
        node_assert_1.default.strictEqual(result.interesesCesantias, 833);
        node_assert_1.default.strictEqual(result.total, 84166);
        node_assert_1.default.strictEqual(result.diasTrabajados, 30);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
});
//# sourceMappingURL=cesantias.test.js.map