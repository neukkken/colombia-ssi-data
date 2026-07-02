"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const vacaciones_1 = require("../prestaciones/vacaciones");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularVacaciones", () => {
    (0, node_test_1.it)("calcula vacaciones para dependiente con año completo (360 días)", () => {
        const result = (0, vacaciones_1.calcularVacaciones)({
            salarioBase: 1423500,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            diasTrabajados: 360,
        });
        node_assert_1.default.strictEqual(result.vacaciones, 711750);
        node_assert_1.default.strictEqual(result.diasTrabajados, 360);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("calcula vacaciones para dependiente con medio año (180 días)", () => {
        const result = (0, vacaciones_1.calcularVacaciones)({
            salarioBase: 2000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            diasTrabajados: 180,
        });
        node_assert_1.default.strictEqual(result.vacaciones, 500000);
        node_assert_1.default.strictEqual(result.diasTrabajados, 180);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("calcula vacaciones usando fechas", () => {
        const result = (0, vacaciones_1.calcularVacaciones)({
            salarioBase: 1000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            fechaInicio: new Date(2025, 0, 1),
            fechaFin: new Date(2025, 0, 31),
        });
        node_assert_1.default.strictEqual(result.diasTrabajados, 30);
        node_assert_1.default.strictEqual(result.vacaciones, 41667);
        node_assert_1.default.strictEqual(result.aplica, true);
    });
    (0, node_test_1.it)("retorna aplica=false para independiente", () => {
        const result = (0, vacaciones_1.calcularVacaciones)({
            salarioBase: 2000000,
            tipoCotizante: types_1.TipoCotizante.INDEPENDIENTE,
            diasTrabajados: 360,
        });
        node_assert_1.default.strictEqual(result.aplica, false);
        node_assert_1.default.strictEqual(result.vacaciones, 0);
        node_assert_1.default.strictEqual(result.diasTrabajados, 0);
    });
});
//# sourceMappingURL=vacaciones.test.js.map