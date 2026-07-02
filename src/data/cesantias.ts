export interface CesantiasFondo {
  codigo: string;
  nombre: string;
  nit: string;
  website: string;
  tipo: "Pública" | "Privada";
}

export const CESANTIAS_LIST: CesantiasFondo[] = [
  {
    codigo: "PORVENIR",
    nombre: "Porvenir S.A.",
    nit: "800144088-1",
    website: "https://www.porvenir.com.co",
    tipo: "Privada",
  },
  {
    codigo: "PROTECCION",
    nombre: "Protección S.A.",
    nit: "890900349-1",
    website: "https://www.proteccion.com",
    tipo: "Privada",
  },
  {
    codigo: "COLFONDOS",
    nombre: "Colfondos S.A. Pensiones y Cesantías",
    nit: "800227854-3",
    website: "https://www.colfondos.com.co",
    tipo: "Privada",
  },
  {
    codigo: "SKANDIA",
    nombre: "Skandia AFP - ACCAI S.A.",
    nit: "860009578-1",
    website: "https://www.skandia.co",
    tipo: "Privada",
  },
  {
    codigo: "FNA",
    nombre: "Fondo Nacional del Ahorro - FNA",
    nit: "899999106-3",
    website: "https://www.fna.gov.co",
    tipo: "Pública",
  },
];
