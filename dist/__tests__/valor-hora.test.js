"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const valor_hora_1 = require("../prestaciones/valor-hora");
(0, node_test_1.describe)("calcularValorHoraOrdinaria", () => {
    (0, node_test_1.it)("calcula valor hora con jornada 42h semanales, 6 días", () => {
        const result = (0, valor_hora_1.calcularValorHoraOrdinaria)(2100000);
        node_assert_1.default.strictEqual(result.horasSemanales, 42);
        node_assert_1.default.strictEqual(result.horasDiarias, 7);
        node_assert_1.default.strictEqual(result.valorHoraOrdinaria, 10000);
    });
    (0, node_test_1.it)("respeta parámetros personalizados", () => {
        const result = (0, valor_hora_1.calcularValorHoraOrdinaria)(2400000, 48, 6);
        node_assert_1.default.strictEqual(result.valorHoraOrdinaria, 10000);
    });
});
//# sourceMappingURL=valor-hora.test.js.map