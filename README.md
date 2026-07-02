# Colombia SSI

Librería para el Sistema de Seguridad Social Integral y prestaciones sociales de Colombia. Calcula aportes a **EPS**, **Pensión**, **ARL**, **CCF**, **Parafiscales**, **Cesantías**, **Prima de servicios** y **Vacaciones**, e incluye el listado completo de entidades autorizadas.

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

console.log(result.granTotal); // $963,600 (salud + pensión + ARL + CCF + parafiscales)
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

## API

### SSI

Clase principal para cálculos de seguridad social.

```ts
const ssi = new SSI(salarioMinimo?: number); // default: $1.423.500 (2025)

ssi.calcularCompleto(datos: DatosLaborales): AportesCompletos
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

### Entidades

La librería incluye listados completos de todas las entidades autorizadas:

```ts
import { EPS_LIST, AFP_LIST, ARL_LIST, CCF_LIST, CESANTIAS_LIST } from "colombia-ssi";

// EPS: 18 entidades (NIT, web, ciudad)
// AFP: 5 fondos de pensiones (públicas y privadas)
// ARL: 10 administradoras de riesgos laborales
// CCF: 43 cajas de compensación familiar
// CESANTIAS_LIST: 5 fondos de cesantías (Porvenir, Protección, Colfondos, Skandia, FNA)
```

### Cálculos individuales

```ts
import { calcularSalud, calcularPension, calcularARL, calcularCCF, calcularParafiscales, calcularCesantias, calcularPrima, calcularVacaciones } from "colombia-ssi";
```

## Funciones incluidas

### Seguridad Social

| Función | Descripción |
|---------|-------------|
| `calcularSalud` | Aporte a EPS (12.5%: 4% empleado + 8.5% empleador) |
| `calcularPension` | Aporte pensional (16%: 4% empleado + 12% empleador) + Fondo de Solidaridad |
| `calcularARL` | ARL por nivel de riesgo I-V (0.522% - 6.96%) |
| `calcularCCF` | Caja de Compensación Familiar (4%) |
| `calcularParafiscales` | SENA (2%) + ICBF (3%) |
| `calcularIBC` | Ingreso Base de Cotización (tope 25 SMLV) |

### Prestaciones Sociales

| Función | Descripción |
|---------|-------------|
| `calcularCesantias` | Cesantías + intereses del 12% anual sobre cesantías |
| `calcularPrima` | Prima de servicios (30 días de salario por año) |
| `calcularVacaciones` | Vacaciones (15 días de salario por año) |
| `calcularPrestacionesCompletas` | Agregador que devuelve cesantías + prima + vacaciones |

## Datos de entidades

- **EPS_LIST** — 18 EPS con código, nombre, NIT, web y ciudad
- **AFP_LIST** — 5 AFP (Colpensiones, Porvenir, Protección, Colfondos, Skandia)
- **ARL_LIST** — 10 ARL con código, nombre, NIT y web
- **CCF_LIST** — 43 CCF con código, nombre, NIT, web y departamento
- **CESANTIAS_LIST** — 5 fondos de cesantías (Porvenir, Protección, Colfondos, Skandia, FNA)

## License

MIT
