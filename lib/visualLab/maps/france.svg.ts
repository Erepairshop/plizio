export const franceViewBox = "0 0 1000 1000";

export const FRANCE_PROJECTION = {
  minLon: -5.5,
  maxLon: 10.0,
  minLat: 41.0,
  maxLat: 51.5,
  latStretch: 1,
  scale: 1,
  offX: 0,
  offY: 0,
};

export function projectCoordsFR(lon: number, lat: number): [number, number] {
  const p = FRANCE_PROJECTION;
  const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
  const y = ((p.maxLat - lat) / (p.maxLat - p.minLat)) * 1000;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

export interface RegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const franceMap: RegionPath[] = [
  {
    id: "FR-ARA",
    name: {"de": "Auvergne-Rhône-Alpes", "hu": "Auvergne-Rhône-Alpes", "ro": "Auvergne-Rhône-Alpes", "en": "Auvergne-Rhône-Alpes"},
    capital: "Lyon",
    labelX: 664.52, labelY: 552.38,
    path: "M583.87,457.14L745.16,457.14L745.16,647.62L583.87,647.62Z"
  },
  {
    id: "FR-BFC",
    name: {"de": "Bourgogne-Franche-Comté", "hu": "Bourgogne-Franche-Comté", "ro": "Bourgogne-Franche-Comté", "en": "Bourgogne-Franche-Comté"},
    capital: "Dijon",
    labelX: 677.42, labelY: 409.52,
    path: "M612.9,323.81L741.94,323.81L741.94,495.24L612.9,495.24Z"
  },
  {
    id: "FR-BRE",
    name: {"de": "Bretagne", "hu": "Bretagne", "ro": "Bretagne", "en": "Bretagne"},
    capital: "Rennes",
    labelX: 174.19, labelY: 314.29,
    path: "M93.55,266.67L254.84,266.67L254.84,361.9L93.55,361.9Z"
  },
  {
    id: "FR-CVL",
    name: {"de": "Centre-Val de Loire", "hu": "Centre-Val de Loire", "ro": "Centre-Val de Loire", "en": "Centre-Val de Loire"},
    capital: "Orléans",
    labelX: 464.52, labelY: 380.95,
    path: "M393.55,309.52L535.48,309.52L535.48,452.38L393.55,452.38Z"
  },
  {
    id: "FR-COR",
    name: {"de": "Corse", "hu": "Corse", "ro": "Corse", "en": "Corse"},
    capital: "Ajaccio",
    labelX: 935.48, labelY: 895.24,
    path: "M903.23,823.81L967.74,823.81L967.74,966.67L903.23,966.67Z"
  },
  {
    id: "FR-GES",
    name: {"de": "Grand Est", "hu": "Grand Est", "ro": "Grand Est", "en": "Grand Est"},
    capital: "Strasbourg",
    labelX: 748.39, labelY: 276.19,
    path: "M667.74,190.48L829.03,190.48L829.03,361.9L667.74,361.9Z"
  },
  {
    id: "FR-HDF",
    name: {"de": "Hauts-de-France", "hu": "Hauts-de-France", "ro": "Hauts-de-France", "en": "Hauts-de-France"},
    capital: "Lille",
    labelX: 535.48, labelY: 142.86,
    path: "M470.97,85.71L600,85.71L600,200L470.97,200Z"
  },
  {
    id: "FR-IDF",
    name: {"de": "Île-de-France", "hu": "Île-de-France", "ro": "Île-de-France", "en": "Île-de-France"},
    capital: "Paris",
    labelX: 503.23, labelY: 257.14,
    path: "M454.84,209.52L551.61,209.52L551.61,304.76L454.84,304.76Z"
  },
  {
    id: "FR-NOR",
    name: {"de": "Normandie", "hu": "Normandie", "ro": "Normandie", "en": "Normandie"},
    capital: "Rouen",
    labelX: 361.29, labelY: 228.57,
    path: "M280.65,171.43L441.94,171.43L441.94,285.71L280.65,285.71Z"
  },
  {
    id: "FR-NAQ",
    name: {"de": "Nouvelle-Aquitaine", "hu": "Nouvelle-Aquitaine", "ro": "Nouvelle-Aquitaine", "en": "Nouvelle-Aquitaine"},
    capital: "Bordeaux",
    labelX: 387.1, labelY: 600,
    path: "M306.45,480.95L467.74,480.95L467.74,719.05L306.45,719.05Z"
  },
  {
    id: "FR-OCC",
    name: {"de": "Occitanie", "hu": "Occitanie", "ro": "Occitanie", "en": "Occitanie"},
    capital: "Toulouse",
    labelX: 483.87, labelY: 752.38,
    path: "M387.1,657.14L580.65,657.14L580.65,847.62L387.1,847.62Z"
  },
  {
    id: "FR-PDL",
    name: {"de": "Pays de la Loire", "hu": "Pays de la Loire", "ro": "Pays de la Loire", "en": "Pays de la Loire"},
    capital: "Nantes",
    labelX: 322.58, labelY: 380.95,
    path: "M258.06,309.52L387.1,309.52L387.1,452.38L258.06,452.38Z"
  },
  {
    id: "FR-PAC",
    name: {"de": "Provence-Alpes-Côte d'Azur", "hu": "Provence-Alpes-Côte d'Azur", "ro": "Provence-Alpes-Côte d'Azur", "en": "Provence-Alpes-Côte d'Azur"},
    capital: "Marseille",
    labelX: 741.94, labelY: 723.81,
    path: "M677.42,652.38L806.45,652.38L806.45,795.24L677.42,795.24Z"
  },
];
