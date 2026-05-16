import * as _ns from "../lib/seo/slugs";
const s: any = (_ns as any).default ?? _ns;
const pois = s.pois;
const total = pois.length;
const types: Record<string, number> = {};
let withParent = 0, indexable = 0, isRegion = 0, isCountry = 0;
for (const p of pois) {
  if (!p) continue;
  types[p.type || 'no-type'] = (types[p.type || 'no-type'] || 0) + 1;
  if (p.parent) withParent++;
  if (p.type === 'region') isRegion++;
  if (p.type === 'country') isCountry++;
  const desc = p.description || {};
  const facts = p.facts || {};
  const descAdv = p.descriptionAdvanced || {};
  const factsAdv = p.factsAdvanced || {};
  let has = false;
  for (const l of ['de','hu','ro','en']) {
    if ((desc[l]?.length || 0) > 0 || (descAdv[l]?.length || 0) > 0) { has = true; break; }
    if ((facts[l]?.length || 0) > 0 || (factsAdv[l]?.length || 0) > 0) { has = true; break; }
  }
  if (has && p.parent && p.type !== 'region' && p.type !== 'country') indexable++;
}
console.log('total POIs:', total);
console.log('with parent:', withParent);
console.log('regions:', isRegion, 'countries:', isCountry);
console.log('indexable (with content):', indexable);
console.log('NON-indexable (empty content):', withParent - isRegion - isCountry - indexable);
console.log('types:', types);
