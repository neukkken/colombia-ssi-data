"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const utils_1 = require("../utils");
(0, node_test_1.describe)("calcularIBC", () => {
    (0, node_test_1.it)("retorna salario cuando es menor al tope", () => {
        node_assert_1.default.strictEqual((0, utils_1.calcularIBC)(2000000), 2000000);
    });
    (0, node_test_1.it)("topea al máximo de 25 SMLV", () => {
        const smlv = 1000000;
        node_assert_1.default.strictEqual((0, utils_1.calcularIBC)(50000000, smlv), 25000000);
    });
});
(0, node_test_1.describe)("calcularDiasLaborados", () => {
    (0, node_test_1.it)("retorna diasTrabajados si se pasa", () => {
        node_assert_1.default.strictEqual((0, utils_1.calcularDiasLaborados)(180), 180);
    });
    (0, node_test_1.it)("calcula días entre dos fechas", () => {
        const result = (0, utils_1.calcularDiasLaborados)(undefined, new Date(2025, 0, 1), new Date(2025, 0, 31));
        node_assert_1.default.strictEqual(result, 30);
    });
    (0, node_test_1.it)("retorna default cuando no se pasa nada", () => {
        node_assert_1.default.strictEqual((0, utils_1.calcularDiasLaborados)(), 360);
    });
});
//# sourceMappingURL=ibc.test.js.map