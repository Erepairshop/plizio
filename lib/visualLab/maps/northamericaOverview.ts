// Enriched North America overview: country names (4-lang) + capital coords + path.
// Built on top of the auto-generated northamerica.svg.ts (ISO + path), overlaying
// capital info + localized names.

import { northamericaMap, northamericaViewBox, projectCoordsNA } from "./northamerica.svg";

export interface NaCountry {
  id: string;
  names: { de: string; hu: string; ro: string; en: string };
  capital: { name: string; coords: [number, number] };
  path: string;
}

// slug (as generated) → { ISO, names, capital raw lon/lat }
const META: Record<string, Omit<NaCountry, "path"> & { _slug: string }> = {
  usa:              { _slug: "usa",              id: "US", names: { de: "USA",           hu: "USA",             ro: "SUA",                en: "USA" },                     capital: { name: "Washington, D.C.", coords: [0, 0] } },
  canada:           { _slug: "canada",           id: "CA", names: { de: "Kanada",        hu: "Kanada",          ro: "Canada",             en: "Canada" },                  capital: { name: "Ottawa",           coords: [0, 0] } },
  mexico:           { _slug: "mexico",           id: "MX", names: { de: "Mexiko",        hu: "Mexikó",          ro: "Mexic",              en: "Mexico" },                  capital: { name: "Mexikóváros",      coords: [0, 0] } },
  guatemala:        { _slug: "guatemala",        id: "GT", names: { de: "Guatemala",     hu: "Guatemala",       ro: "Guatemala",          en: "Guatemala" },               capital: { name: "Guatemala",        coords: [0, 0] } },
  honduras:         { _slug: "honduras",         id: "HN", names: { de: "Honduras",      hu: "Honduras",        ro: "Honduras",           en: "Honduras" },                capital: { name: "Tegucigalpa",      coords: [0, 0] } },
  nicaragua:        { _slug: "nicaragua",        id: "NI", names: { de: "Nicaragua",     hu: "Nicaragua",       ro: "Nicaragua",          en: "Nicaragua" },               capital: { name: "Managua",          coords: [0, 0] } },
  costarica:        { _slug: "costarica",        id: "CR", names: { de: "Costa Rica",    hu: "Costa Rica",      ro: "Costa Rica",         en: "Costa Rica" },              capital: { name: "San José",         coords: [0, 0] } },
  panama:           { _slug: "panama",           id: "PA", names: { de: "Panama",        hu: "Panama",          ro: "Panama",             en: "Panama" },                  capital: { name: "Panama City",      coords: [0, 0] } },
  cuba:             { _slug: "cuba",             id: "CU", names: { de: "Kuba",          hu: "Kuba",            ro: "Cuba",               en: "Cuba" },                    capital: { name: "Havanna",          coords: [0, 0] } },
  dominicanrepublic:{ _slug: "dominicanrepublic",id: "DO", names: { de: "Dom. Republik", hu: "Dominikai Közt.", ro: "Rep. Dominicană",    en: "Dominican Rep." },          capital: { name: "Santo Domingo",    coords: [0, 0] } },
  haiti:            { _slug: "haiti",            id: "HT", names: { de: "Haiti",         hu: "Haiti",           ro: "Haiti",              en: "Haiti" },                   capital: { name: "Port-au-Prince",   coords: [0, 0] } },
  jamaica:          { _slug: "jamaica",          id: "JM", names: { de: "Jamaika",       hu: "Jamaica",         ro: "Jamaica",            en: "Jamaica" },                 capital: { name: "Kingston",         coords: [0, 0] } },
  bahamas:          { _slug: "bahamas",          id: "BS", names: { de: "Bahamas",       hu: "Bahamák",         ro: "Bahamas",            en: "Bahamas" },                 capital: { name: "Nassau",           coords: [0, 0] } },
  trinidad:         { _slug: "trinidad",         id: "TT", names: { de: "Trinidad",      hu: "Trinidad",        ro: "Trinidad",           en: "Trinidad" },                capital: { name: "Port of Spain",    coords: [0, 0] } },
  belize:           { _slug: "belize",           id: "BZ", names: { de: "Belize",        hu: "Belize",          ro: "Belize",             en: "Belize" },                  capital: { name: "Belmopan",         coords: [0, 0] } },
  elsalvador:       { _slug: "elsalvador",       id: "SV", names: { de: "El Salvador",   hu: "Salvador",        ro: "El Salvador",        en: "El Salvador" },             capital: { name: "San Salvador",     coords: [0, 0] } },
};

// Raw WGS84 capital coords (lon, lat), projected at build-time via projectCoordsNA.
const RAW_CAPITALS: Record<string, [number, number]> = {
  usa:               [-77.0369, 38.9072],
  canada:            [-75.6972, 45.4215],
  mexico:            [-99.1332, 19.4326],
  guatemala:         [-90.5069, 14.6349],
  honduras:          [-87.2068, 14.0723],
  nicaragua:         [-86.2514, 12.1140],
  costarica:         [-84.0907, 9.9281],
  panama:            [-79.5167, 8.9833],
  cuba:              [-82.3666, 23.1136],
  dominicanrepublic: [-69.9312, 18.4861],
  haiti:             [-72.3364, 18.5944],
  jamaica:           [-76.7937, 17.9714],
  bahamas:           [-77.3963, 25.0343],
  trinidad:          [-61.5178, 10.6596],
  belize:            [-88.7685, 17.2510],
  elsalvador:        [-89.2182, 13.6929],
};

export const northAmericaOverviewViewBox = northamericaViewBox;

export const northAmericaOverview: NaCountry[] = northamericaMap.map((r: any) => {
  const slug = r.id; // slug like "usa", "canada" etc
  const m = META[slug] || META.usa;
  const raw = RAW_CAPITALS[slug];
  const [cx, cy] = raw ? projectCoordsNA(raw[0], raw[1]) : [0, 0];
  return {
    id: m.id,
    names: m.names,
    capital: { name: m.capital.name, coords: [cx, cy] as [number, number] },
    path: r.path,
  };
});
