// Capitals of South American countries (lat/lon) for rendering on SouthAmericaMap.
// Locale names: native + en/de/hu/ro fallback. Country id matches southamericaMap entries.

export interface SouthAmericaCapital {
  countryId: string;
  name: { de: string; hu: string; ro: string; en: string };
  lon: number;
  lat: number;
}

export const SOUTH_AMERICA_CAPITALS: SouthAmericaCapital[] = [
  { countryId: "argentina",    name: { de: "Buenos Aires", hu: "Buenos Aires", ro: "Buenos Aires", en: "Buenos Aires" }, lon: -58.3816, lat: -34.6037 },
  { countryId: "bolivia",      name: { de: "La Paz",       hu: "La Paz",       ro: "La Paz",       en: "La Paz" },       lon: -68.1193, lat: -16.4897 },
  { countryId: "brazil",       name: { de: "Brasília",     hu: "Brazíliaváros", ro: "Brasília",    en: "Brasília" },     lon: -47.9292, lat: -15.7801 },
  { countryId: "chile",        name: { de: "Santiago",     hu: "Santiago",     ro: "Santiago",     en: "Santiago" },     lon: -70.6483, lat: -33.4569 },
  { countryId: "colombia",     name: { de: "Bogotá",       hu: "Bogotá",       ro: "Bogotá",       en: "Bogotá" },       lon: -74.0721, lat: 4.7110 },
  { countryId: "ecuador",      name: { de: "Quito",        hu: "Quito",        ro: "Quito",        en: "Quito" },        lon: -78.4678, lat: -0.1807 },
  { countryId: "guyana",       name: { de: "Georgetown",   hu: "Georgetown",   ro: "Georgetown",   en: "Georgetown" },   lon: -58.1551, lat: 6.8013 },
  { countryId: "paraguay",     name: { de: "Asunción",     hu: "Asunción",     ro: "Asunción",     en: "Asunción" },     lon: -57.5759, lat: -25.2637 },
  { countryId: "peru",         name: { de: "Lima",         hu: "Lima",         ro: "Lima",         en: "Lima" },         lon: -77.0428, lat: -12.0464 },
  { countryId: "suriname",     name: { de: "Paramaribo",   hu: "Paramaribo",   ro: "Paramaribo",   en: "Paramaribo" },   lon: -55.2038, lat: 5.8520 },
  { countryId: "uruguay",      name: { de: "Montevideo",   hu: "Montevideo",   ro: "Montevideo",   en: "Montevideo" },   lon: -56.1645, lat: -34.9011 },
  { countryId: "venezuela",    name: { de: "Caracas",      hu: "Caracas",      ro: "Caracas",      en: "Caracas" },      lon: -66.9036, lat: 10.4806 },
  { countryId: "frenchguiana", name: { de: "Cayenne",      hu: "Cayenne",      ro: "Cayenne",      en: "Cayenne" },      lon: -52.3260, lat: 4.9224 },
];

export const SOUTH_AMERICA_CAPITALS_BY_ID: Record<string, SouthAmericaCapital> = Object.fromEntries(
  SOUTH_AMERICA_CAPITALS.map((c) => [c.countryId, c]),
);
