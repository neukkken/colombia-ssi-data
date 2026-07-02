"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const salario_integral_1 = require("../prestaciones/salario-integral");
(0, node_test_1.describe)("calcularSalarioIntegral", () => {
    (0, node_test_1.it)("identifica salario integral >= 10 SMLV", () => {
        const result = (0, salario_integral_1.calcularSalarioIntegral)(25000000, 1000000);
        node_assert_1.default.strictEqual(result.esIntegral, true);
        node_assert_1.default.strictEqual(result.factorPrestacional, 0.3);
    });
    (0, node_test_1.it)("identifica salario no integral < 10 SMLV", () => {
        const result = (0, salario_integral_1.calcularSalarioIntegral)(3000000, 1000000);
        node_assert_1.default.strictEqual(result.esIntegral, false);
        node_assert_1.default.strictEqual(result.factorPrestacional, 0);
    });
});
//# sourceMappingURL=salario-integral.test.js.map