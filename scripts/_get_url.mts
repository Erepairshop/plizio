import * as _s from "../lib/seo/slugs";
const s: any = (_s as any).default ?? _s;
const ids = ["city-tirana", "hist-butrint", "nat-lake-skadar", "city-berat", "hist-gjirokaster-castle", "city-shkoder", "nat-lake-ohrid"];
for (const id of ids) {
  const p = s.pois.find((x: any) => x?.id === id);
  if (!p) { console.log(id, "— not found"); continue; }
  console.log(id, "(parent=", p.parent, ") →");
  for (const lang of ["hu", "de", "en", "ro"]) {
    console.log("  ", lang, ":", "https://plizio.com" + s.buildPoiPath(lang, p));
  }
}
