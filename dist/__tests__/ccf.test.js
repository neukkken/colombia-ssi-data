"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const ccf_1 = require("../ccf");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularCCF", () => {
    (0, node_test_1.it)("calcula CCF para dependiente con salario <= 10 SMLV", () => {
        const result = (0, ccf_1.calcularCCF)(2000000, types_1.TipoCotizante.DEPENDIENTE);
        node_assert_1.default.ok(result.aplica);
        node_assert_1.default.strictEqual(result.total, Math.round(2000000 * 0.04));
        node_assert_1.default.strictEqual(result.empleador, result.total);
    });
    (0, node_test_1.it)("exonera CCF para salario > 10 SMLV", () => {
        const smlv = 1000000;
        const result = (0, ccf_1.calcularCCF)(15000000, types_1.TipoCotizante.DEPENDIENTE, smlv);
        node_assert_1.default.strictEqual(result.aplica, false);
        node_assert_1.default.strictEqual(result.total, 0);
    });
    (0, node_test_1.it)("no aplica CCF para independiente", () => {
        const result = (0, ccf_1.calcularCCF)(2000000, types_1.TipoCotizante.INDEPENDIENTE);
        node_assert_1.default.strictEqual(result.aplica, false);
        node_assert_1.default.strictEqual(result.total, 0);
    });
});
//# sourceMappingURL=ccf.test.js.map