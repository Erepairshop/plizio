// Why are ~10.9k generated POI pages missing from the per-country map JSON?
// Load the SAME source split_pois_by_country uses (ALL_POI_SOURCES), find the
// ids that are in _poi-url-index.json but get dropped by resolveCC, and group
// them by parent so we see exactly which parent patterns fail. Read-only.
import fs from "node:fs";
import path from "node:path";

const D = path.resolve(process.cwd(), "public", "data");
const ui = JSON.parse(fs.readFileSync(path.join(D, "_poi-url-index.json"), "utf8"));
const generated = new Set(Object.keys(ui));

// Replicate resolveCC from split_pois_by_country.mts
import * as _slugs from "../lib/seo/slugs";
const s: any = (_slugs as any).default ?? _slugs;
const { getCountryId } = s;
const COUNTRY_TO_ISO2: Record<string, string> = {
  germany: "DE", hungary: "HU", romania: "RO", poland: "PL", austria: "AT", switzerland: "CH", liechtenstein: "LI",
  italy: "IT", france: "FR", spain: "ES", portugal: "PT", netherlands: "NL", belgium: "BE", luxembourg: "LU",
  denmark: "DK", sweden: "SE", norway: "NO", finland: "FI", iceland: "IS", ireland: "IE", uk: "GB", czechia: "CZ",
  slovakia: "SK", slovenia: "SI", croatia: "HR", serbia: "RS", bosnia: "BA", montenegro: "ME", northmacedonia: "MK",
  kosovo: "XK", albania: "AL", greece: "GR", bulgaria: "BG", moldova: "MD", ukraine: "UA", belarus: "BY",
  russia: "RU", estonia: "EE", latvia: "LV", lithuania: "LT", malta: "MT", cyprus: "CY", monaco: "MC",
  andorra: "AD", sanmarino: "SM", vatican: "VA",
};
const HU_PARENTS = new Set<string>(["budapest", "baranya", "bacs-kiskun", "bekes", "borsod-abauj-zemplen", "csongrad-csanad", "csongrad", "fejer", "gyor-moson-sopron", "hajdu-bihar", "heves", "jasz-nagykun-szolnok", "komarom-esztergom", "nograd", "pest", "somogy", "szabolcs-szatmar-bereg", "tolna", "vas", "veszprem", "zala"]);
function resolveCC(parent: string): string | null {
  const first = parent.split("-")[0];
  if (first && first.length >= 2 && first.length <= 3 && first === first.toUpperCase()) return first;
  const head = parent.split("-").slice(0, 3).join("-");
  if (HU_PARENTS.has(parent) || HU_PARENTS.has(head)) return "HU";
  try { const cid = getCountryId(parent); const iso = COUNTRY_TO_ISO2[cid] || COUNTRY_TO_ISO2[(cid || "").replace(/-/g, "")]; if (iso) return iso; } catch { /* */ }
  return null;
}

const { ALL_POI_SOURCES } = await import("../lib/visualLab/data/_all_poi_sources.generated");
const byId = new Map<string, any>();
for (const p of ALL_POI_SOURCES as any[]) if (p?.id && !byId.has(p.id)) byId.set(p.id, p);

let inSource = 0, notInSource = 0, dropped = 0;
const byParent = new Map<string, number>();
const byReason = { notInSource: 0, noParent: 0, resolveNull: 0, typeFiltered: 0 };
const droppedParentSamples = new Map<string, string[]>();

for (const id of generated) {
  const p = byId.get(id);
  if (!p) { notInSource++; byReason.notInSource++; continue; }
  inSource++;
  if (p.type === "country" || p.type === "region") { byReason.typeFiltered++; continue; }
  if (!p.parent) { byReason.noParent++; continue; }
  const cc = resolveCC(p.parent);
  if (!cc) {
    dropped++; byReason.resolveNull++;
    byParent.set(p.parent, (byParent.get(p.parent) || 0) + 1);
    const arr = droppedParentSamples.get(p.parent) || [];
    if (arr.length < 2) { arr.push(id); droppedParentSamples.set(p.parent, arr); }
  }
}

console.log(`generated pages: ${generated.size}`);
console.log(`  in ALL_POI_SOURCES: ${inSource}`);
console.log(`  NOT in ALL_POI_SOURCES (manifest miss): ${notInSource}`);
console.log(`\ndrop reasons:`);
console.log(`  not in source manifest: ${byReason.notInSource}`);
console.log(`  no parent:              ${byReason.noParent}`);
console.log(`  resolveCC -> null:      ${byReason.resolveNull}`);
console.log(`  type country/region:    ${byReason.typeFiltered}`);
console.log(`\n-- top 40 FAILING parents (resolveCC null) --`);
[...byParent.entries()].sort((a, b) => b[1] - a[1]).slice(0, 40).forEach(([par, n]) => {
  const cid = (() => { try { return getCountryId(par); } catch { return "ERR"; } })();
  console.log(`${String(n).padStart(5)}  parent="${par}"  getCountryId→"${cid}"  e.g. ${(droppedParentSamples.get(par) || [])[0]}`);
});
