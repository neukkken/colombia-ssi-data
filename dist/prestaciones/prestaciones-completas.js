"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularPrestacionesCompletas = calcularPrestacionesCompletas;
const cesantias_1 = require("./cesantias");
const prima_1 = require("./prima");
const vacaciones_1 = require("./vacaciones");
function calcularPrestacionesCompletas(params) {
    const cesantias = (0, cesantias_1.calcularCesantias)(params);
    const prima = (0, prima_1.calcularPrima)(params);
    const vacaciones = (0, vacaciones_1.calcularVacaciones)(params);
    const totalPrestaciones = cesantias.total + prima.prima + vacaciones.vacaciones;
    return {
        cesantias,
        prima,
        vacaciones,
        totalPrestaciones,
        granTotal: totalPrestaciones,
    };
}
//# sourceMappingURL=prestaciones-completas.js.map