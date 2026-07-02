"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const auxilio_transporte_1 = require("../prestaciones/auxilio-transporte");
(0, node_test_1.describe)("calcularAuxilioTransporte", () => {
    (0, node_test_1.it)("aplica para salario <= 2 SMLV", () => {
        const result = (0, auxilio_transporte_1.calcularAuxilioTransporte)(1000000, 1000000);
        node_assert_1.default.strictEqual(result.aplica, true);
        node_assert_1.default.ok(result.auxilioTransporte > 0);
    });
    (0, node_test_1.it)("no aplica para salario > 2 SMLV", () => {
        const result = (0, auxilio_transporte_1.calcularAuxilioTransporte)(5000000, 1000000);
        node_assert_1.default.strictEqual(result.aplica, false);
        node_assert_1.default.strictEqual(result.auxilioTransporte, 0);
    });
});
//# sourceMappingURL=auxilio-transporte.test.js.map