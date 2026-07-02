"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const eps_1 = require("../eps");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularSalud", () => {
    (0, node_test_1.it)("calcula salud para dependiente", () => {
        const result = (0, eps_1.calcularSalud)(2000000, types_1.TipoCotizante.DEPENDIENTE);
        node_assert_1.default.strictEqual(result.total, 250000);
        node_assert_1.default.strictEqual(result.empleado, 80000);
        node_assert_1.default.strictEqual(result.empleador, 170000);
    });
    (0, node_test_1.it)("calcula salud para independiente", () => {
        const result = (0, eps_1.calcularSalud)(2000000, types_1.TipoCotizante.INDEPENDIENTE);
        node_assert_1.default.strictEqual(result.total, 250000);
        node_assert_1.default.strictEqual(result.empleado, 250000);
        node_assert_1.default.strictEqual(result.empleador, 0);
    });
    (0, node_test_1.it)("respeta tope IBC de 25 SMLV", () => {
        const smlv = 1000000;
        const result = (0, eps_1.calcularSalud)(50000000, types_1.TipoCotizante.DEPENDIENTE, smlv);
        const ibcMaximo = 25000000;
        node_assert_1.default.strictEqual(result.total, Math.round(ibcMaximo * 0.125));
    });
});
//# sourceMappingURL=eps.test.js.map