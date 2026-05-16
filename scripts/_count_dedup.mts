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

const all: any[] = ([] as any[]).concat(
  ns.pois || [], acp.ALL_DE_EXTRA_POIS || [], ro.romaniaAllPois || [], hu.hungaryAllPoi || [],
  vt.vaticanCountry ? [vt.vaticanCountry] : [], vt.vaticanPois || [], acp.ALL_COUNTRY_POIS || []
);
console.log('TOTAL pre-dedup:', all.length);
const ids = new Map<string, any>();
let withIds = 0;
for (const p of all) { if (p?.id) { withIds++; if (!ids.has(p.id)) ids.set(p.id, p); } }
console.log('with id:', withIds, 'unique ids:', ids.size);
const coords = new Set<string>();
let dropped = 0; let kept = 0;
for (const p of ids.values()) {
  if (p.type === 'region' || p.type === 'country') continue;
  const x = p.coords?.[0] ?? p.coordinates?.lng;
  const y = p.coords?.[1] ?? p.coordinates?.lat;
  if (typeof x !== 'number' || typeof y !== 'number') { kept++; continue; }
  const k = `${Math.round(y/0.0005)}:${Math.round(x/0.0005)}`;
  if (coords.has(k)) dropped++; else { coords.add(k); kept++; }
}
console.log('after coord-dedup (non-region):', kept, 'dropped:', dropped);
