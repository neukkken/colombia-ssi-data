"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const parafiscales_1 = require("../parafiscales");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularParafiscales", () => {
    (0, node_test_1.it)("calcula SENA + ICBF para dependiente", () => {
        const result = (0, parafiscales_1.calcularParafiscales)(2000000, types_1.TipoCotizante.DEPENDIENTE);
        node_assert_1.default.strictEqual(result.sena, 40000);
        node_assert_1.default.strictEqual(result.icbf, 60000);
        node_assert_1.default.strictEqual(result.total, 100000);
    });
    (0, node_test_1.it)("exonera para salario > 10 SMLV", () => {
        const smlv = 1000000;
        const result = (0, parafiscales_1.calcularParafiscales)(15000000, types_1.TipoCotizante.DEPENDIENTE, smlv);
        node_assert_1.default.strictEqual(result.sena, 0);
        node_assert_1.default.strictEqual(result.icbf, 0);
        node_assert_1.default.strictEqual(result.total, 0);
    });
    (0, node_test_1.it)("no aplica para independiente", () => {
        const result = (0, parafiscales_1.calcularParafiscales)(2000000, types_1.TipoCotizante.INDEPENDIENTE);
        node_assert_1.default.strictEqual(result.total, 0);
    });
});
//# sourceMappingURL=parafiscales.test.js.map