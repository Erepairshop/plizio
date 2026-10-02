import assert from "node:assert/strict";
import fs from "node:fs";
// Run with: node --import tsx scripts/test-mislata-region.mjs
const module = await import("../lib/visualLab/data/spainPoi.ts");
const spainRegions = module.spainRegions ?? module.default?.spainRegions;
const valencia = spainRegions.find((r) => r.id === "ES-VC");
assert.ok(valencia, "The parent must exist in the source region catalog");
assert.equal(valencia.parent, "ES");
assert.equal(valencia.type, "region");
for (const lang of ["de", "hu", "ro", "en"]) assert.equal(valencia.name[lang], "Valencia");
const source = new URL("../lib/visualLab/data/poiExtraEuNewV1a.ts", import.meta.url);
const text = fs.readFileSync(source, "utf8");
const id = '"id": "spain-mislata-cities-v2"';
const start = text.indexOf(id);
assert.ok(start >= 0);
const next = text.indexOf('"id":', start + id.length);
const record = text.slice(start, next < 0 ? undefined : next);
assert.match(record, /"parent": "ES-VC"/);
assert.doesNotMatch(record, /"parent": "ES-GA"/);
const backupPath = source.pathname.replace(/^\/(\w:)/, "$1") + ".before_seo_mislata_20261002.bak";
if (fs.existsSync(backupPath)) {
  const before = fs.readFileSync(backupPath, "utf8").replace(/\r\n/g, "\n");
  const oldStart = before.indexOf(id);
  const parentStart = before.indexOf('"parent": "ES-GA"', oldStart);
  assert.ok(parentStart > oldStart);
  const expected = before.slice(0, parentStart) + before.slice(parentStart).replace('"parent": "ES-GA"', '"parent": "ES-VC"');
  assert.equal(text.replace(/\r\n/g, "\n"), expected, "Only Mislata's parent may change");
}
const nginx = fs.readFileSync(new URL("../deploy/nginx/plizio-static.conf", import.meta.url), "utf8");
for (const [lang, country, oldRegion, targetRegion] of [
  ["de", "spanien", "galicien", "valencia"], ["hu", "spanyolorszag", "galicia", "valencia"],
  ["ro", "spania", "galicia", "valencia"], ["en", "spain", "galicia", "valencian-community"], ["es", "espana", "galicia", "comunidad-valenciana"],
]) {
  assert.ok(nginx.includes(`rewrite ^/${lang}/${country}/${oldRegion}/mislata/?$ /${lang}/${country}/${targetRegion}/mislata/ permanent;`));
}
console.log("PASS: Mislata parent, Valencia region, five permanent redirects, source preservation");
