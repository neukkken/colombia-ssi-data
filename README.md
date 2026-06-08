# Colombia SSI

Librería para el Sistema de Seguridad Social Integral de Colombia. Calcula aportes a **EPS**, **Pensión**, **ARL**, **CCF** y **Parafiscales**, e incluye el listado completo de entidades autorizadas.

## Instalación

```bash
npm install colombia-ssi
```

## Uso rápido

```ts
import { SSI, RiesgoARL, TipoCotizante } from "colombia-ssi";

const ssi = new SSI();

const result = ssi.calcularCompleto({
  salarioBase: 2_500_000,
  tipoCotizante: TipoCotizante.DEPENDIENTE,
  nivelRiesgo: RiesgoARL.II,
});

console.log(result.granTotal); // $963,600
```

## API

### `SSI`

Clase principal para cálculos de seguridad social.

```ts
const ssi = new SSI(salarioMinimo?: number); // default: $1.423.500 (2025)

ssi.calcularCompleto(datos: DatosLaborales): AportesCompletos
```

### Entidades

La librería incluye listados completos de todas las entidades autorizadas:

```ts
import { EPS_LIST, AFP_LIST, ARL_LIST, CCF_LIST } from "colombia-ssi";

// EPS: 18 entidades (NIT, web, ciudad)
// AFP: 5 fondos de pensiones (públicas y privadas)
// ARL: 10 administradoras de riesgos laborales
// CCF: 43 cajas de compensación familiar
```

### Cálculos individuales

```ts
import { calcularSalud, calcularPension, calcularARL, calcularCCF, calcularParafiscales } from "colombia-ssi";
```

## Funciones incluidas

| Función | Descripción |
|---------|-------------|
| `calcularSalud` | Aporte a EPS (12.5%: 4% empleado + 8.5% empleador) |
| `calcularPension` | Aporte pensional (16%: 4% empleado + 12% empleador) + Fondo de Solidaridad |
| `calcularARL` | ARL por nivel de riesgo I-V (0.522% - 6.96%) |
| `calcularCCF` | Caja de Compensación Familiar (4%) |
| `calcularParafiscales` | SENA (2%) + ICBF (3%) |
| `calcularIBC` | Ingreso Base de Cotización (tope 25 SMLV) |

## Datos de entidades

- **EPS_LIST** — 18 EPS con código, nombre, NIT, web y ciudad
- **AFP_LIST** — 5 AFP (Colpensiones, Porvenir, Protección, Colfondos, Skandia)
- **ARL_LIST** — 10 ARL con código, nombre, NIT y web
- **CCF_LIST** — 43 CCF con código, nombre, NIT, web y departamento

## License

MIT
