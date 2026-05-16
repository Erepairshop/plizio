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

const sources: [string, any[]][] = [
  ['dePois', ns.pois || []],
  ['ALL_DE_EXTRA_POIS', acp.ALL_DE_EXTRA_POIS || []],
  ['romaniaAllPois', ro.romaniaAllPois || []],
  ['hungaryAllPoi', hu.hungaryAllPoi || []],
  ['vatican', (vt.vaticanPois || []).concat(vt.vaticanCountry ? [vt.vaticanCountry] : [])],
  ['ALL_COUNTRY_POIS', acp.ALL_COUNTRY_POIS || []],
];
console.log('Source sizes:');
for (const [n, a] of sources) console.log(' ', n, ':', a.length);

const byId = new Map<string, string[]>();
for (const [name, arr] of sources) {
  for (const p of arr) {
    if (p?.id) {
      const list = byId.get(p.id) || [];
      list.push(name);
      byId.set(p.id, list);
    }
  }
}
let dupIds = 0, totalDupOcc = 0;
const crossSrc = new Map<string, number>();
for (const [id, srcs] of byId) {
  if (srcs.length > 1) {
    dupIds++;
    totalDupOcc += srcs.length - 1;
    const key = srcs.sort().join('+');
    crossSrc.set(key, (crossSrc.get(key) || 0) + 1);
  }
}
console.log('unique IDs:', byId.size, 'dup IDs:', dupIds, 'total dup occurrences:', totalDupOcc);
console.log('Top cross-source patterns:');
const top = [...crossSrc.entries()].sort((a,b)=>b[1]-a[1]).slice(0,10);
for (const [k,c] of top) console.log(' ', c, ':', k);

// In-source duplicates
console.log('\nIn-source ID duplicates:');
for (const [name, arr] of sources) {
  const seen = new Set();
  let dup = 0;
  for (const p of arr) { if (p?.id) { if (seen.has(p.id)) dup++; else seen.add(p.id); } }
  if (dup > 0) console.log(' ', name, ': in-source dup =', dup);
}
