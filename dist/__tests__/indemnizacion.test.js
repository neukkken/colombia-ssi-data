"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const indemnizacion_1 = require("../prestaciones/indemnizacion");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularIndemnizacion", () => {
    (0, node_test_1.it)("calcula indemnización para contrato indefinido <10 SMLV con 2 años", () => {
        const result = (0, indemnizacion_1.calcularIndemnizacion)({
            salarioBase: 2000000,
            tipoContrato: types_1.TipoContrato.INDEFINIDO,
            fechaInicio: new Date(2023, 0, 1),
            fechaFin: new Date(2025, 0, 1),
        });
        node_assert_1.default.ok(result.indemnizacion > 0);
        node_assert_1.default.strictEqual(result.aniosCompletos, 2);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("no aplica para contrato fijo", () => {
        const result = (0, indemnizacion_1.calcularIndemnizacion)({
            salarioBase: 2000000,
            tipoContrato: types_1.TipoContrato.FIJO,
            fechaInicio: new Date(2023, 0, 1),
            fechaFin: new Date(2025, 0, 1),
        });
        node_assert_1.default.strictEqual(result.aplica, false);
        node_assert_1.default.strictEqual(result.indemnizacion, 0);
    });
});
//# sourceMappingURL=indemnizacion.test.js.map