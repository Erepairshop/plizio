/**
 * generateAfricaMaps.ts
 * Afrikai orszag-terkep routek + POI aggregator fajlok + africaResolver.ts generatora.
 * Futtatás: npx tsx scripts/generateAfricaMaps.ts
 */

import * as fs from "fs";
import * as path from "path";

const REPO = path.resolve(__dirname, "..");

// ---- Afrikai orszagok listaja (slug = route ID + SVG alap neve) ----
// saotome: AfricaMap.tsx COUNTRY_BINDINGS-eben 'saotome' -> '/saotome-map' szerepel
const AFRICA_COUNTRIES: {
  id: string;         // route slug, SVG basename
  svgBase: string;    // SVG fajlnev alap (pl. "saotome" != "saotomeprincipe")
  poiPrefix: string;  // poiExtra{prefix}*V2.ts keresesi prefix (Pascal-case)
  countryCode: string; // projectCoords suffix (2-3 betu ISO-jellegű)
}[] = [
  { id: "algeria",               svgBase: "algeria",               poiPrefix: "Algeria",               countryCode: "DZ" },
  { id: "angola",                svgBase: "angola",                poiPrefix: "Angola",                countryCode: "AO" },
  { id: "benin",                 svgBase: "benin",                 poiPrefix: "Benin",                 countryCode: "BJ" },
  { id: "botswana",              svgBase: "botswana",              poiPrefix: "Botswana",              countryCode: "BW" },
  { id: "burkinafaso",           svgBase: "burkinafaso",           poiPrefix: "Burkinafaso",           countryCode: "BF" },
  { id: "burundi",               svgBase: "burundi",               poiPrefix: "Burundi",               countryCode: "BI" },
  { id: "cameroon",              svgBase: "cameroon",              poiPrefix: "Cameroon",              countryCode: "CM" },
  { id: "capeverde",             svgBase: "capeverde",             poiPrefix: "Capeverde",             countryCode: "CV" },
  { id: "centralafricanrepublic",svgBase: "centralafricanrepublic",poiPrefix: "Centralafricanrepublic",countryCode: "CF" },
  { id: "chad",                  svgBase: "chad",                  poiPrefix: "Chad",                  countryCode: "TD" },
  { id: "comoros",               svgBase: "comoros",               poiPrefix: "Comoros",               countryCode: "KM" },
  { id: "congo",                 svgBase: "congo",                 poiPrefix: "Congo",                 countryCode: "CG" },
  { id: "drcongo",               svgBase: "drcongo",               poiPrefix: "Drcongo",               countryCode: "CD" },
  { id: "djibouti",              svgBase: "djibouti",              poiPrefix: "Djibouti",              countryCode: "DJ" },
  { id: "egypt",                 svgBase: "egypt",                 poiPrefix: "Egypt",                 countryCode: "EG" },
  { id: "equatorialguinea",      svgBase: "equatorialguinea",      poiPrefix: "Equatorialguinea",      countryCode: "GQ" },
  { id: "eritrea",               svgBase: "eritrea",               poiPrefix: "Eritrea",               countryCode: "ER" },
  { id: "eswatini",              svgBase: "eswatini",              poiPrefix: "Eswatini",              countryCode: "SZ" },
  { id: "ethiopia",              svgBase: "ethiopia",              poiPrefix: "Ethiopia",              countryCode: "ET" },
  { id: "gabon",                 svgBase: "gabon",                 poiPrefix: "Gabon",                 countryCode: "GA" },
  { id: "gambia",                svgBase: "gambia",                poiPrefix: "Gambia",                countryCode: "GM" },
  { id: "ghana",                 svgBase: "ghana",                 poiPrefix: "Ghana",                 countryCode: "GH" },
  { id: "guinea",                svgBase: "guinea",                poiPrefix: "Guinea",                countryCode: "GN" },
  { id: "guineabissau",          svgBase: "guineabissau",          poiPrefix: "Guineabissau",          countryCode: "GW" },
  { id: "ivorycoast",            svgBase: "ivorycoast",            poiPrefix: "Ivorycoast",            countryCode: "CI" },
  { id: "kenya",                 svgBase: "kenya",                 poiPrefix: "Kenya",                 countryCode: "KE" },
  { id: "lesotho",               svgBase: "lesotho",               poiPrefix: "Lesotho",               countryCode: "LS" },
  { id: "liberia",               svgBase: "liberia",               poiPrefix: "Liberia",               countryCode: "LR" },
  { id: "libya",                 svgBase: "libya",                 poiPrefix: "Libya",                 countryCode: "LY" },
  { id: "madagascar",            svgBase: "madagascar",            poiPrefix: "Madagascar",            countryCode: "MG" },
  { id: "malawi",                svgBase: "malawi",                poiPrefix: "Malawi",                countryCode: "MW" },
  { id: "mali",                  svgBase: "mali",                  poiPrefix: "Mali",                  countryCode: "ML" },
  { id: "mauritania",            svgBase: "mauritania",            poiPrefix: "Mauritania",            countryCode: "MR" },
  { id: "mauritius",             svgBase: "mauritius",             poiPrefix: "Mauritius",             countryCode: "MU" },
  { id: "morocco",               svgBase: "morocco",               poiPrefix: "Morocco",               countryCode: "MA" },
  { id: "mozambique",            svgBase: "mozambique",            poiPrefix: "Mozambique",            countryCode: "MZ" },
  { id: "namibia",               svgBase: "namibia",               poiPrefix: "Namibia",               countryCode: "NA" },
  { id: "niger",                 svgBase: "niger",                 poiPrefix: "Niger",                 countryCode: "NE" },
  { id: "nigeria",               svgBase: "nigeria",               poiPrefix: "Nigeria",               countryCode: "NG" },
  { id: "rwanda",                svgBase: "rwanda",                poiPrefix: "Rwanda",                countryCode: "RW" },
  { id: "saotome",               svgBase: "saotome",               poiPrefix: "Saotomeprincipe",       countryCode: "ST" },
  { id: "senegal",               svgBase: "senegal",               poiPrefix: "Senegal",               countryCode: "SN" },
  { id: "seychelles",            svgBase: "seychelles",            poiPrefix: "Seychelles",            countryCode: "SC" },
  { id: "sierraleone",           svgBase: "sierraleone",           poiPrefix: "Sierraleone",           countryCode: "SL" },
  { id: "somalia",               svgBase: "somalia",               poiPrefix: "Somalia",               countryCode: "SO" },
  { id: "southafrica",           svgBase: "southafrica",           poiPrefix: "Southafrica",           countryCode: "ZA" },
  { id: "southsudan",            svgBase: "southsudan",            poiPrefix: "Southsudan",            countryCode: "SS" },
  { id: "sudan",                 svgBase: "sudan",                 poiPrefix: "Sudan",                 countryCode: "SD" },
  { id: "tanzania",              svgBase: "tanzania",              poiPrefix: "Tanzania",              countryCode: "TZ" },
  { id: "togo",                  svgBase: "togo",                  poiPrefix: "Togo",                  countryCode: "TG" },
  { id: "tunisia",               svgBase: "tunisia",               poiPrefix: "Tunisia",               countryCode: "TN" },
  { id: "uganda",                svgBase: "uganda",                poiPrefix: "Uganda",                countryCode: "UG" },
  { id: "zambia",                svgBase: "zambia",                poiPrefix: "Zambia",                countryCode: "ZM" },
  { id: "zimbabwe",              svgBase: "zimbabwe",              poiPrefix: "Zimbabwe",              countryCode: "ZW" },
];

// Nevek 4 nyelven (africaCapitals.ts COUNTRY_LABELS-ből + AfricaMap.tsx-ből)
const COUNTRY_NAMES: Record<string, { de: string; hu: string; ro: string; en: string }> = {
  algeria:               { de: "Algerien",              hu: "Algéria",                  ro: "Algeria",              en: "Algeria" },
  angola:                { de: "Angola",                 hu: "Angola",                   ro: "Angola",               en: "Angola" },
  benin:                 { de: "Benin",                  hu: "Benin",                    ro: "Benin",                en: "Benin" },
  botswana:              { de: "Botsuana",               hu: "Botswana",                 ro: "Botswana",             en: "Botswana" },
  burkinafaso:           { de: "Burkina Faso",           hu: "Burkina Faso",             ro: "Burkina Faso",         en: "Burkina Faso" },
  burundi:               { de: "Burundi",                hu: "Burundi",                  ro: "Burundi",              en: "Burundi" },
  cameroon:              { de: "Kamerun",                hu: "Kamerun",                  ro: "Camerun",              en: "Cameroon" },
  capeverde:             { de: "Kap Verde",              hu: "Zöld-foki Köztársaság",    ro: "Capul Verde",          en: "Cape Verde" },
  centralafricanrepublic:{ de: "Zentralafr. Rep.",       hu: "Közép-afrikai Közt.",       ro: "Rep. Centrafricană",   en: "Central African Rep." },
  chad:                  { de: "Tschad",                 hu: "Csád",                     ro: "Ciad",                 en: "Chad" },
  comoros:               { de: "Komoren",                hu: "Comore-szigetek",           ro: "Comore",               en: "Comoros" },
  congo:                 { de: "Kongo",                  hu: "Kongó",                    ro: "Congo",                en: "Congo" },
  drcongo:               { de: "DR Kongo",               hu: "Kongói Dem. Közt.",         ro: "RD Congo",             en: "DR Congo" },
  djibouti:              { de: "Dschibuti",              hu: "Dzsibuti",                 ro: "Djibouti",             en: "Djibouti" },
  egypt:                 { de: "Ägypten",                hu: "Egyiptom",                 ro: "Egipt",                en: "Egypt" },
  equatorialguinea:      { de: "Äquatorialguinea",       hu: "Egyenlítői-Guinea",         ro: "Guineea Ecuatorială",  en: "Equatorial Guinea" },
  eritrea:               { de: "Eritrea",                hu: "Eritrea",                  ro: "Eritreea",             en: "Eritrea" },
  eswatini:              { de: "Eswatini",               hu: "Eswatini",                 ro: "Eswatini",             en: "Eswatini" },
  ethiopia:              { de: "Äthiopien",              hu: "Etiópia",                  ro: "Etiopia",              en: "Ethiopia" },
  gabon:                 { de: "Gabun",                  hu: "Gabon",                    ro: "Gabon",                en: "Gabon" },
  gambia:                { de: "Gambia",                 hu: "Gambia",                   ro: "Gambia",               en: "Gambia" },
  ghana:                 { de: "Ghana",                  hu: "Ghána",                    ro: "Ghana",                en: "Ghana" },
  guinea:                { de: "Guinea",                 hu: "Guinea",                   ro: "Guineea",              en: "Guinea" },
  guineabissau:          { de: "Guinea-Bissau",          hu: "Bissau-Guinea",             ro: "Guineea-Bissau",       en: "Guinea-Bissau" },
  ivorycoast:            { de: "Elfenbeinküste",         hu: "Elefántcsontpart",          ro: "Coasta de Fildeș",     en: "Ivory Coast" },
  kenya:                 { de: "Kenia",                  hu: "Kenya",                    ro: "Kenya",                en: "Kenya" },
  lesotho:               { de: "Lesotho",                hu: "Lesotho",                  ro: "Lesotho",              en: "Lesotho" },
  liberia:               { de: "Liberia",                hu: "Libéria",                  ro: "Liberia",              en: "Liberia" },
  libya:                 { de: "Libyen",                 hu: "Líbia",                    ro: "Libia",                en: "Libya" },
  madagascar:            { de: "Madagaskar",             hu: "Madagaszkár",               ro: "Madagascar",           en: "Madagascar" },
  malawi:                { de: "Malawi",                 hu: "Malawi",                   ro: "Malawi",               en: "Malawi" },
  mali:                  { de: "Mali",                   hu: "Mali",                     ro: "Mali",                 en: "Mali" },
  mauritania:            { de: "Mauretanien",            hu: "Mauritánia",               ro: "Mauritania",           en: "Mauritania" },
  mauritius:             { de: "Mauritius",              hu: "Mauritius",                ro: "Mauritius",            en: "Mauritius" },
  morocco:               { de: "Marokko",                hu: "Marokkó",                  ro: "Maroc",                en: "Morocco" },
  mozambique:            { de: "Mosambik",               hu: "Mozambik",                 ro: "Mozambic",             en: "Mozambique" },
  namibia:               { de: "Namibia",                hu: "Namíbia",                  ro: "Namibia",              en: "Namibia" },
  niger:                 { de: "Niger",                  hu: "Niger",                    ro: "Niger",                en: "Niger" },
  nigeria:               { de: "Nigeria",                hu: "Nigéria",                  ro: "Nigeria",              en: "Nigeria" },
  rwanda:                { de: "Ruanda",                 hu: "Ruanda",                   ro: "Rwanda",               en: "Rwanda" },
  saotome:               { de: "São Tomé und Príncipe",  hu: "São Tomé és Príncipe",      ro: "São Tomé și Príncipe", en: "São Tomé and Príncipe" },
  senegal:               { de: "Senegal",                hu: "Szenegál",                 ro: "Senegal",              en: "Senegal" },
  seychelles:            { de: "Seychellen",             hu: "Seychelle-szigetek",        ro: "Seychelles",           en: "Seychelles" },
  sierraleone:           { de: "Sierra Leone",           hu: "Sierra Leone",             ro: "Sierra Leone",         en: "Sierra Leone" },
  somalia:               { de: "Somalia",                hu: "Szomália",                 ro: "Somalia",              en: "Somalia" },
  southafrica:           { de: "Südafrika",              hu: "Dél-Afrika",               ro: "Africa de Sud",        en: "South Africa" },
  southsudan:            { de: "Südsudan",               hu: "Dél-Szudán",               ro: "Sudanul de Sud",        en: "South Sudan" },
  sudan:                 { de: "Sudan",                  hu: "Szudán",                   ro: "Sudan",                en: "Sudan" },
  tanzania:              { de: "Tansania",               hu: "Tanzánia",                 ro: "Tanzania",             en: "Tanzania" },
  togo:                  { de: "Togo",                   hu: "Togo",                     ro: "Togo",                 en: "Togo" },
  tunisia:               { de: "Tunesien",               hu: "Tunézia",                  ro: "Tunisia",              en: "Tunisia" },
  uganda:                { de: "Uganda",                 hu: "Uganda",                   ro: "Uganda",               en: "Uganda" },
  zambia:                { de: "Sambia",                 hu: "Zambia",                   ro: "Zambia",               en: "Zambia" },
  zimbabwe:              { de: "Simbabwe",               hu: "Zimbabwe",                 ro: "Zimbabwe",             en: "Zimbabwe" },
};

// ---- POI fajl keres: megkeresi az osszes letező V2 fajlt az adott prefix-re ----
function findPoiV2Files(poiPrefix: string): string[] {
  const dataDir = path.join(REPO, "lib/visualLab/data");
  const topics = ["Cities", "Economic", "History", "Landmarks", "Life", "Nature", "Relief"];
  const found: string[] = [];
  for (const topic of topics) {
    const fname = `poiExtra${poiPrefix}${topic}V2.ts`;
    if (fs.existsSync(path.join(dataDir, fname))) {
      found.push(fname);
    }
  }
  return found;
}

// ---- AllPoi aggregator fajl generatora ----
function generateAllPoiFile(country: typeof AFRICA_COUNTRIES[0], poiFiles: string[]): string {
  const { id } = country;
  const varName = `${id}AllPoi`;

  if (poiFiles.length === 0) {
    return `// AUTO-GENERATED — ${id} POI aggregator (nincsenek V2 fajlok)
import type { POI } from "./poi";

export const ${varName}: POI[] = [];
`;
  }

  const imports = poiFiles.map((fname) => {
    const base = fname.replace(/\.ts$/, "");
    // export neve: poiExtraAlgeriaCitiesV2 -> ebbol kell a camelCase
    const exportName = base.replace(/^poiExtra/, "poiExtra");
    // az export neve egyezik a fajlnev alap-jával (camelCase, .ts nelkul)
    return `import { ${exportName} } from "./${base}";`;
  }).join("\n");

  const spreads = poiFiles.map((fname) => {
    const base = fname.replace(/\.ts$/, "");
    return `  ...${base.replace(/^poiExtra/, "poiExtra")},`;
  }).join("\n");

  return `// AUTO-GENERATED — ${id} osszes POI (V2 batch fajlokbol)
// Ne szerkeszd kezzel! Futtatsd ujra: npx tsx scripts/generateAfricaMaps.ts
import type { POI } from "./poi";
${imports}

export const ${varName}: POI[] = [
${spreads}
];
`;
}

// ---- Page.tsx generatora (country-map route) ----
function generatePageTsx(country: typeof AFRICA_COUNTRIES[0]): string {
  const { id } = country;
  const names = COUNTRY_NAMES[id] ?? { de: id, hu: id, ro: id, en: id };

  return `// AUTO-GENERATED — ${id}-map page
"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";

const InteractiveMap = dynamic(
  () => import("@/lib/visualLab/components/InteractiveMap").then(m => m.InteractiveMap),
  { ssr: false, loading: () => <div className="w-full h-full bg-slate-900" /> }
);

type Lang = "de" | "hu" | "ro" | "en";

const TITLE: Record<Lang, string> = {
  de: "${names.de} – Karte",
  hu: "${names.hu} – térkép",
  ro: "Harta ${names.ro}",
  en: "${names.en} Map",
};

export default function ${toPascal(id)}MapPage() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "de";

  return (
    <div className="fixed inset-0 bg-[#060614] flex flex-col">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2 shrink-0">
        <button
          onClick={() => router.push("/africa-map")}
          className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
          aria-label="back"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-black text-white leading-tight">{TITLE[l]}</h1>
      </header>
      <main className="flex-1 min-h-0 relative">
        <InteractiveMap countryId="${id}" subject="geographie" grade={5} />
      </main>
    </div>
  );
}
`;
}

// Pascal case segédfüggvény (pl. "centralafricanrepublic" -> "Centralafricanrepublic")
function toPascal(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---- africaResolver.ts generatora ----
function generateAfricaResolver(countries: typeof AFRICA_COUNTRIES): string {
  // SVG importok
  const svgImports = countries.map(c => {
    const { id, svgBase, countryCode } = c;
    const mapVar = `${svgBase}Map`;
    const vbVar = `${svgBase}ViewBox`;
    const projVar = `projectCoords${countryCode}`;
    return `import { ${mapVar}, ${vbVar}, ${projVar} } from "./${svgBase}.svg";`;
  }).join("\n");

  // POI importok
  const poiImports = countries.map(c => {
    return `import { ${c.id}AllPoi } from "../data/${c.id}AllPoi";`;
  }).join("\n");

  // switch cases
  const cases = countries.map(c => {
    const { id, svgBase, countryCode } = c;
    return `    case "${id}":
      return {
        countryId: "${countryCode}",
        map: ${svgBase}Map as unknown as BundeslandPath[],
        viewBox: ${svgBase}ViewBox,
        projectCoords: projectCoords${countryCode},
        pois: ${id}AllPoi,
        subregions: [],
      };`;
  }).join("\n");

  return `// AUTO-GENERATED — Afrika orszag resolver
// Ne szerkeszd kezzel! Futtatsd ujra: npx tsx scripts/generateAfricaMaps.ts
import type { BundeslandPath } from "./deutschland.svg";
import type { CountryMapData } from "./resolver";
${svgImports}
${poiImports}

/**
 * getAfricaCountryMap — visszaadja az adott afrika-i orszag terkep adatait.
 * @param countryId - Az orszag slug (pl. "egypt", "nigeria")
 */
export function getAfricaCountryMap(countryId: string): CountryMapData | null {
  switch (countryId) {
${cases}
    default:
      return null;
  }
}
`;
}

// ---- Fő futás ----
function main() {
  console.log("Afrika terkep generator indul...");

  // 1. AllPoi fajlok generalasa
  const dataDir = path.join(REPO, "lib/visualLab/data");
  for (const country of AFRICA_COUNTRIES) {
    const poiFiles = findPoiV2Files(country.poiPrefix);
    const content = generateAllPoiFile(country, poiFiles);
    const outPath = path.join(dataDir, `${country.id}AllPoi.ts`);
    fs.writeFileSync(outPath, content, "utf-8");
    console.log(`  [POI] ${country.id}: ${poiFiles.length} V2 fajl -> ${country.id}AllPoi.ts`);
  }

  // 2. App route oldalak generalasa
  const appDir = path.join(REPO, "app");
  for (const country of AFRICA_COUNTRIES) {
    const routeDir = path.join(appDir, `${country.id}-map`);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    const content = generatePageTsx(country);
    const outPath = path.join(routeDir, "page.tsx");
    fs.writeFileSync(outPath, content, "utf-8");
    console.log(`  [PAGE] app/${country.id}-map/page.tsx`);
  }

  // 3. africaResolver.ts generalasa
  const resolverContent = generateAfricaResolver(AFRICA_COUNTRIES);
  const resolverPath = path.join(REPO, "lib/visualLab/maps/africaResolver.ts");
  fs.writeFileSync(resolverPath, resolverContent, "utf-8");
  console.log("  [RESOLVER] lib/visualLab/maps/africaResolver.ts");

  console.log("\nKesz! Osszes fajl generajva.");
  console.log("Kovetkezo lepés: InteractiveMap.tsx patch + tsc --noEmit ellenorzes");
}

main();
