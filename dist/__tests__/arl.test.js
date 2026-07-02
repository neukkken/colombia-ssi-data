"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const arl_1 = require("../arl");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularARL", () => {
    (0, node_test_1.it)("calcula ARL para dependiente nivel I", () => {
        const result = (0, arl_1.calcularARL)(2000000, types_1.RiesgoARL.I, types_1.TipoCotizante.DEPENDIENTE);
        node_assert_1.default.strictEqual(result.total, Math.round(2000000 * 0.00522));
        node_assert_1.default.strictEqual(result.empleador, result.total);
        node_assert_1.default.strictEqual(result.empleado, 0);
    });
    (0, node_test_1.it)("calcula ARL para dependiente nivel V", () => {
        const result = (0, arl_1.calcularARL)(2000000, types_1.RiesgoARL.V, types_1.TipoCotizante.DEPENDIENTE);
        node_assert_1.default.strictEqual(result.total, Math.round(2000000 * 0.0696));
    });
    (0, node_test_1.it)("calcula ARL para independiente", () => {
        const result = (0, arl_1.calcularARL)(2000000, types_1.RiesgoARL.II, types_1.TipoCotizante.INDEPENDIENTE);
        node_assert_1.default.strictEqual(result.total, Math.round(2000000 * 0.01044));
        node_assert_1.default.strictEqual(result.empleado, result.total);
        node_assert_1.default.strictEqual(result.empleador, 0);
    });
});
//# sourceMappingURL=arl.test.js.map