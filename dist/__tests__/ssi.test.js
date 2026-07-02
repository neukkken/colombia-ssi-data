"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const ssi_1 = require("../ssi");
const types_1 = require("../types");
(0, node_test_1.describe)("SSI", () => {
    (0, node_test_1.it)("calcula completo para dependiente", () => {
        const ssi = new ssi_1.SSI();
        const result = ssi.calcularCompleto({
            salarioBase: 2500000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            nivelRiesgo: types_1.RiesgoARL.II,
        });
        node_assert_1.default.ok(result.salud.total > 0);
        node_assert_1.default.ok(result.pension.total > 0);
        node_assert_1.default.ok(result.arl.total > 0);
        node_assert_1.default.ok(result.granTotal > 0);
    });
    (0, node_test_1.it)("calcula completo para independiente", () => {
        const ssi = new ssi_1.SSI();
        const result = ssi.calcularCompleto({
            salarioBase: 3000000,
            tipoCotizante: types_1.TipoCotizante.INDEPENDIENTE,
            nivelRiesgo: types_1.RiesgoARL.I,
        });
        node_assert_1.default.strictEqual(result.salud.empleador, 0);
        node_assert_1.default.strictEqual(result.pension.empleador, 0);
        node_assert_1.default.ok(result.arl.total > 0);
    });
    (0, node_test_1.it)("usa salarioMinimo personalizado", () => {
        const ssi = ssi_1.SSI.conSalarioMinimo(2000000);
        const result = ssi.calcularCompleto({
            salarioBase: 10000000,
            tipoCotizante: types_1.TipoCotizante.DEPENDIENTE,
            nivelRiesgo: types_1.RiesgoARL.I,
        });
        node_assert_1.default.ok(result.granTotal > 0);
    });
});
//# sourceMappingURL=ssi.test.js.map