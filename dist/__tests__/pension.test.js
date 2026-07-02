"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const pension_1 = require("../pension");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularPension", () => {
    (0, node_test_1.it)("calcula pension para dependiente", () => {
        const result = (0, pension_1.calcularPension)(2000000, types_1.TipoCotizante.DEPENDIENTE);
        node_assert_1.default.strictEqual(result.total, 320000);
        node_assert_1.default.strictEqual(result.empleado, 80000);
        node_assert_1.default.strictEqual(result.empleador, 240000);
    });
    (0, node_test_1.it)("sin fondo de solidaridad para IBC <= 4 SMLV", () => {
        const result = (0, pension_1.calcularPension)(4000000, types_1.TipoCotizante.DEPENDIENTE, 1000000);
        node_assert_1.default.strictEqual(result.fondoDeSolidaridad, undefined);
    });
    (0, node_test_1.it)("fondo solidaridad 1% para IBC entre 4 y 16 SMLV", () => {
        const smlv = 1000000;
        const result = (0, pension_1.calcularPension)(10000000, types_1.TipoCotizante.DEPENDIENTE, smlv);
        node_assert_1.default.strictEqual(result.fondoDeSolidaridad, 100000);
    });
    (0, node_test_1.it)("fondo solidaridad 1.2% para IBC entre 16 y 17 SMLV", () => {
        const smlv = 1000000;
        const result = (0, pension_1.calcularPension)(16500000, types_1.TipoCotizante.DEPENDIENTE, smlv);
        node_assert_1.default.strictEqual(result.fondoDeSolidaridad, Math.round(16500000 * 0.012));
    });
    (0, node_test_1.it)("fondo solidaridad 2% para IBC > 20 SMLV", () => {
        const smlv = 1000000;
        const result = (0, pension_1.calcularPension)(25000000, types_1.TipoCotizante.DEPENDIENTE, smlv);
        node_assert_1.default.strictEqual(result.fondoDeSolidaridad, Math.round(25000000 * 0.02));
    });
    (0, node_test_1.it)("calcula pension para independiente", () => {
        const result = (0, pension_1.calcularPension)(2000000, types_1.TipoCotizante.INDEPENDIENTE);
        node_assert_1.default.strictEqual(result.total, 320000);
        node_assert_1.default.strictEqual(result.empleado, 320000);
        node_assert_1.default.strictEqual(result.empleador, 0);
    });
});
//# sourceMappingURL=pension.test.js.map