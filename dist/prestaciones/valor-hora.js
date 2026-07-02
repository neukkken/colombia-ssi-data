"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularValorHoraOrdinaria = calcularValorHoraOrdinaria;
const constants_1 = require("../constants");
function calcularValorHoraOrdinaria(salarioBase, horasSemanales = constants_1.HORAS_SEMANALES_MAXIMO, diasSemana = constants_1.DIAS_SEMANA_LABORALES) {
    const horasDiarias = horasSemanales / diasSemana;
    const valor = Math.round(salarioBase / (30 * horasDiarias));
    return {
        valorHoraOrdinaria: valor,
        horasSemanales,
        horasDiarias,
    };
}
//# sourceMappingURL=valor-hora.js.map