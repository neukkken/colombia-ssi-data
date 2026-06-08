export const SALARIO_MINIMO_2025 = 1_423_500;
export const AUXILIO_TRANSPORTE_2025 = 200_000;

export const TOPE_MAXIMO_SMLV = 25;

export const TASAS = {
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
} as const;
