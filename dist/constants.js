"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TASAS = exports.TASA_INTERES_CESANTIAS = exports.DIAS_ANO_COMERCIAL = exports.TOPE_MAXIMO_SMLV = exports.AUXILIO_TRANSPORTE_2026 = exports.SALARIO_MINIMO_2026 = exports.AUXILIO_TRANSPORTE_2025 = exports.SALARIO_MINIMO_2025 = void 0;
exports.SALARIO_MINIMO_2025 = 1423500;
exports.AUXILIO_TRANSPORTE_2025 = 200000;
exports.SALARIO_MINIMO_2026 = 1750905;
exports.AUXILIO_TRANSPORTE_2026 = 249095;
exports.TOPE_MAXIMO_SMLV = 25;
exports.DIAS_ANO_COMERCIAL = 360;
exports.TASA_INTERES_CESANTIAS = 0.12;
exports.TASAS = {
    SALUD: {
        TOTAL: 0.125,
        EMPLEADO: 0.04,
        EMPLEADOR: 0.085,
    },
    PENSION: {
        TOTAL: 0.16,
        EMPLEADO: 0.04,
        EMPLEADOR: 0.12,
        FONDO_SOLIDARIDAD: {
            UMBRAL_SMLV: 4,
            TASA: 0.01,
        },
    },
    ARL: {
        [1]: 0.00522,
        [2]: 0.01044,
        [3]: 0.02436,
        [4]: 0.04350,
        [5]: 0.06960,
    },
    CCF: {
        TASA: 0.04,
        EXONERADO_SMLV: 10,
    },
    SENA: {
        TASA: 0.02,
        EXONERADO_SMLV: 10,
    },
    ICBF: {
        TASA: 0.03,
        EXONERADO_SMLV: 10,
    },
};
//# sourceMappingURL=constants.js.map