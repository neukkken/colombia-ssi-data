"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const liquidacion_nomina_1 = require("../prestaciones/liquidacion-nomina");
const types_1 = require("../types");
(0, node_test_1.describe)("calcularLiquidacionNomina", () => {
    (0, node_test_1.it)("calcula liquidación completa para dependiente", () => {
        const result = (0, liquidacion_nomina_1.calcularLiquidacionNomina)({
            salarioBase: 2000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            nivelRiesgo: types_1.RiesgoARL.I,
        });
        node_assert_1.default.ok(result.netoAPagar > 0);
        node_assert_1.default.ok(result.costoTotalEmpleador > result.salarioBase);
        node_assert_1.default.ok(result.totalSeguridadSocialEmpleador > 0);
        node_assert_1.default.ok(result.totalProvisiones > 0);
    });
    (0, node_test_1.it)("incluye provisiones mensuales correctas", () => {
        const result = (0, liquidacion_nomina_1.calcularLiquidacionNomina)({
            salarioBase: 1200000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            nivelRiesgo: types_1.RiesgoARL.I,
        });
        node_assert_1.default.strictEqual(result.provisionCesantias, 100000);
        node_assert_1.default.strictEqual(result.provisionPrima, 100000);
        node_assert_1.default.strictEqual(result.provisionVacaciones, 50000);
        node_assert_1.default.strictEqual(result.provisionInteresesCesantias, 12000);
    });
});
//# sourceMappingURL=liquidacion.test.js.map