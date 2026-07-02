# Colombia SSI

Librería para el Sistema de Seguridad Social Integral y prestaciones sociales de Colombia. Calcula aportes a **EPS**, **Pensión**, **ARL**, **CCF**, **Parafiscales**, **Cesantías**, **Prima de servicios**, **Vacaciones**, **Auxilio de Transporte**, **Indemnización**, **Salario Integral** y **Liquidación de Nómina**, e incluye el listado completo de entidades autorizadas.

## Instalación

```bash
npm install colombia-ssi
```

## Uso rápido

### Seguridad Social

```ts
import { SSI, RiesgoARL, TipoCotizante } from "colombia-ssi";

const ssi = new SSI();

const result = ssi.calcularCompleto({
  salarioBase: 2_500_000,
  tipoCotizante: TipoCotizante.DEPENDIENTE,
  nivelRiesgo: RiesgoARL.II,
});

console.log(result.granTotal); // salud + pensión + ARL + CCF + parafiscales
```

### Prestaciones Sociales

```ts
import { calcularPrestacionesCompletas, TipoCotizante } from "colombia-ssi";

const result = calcularPrestacionesCompletas({
  salarioBase: 2_500_000,
  tipoCotizante: TipoCotizante.DEPENDIENTE,
  diasTrabajados: 360,
});

console.log(result.granTotal); // cesantías + intereses + prima + vacaciones
```

### Liquidación de Nómina

```ts
import { calcularLiquidacionNomina, RiesgoARL, TipoCotizante } from "colombia-ssi";

const nomina = calcularLiquidacionNomina({
  salarioBase: 2_000_000,
  tipoCotizante: TipoCotizante.DEPENDIENTE,
  nivelRiesgo: RiesgoARL.I,
});

console.log(`Neto a pagar: $${nomina.netoAPagar}`);
console.log(`Costo total empleador: $${nomina.costoTotalEmpleador}`);
```

### Indemnización por Despido

```ts
import { calcularIndemnizacion, TipoContrato } from "colombia-ssi";

const ind = calcularIndemnizacion({
  salarioBase: 2_000_000,
  tipoContrato: TipoContrato.INDEFINIDO,
  fechaInicio: new Date("2020-01-01"),
  fechaFin: new Date("2025-06-30"),
});

console.log(`Indemnización: $${ind.indemnizacion}`);
```

## API

### SSI

Clase principal para cálculos de seguridad social.

```ts
const ssi = new SSI(salarioMinimo?: number); // default: $1.750.905 (2026)

ssi.calcularCompleto(datos: DatosLaborales): AportesCompletos
```

### Seguridad Social

```ts
calcularSalud(salarioBase, tipoCotizante, salarioMinimo?): AportesSalud
calcularPension(salarioBase, tipoCotizante, salarioMinimo?): AportesPension
calcularARL(salarioBase, nivelRiesgo, tipoCotizante, salarioMinimo?): AportesARL
calcularCCF(salarioBase, tipoCotizante, salarioMinimo?): AportesCCF
calcularParafiscales(salarioBase, tipoCotizante, salarioMinimo?): AportesParafiscales
calcularIBC(salarioBase, salarioMinimo?): number
```

### Prestaciones Sociales

```ts
calcularCesantias(params: PrestacionParams): CesantiasResult
calcularPrima(params: PrestacionParams): PrimaResult
calcularVacaciones(params: PrestacionParams): VacacionesResult
calcularPrestacionesCompletas(params: PrestacionParams): PrestacionesCompletas
```

Soporta dos modos de período:

```ts
// Con días trabajados directamente
calcularCesantias({ salarioBase, tipoCotizante, diasTrabajados: 180 });

// Con fechas (calcula los días automáticamente)
calcularCesantias({
  salarioBase: 2_000_000,
  tipoCotizante: TipoCotizante.DEPENDIENTE,
  fechaInicio: new Date("2025-01-01"),
  fechaFin: new Date("2025-06-30"),
});
```

| Función | Fórmula | Descripción |
|---------|---------|-------------|
| `calcularCesantias` | `(salario × días) / 360` | Cesantías + intereses del 12% anual |
| `calcularPrima` | `(salario × días) / 360` | Prima de servicios (30 días por año) |
| `calcularVacaciones` | `(salario × días) / 720` | Vacaciones (15 días por año) |

### Nuevas utilidades

```ts
calcularAuxilioTransporte(salarioBase, salarioMinimo?): AuxilioTransporteResult
calcularIndemnizacion(params: IndemnizacionParams): IndemnizacionResult
calcularValorHoraOrdinaria(salarioBase, horasSemanales?, diasSemana?): ValorHoraResult
calcularSalarioIntegral(salarioBase, salarioMinimo?): SalarioIntegralResult
calcularLiquidacionNomina(datos: DatosLaborales): LiquidacionNominaResult
calcularDiasLaborados(diasTrabajados?, fechaInicio?, fechaFin?): number
```

| Función | Descripción |
|---------|-------------|
| `calcularAuxilioTransporte` | Auxilio de transporte para salarios ≤ 2 SMLV (Ley 15/1959) |
| `calcularIndemnizacion` | Indemnización por despido sin justa causa (Art. 64 CST) |
| `calcularValorHoraOrdinaria` | Valor de hora ordinaria según jornada 42h (Ley 2101/2021) |
| `calcularSalarioIntegral` | Valida si el salario es integral (≥ 10 SMLV) y desglosa componente prestacional |
| `calcularLiquidacionNomina` | Liquidación completa de nómina mensual (devengado + SS + prestaciones) |

### Entidades

```ts
import { EPS_LIST, AFP_LIST, ARL_LIST, CCF_LIST, CESANTIAS_LIST } from "colombia-ssi";

// EPS: 18 entidades (NIT, web, ciudad)
// AFP: 5 fondos de pensiones (públicas y privadas)
// ARL: 10 administradoras de riesgos laborales
// CCF: 43 cajas de compensación familiar
// CESANTIAS_LIST: 5 fondos de cesantías (Porvenir, Protección, Colfondos, Skandia, FNA)
```

### Enums

```ts
enum RiesgoARL { I, II, III, IV, V }
enum TipoCotizante { DEPENDIENTE, INDEPENDIENTE }
enum TipoContrato { INDEFINIDO, FIJO }
```

## Funciones incluidas

### Seguridad Social

| Función | Descripción |
|---------|-------------|
| `calcularSalud` | Aporte a EPS (12.5%: 4% empleado + 8.5% empleador) |
| `calcularPension` | Aporte pensional (16%: 4% empleado + 12% empleador) + Fondo de Solidaridad progresivo (1% - 2%) |
| `calcularARL` | ARL por nivel de riesgo I-V (0.522% - 6.96%). **Independiente también aporta.** |
| `calcularCCF` | Caja de Compensación Familiar (4%), exonerado > 10 SMLV |
| `calcularParafiscales` | SENA (2%) + ICBF (3%), exonerado > 10 SMLV |
| `calcularIBC` | Ingreso Base de Cotización (tope 25 SMLV) |

### Prestaciones Sociales

| Función | Descripción |
|---------|-------------|
| `calcularCesantias` | Cesantías + intereses del 12% anual sobre cesantías |
| `calcularPrima` | Prima de servicios (30 días de salario por año) |
| `calcularVacaciones` | Vacaciones (15 días de salario por año) |
| `calcularPrestacionesCompletas` | Agregador: cesantías + prima + vacaciones |

### Nuevas utilidades

| Función | Descripción |
|---------|-------------|
| `calcularAuxilioTransporte` | Auxilio de transporte (Ley 15/1959) para salarios ≤ 2 SMLV |
| `calcularIndemnizacion` | Indemnización por despido sin justa causa (Art. 64 CST) |
| `calcularValorHoraOrdinaria` | Valor hora ordinaria (Ley 2101/2021, jornada 42h) |
| `calcularSalarioIntegral` | Validación de salario integral (≥ 10 SMLV) |
| `calcularLiquidacionNomina` | Costo total empleador + neto a pagar |
| `calcularDiasLaborados` | Helper: resuelve días entre fechas |

## Datos de entidades

- **EPS_LIST** — 18 EPS con código, nombre, NIT, web y ciudad
- **AFP_LIST** — 5 AFP (Colpensiones, Porvenir, Protección, Colfondos, Skandia)
- **ARL_LIST** — 10 ARL con código, nombre, NIT y web
- **CCF_LIST** — 43 CCF con código, nombre, NIT, web y departamento
- **CESANTIAS_LIST** — 5 fondos de cesantías (Porvenir, Protección, Colfondos, Skandia, FNA)

## Constants

| Constante | Valor 2026 |
|---|---|
| `SALARIO_MINIMO_2026` | $1.750.905 |
| `AUXILIO_TRANSPORTE_2026` | $249.095 |
| `TOPE_MAXIMO_SMLV` | 25 |
| `HORAS_SEMANALES_MAXIMO` | 42 |
| `DIAS_ANO_COMERCIAL` | 360 |
| `TASA_INTERES_CESANTIAS` | 0.12 |

También disponibles `SALARIO_MINIMO_2025` y `AUXILIO_TRANSPORTE_2025` para cálculos históricos.

## License

MIT
