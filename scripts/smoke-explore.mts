import * as _exp from "../lib/explore/explore-block";
import fs from "node:fs";
const exp: any = (_exp as any).default ?? _exp;
const samples = [
  { poiId:"berlin", countryId:"germany", countryName:"Németország", countryMapUrl:"/germany-map/", lang:"hu" as const },
  { poiId:"rio", countryId:"brazil", countryName:"Brazil", countryMapUrl:"/brazil-map/", lang:"de" as const },
  { poiId:"tokyo", countryId:"japan", countryName:"Japan", countryMapUrl:"/japan-map/", lang:"en" as const },
  { poiId:"sydney", countryId:"australia", countryName:"Ausztrália", countryMapUrl:"/australia-map/", lang:"hu" as const },
  { poiId:"cairo", countryId:"egypt", countryName:"Egipt", countryMapUrl:null, lang:"ro" as const },
];

const blocks = samples.map(s => `<h3>${s.countryId} / ${s.lang}</h3>${exp.renderExploreBlock(s)}`).join("<hr/>");

fs.writeFileSync("public/_preview-explore.html", `<!doctype html><meta charset=utf-8><title>Explore preview</title>
<body style="background:#06121e;color:#e0e0e0;font-family:system-ui;padding:18px;max-width:760px;margin:0 auto">
<style>${exp.EXPLORE_CSS}</style>
${blocks}
</body>`);
console.log("OK");
