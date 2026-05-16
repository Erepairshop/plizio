// For every POI id that appears in MULTIPLE source files,
// compute richness score (desc + facts chars) per source and report which wins.
import * as _ns from "../lib/visualLab/data/poi";
import * as _ro from "../lib/visualLab/data/romaniaPoi";
import * as _hu from "../lib/visualLab/data/hungaryPoi";
import * as _vt from "../lib/visualLab/data/vaticanPoi";
import * as _acp from "../lib/visualLab/data/allCountryPois";

const ns: any = (_ns as any).default ?? _ns;
const ro: any = (_ro as any).default ?? _ro;
const hu: any = (_hu as any).default ?? _hu;
const vt: any = (_vt as any).default ?? _vt;
const acp: any = (_acp as any).default ?? _acp;

function richness(p: any): number {
  let n = 0;
  for (const f of ["description", "descriptionAdvanced"]) {
    const obj = p?.[f] || {};
    for (const l of ["de", "hu", "ro", "en"]) n += (obj[l] || "").length;
  }
  for (const f of ["facts", "factsAdvanced"]) {
    const obj = p?.[f] || {};
    for (const l of ["de", "hu", "ro", "en"]) { const arr = obj[l]; if (Array.isArray(arr)) for (const s of arr) n += (s || "").length; }
  }
  if (p?.image) n += 50;
  return n;
}

const sources: [string, any[]][] = [
  ["dePois", ns.pois || []],
  ["ALL_DE_EXTRA", acp.ALL_DE_EXTRA_POIS || []],
  ["romaniaAllPois", ro.romaniaAllPois || []],
  ["hungaryAllPoi", hu.hungaryAllPoi || []],
  ["vatican", (vt.vaticanPois || []).concat(vt.vaticanCountry ? [vt.vaticanCountry] : [])],
  ["ALL_COUNTRY_POIS", acp.ALL_COUNTRY_POIS || []],
];

const byId = new Map<string, { name: string; score: number; p: any }[]>();
for (const [name, arr] of sources) {
  for (const p of arr) {
    if (!p?.id) continue;
    const list = byId.get(p.id) || [];
    list.push({ name, score: richness(p), p });
    byId.set(p.id, list);
  }
}

let dupCount = 0;
let v1WinsCount = 0;
let v2WinsCount = 0;
let tieCount = 0;
const winnerByLoser: Record<string, number> = {};
for (const [id, hits] of byId) {
  if (hits.length < 2) continue;
  dupCount++;
  // Sort by score desc
  hits.sort((a, b) => b.score - a.score);
  const winner = hits[0];
  for (let i = 1; i < hits.length; i++) {
    const loser = hits[i];
    const key = `${loser.name} → ${winner.name}`;
    winnerByLoser[key] = (winnerByLoser[key] || 0) + 1;
    if (winner.score === loser.score) tieCount++;
    else if (winner.name === "ALL_COUNTRY_POIS") v2WinsCount++;
    else v1WinsCount++;
  }
}
console.log(`Total dup IDs: ${dupCount}`);
console.log(`V2 wins (richer): ${v2WinsCount}, V1 wins: ${v1WinsCount}, tie: ${tieCount}`);
console.log("\nWho-replaces-whom (top patterns):");
const sorted = Object.entries(winnerByLoser).sort((a, b) => b[1] - a[1]);
for (const [k, c] of sorted.slice(0, 15)) console.log(`  ${c}: ${k}`);
