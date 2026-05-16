import * as _acp from "../lib/visualLab/data/allCountryPois";
const acp: any = (_acp as any).default ?? _acp;
let v1 = 0, v2 = 0;
const v1Ids = new Set<string>();
const v2Ids = new Set<string>();
for (const p of acp.ALL_COUNTRY_POIS) {
  if (!p?.id) continue;
  if (p.id.endsWith("-v2") || p.id.includes("-v2-")) { v2++; v2Ids.add(p.id); }
  else { v1++; v1Ids.add(p.id); }
}
console.log("V1 entries:", v1, "V2 entries:", v2);
console.log("Unique V1 ids:", v1Ids.size, "Unique V2 ids:", v2Ids.size);
let v1ColidesWithV2 = 0;
for (const id of v1Ids) if (v2Ids.has(id)) v1ColidesWithV2++;
console.log("V1 ids also in V2:", v1ColidesWithV2);
// Also: V1 vs V1 internal dups
const idCounts: Record<string,number> = {};
for (const p of acp.ALL_COUNTRY_POIS) if (p?.id && !p.id.includes("-v2")) idCounts[p.id] = (idCounts[p.id]||0)+1;
let v1Internal = 0;
for (const c of Object.values(idCounts)) if (c > 1) v1Internal += c - 1;
console.log("V1 internal dups (same id twice within V1):", v1Internal);
