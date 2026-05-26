// Multi-country static map generator — React-független standalone HTML per country.
// Output: public/<slug>-map-static/{index.html,de,hu,ro,en}/index.html
// Run:    node --experimental-strip-types scripts/build-static-maps.mts [iso|all]
import fs from "node:fs";
import path from "node:path";

type Lang = "de" | "hu" | "ro" | "en";
const LANGS: Lang[] = ["de", "hu", "ro", "en"];

type Country = {
  iso: string;           // lowercase, matches /data/pois/<ISO>.json (uppercased)
  slug: string;          // URL slug = English country name
  svgFile: string;       // filename in lib/visualLab/maps/
  mapVar: string;        // exported region-paths array name
  vbVar: string;         // exported viewBox string name
  projFn: string;        // exported projectCoords function name
  names: Record<Lang, string>;
};

const COUNTRIES: Country[] = [
  { iso:"hr", slug:"croatia", svgFile:"croatia.svg.ts", mapVar:"croatiaMap", vbVar:"croatiaViewBox", projFn:"projectCoordsHR",
    names:{ de:"Kroatien", hu:"Horvátország", ro:"Croația", en:"Croatia" } },
  { iso:"hu", slug:"magyarorszag", svgFile:"magyarorszag.svg.ts", mapVar:"magyarorszagMap", vbVar:"magyarorszagViewBox", projFn:"projectCoordsHU",
    names:{ de:"Ungarn", hu:"Magyarország", ro:"Ungaria", en:"Hungary" } },
  { iso:"ro", slug:"romania", svgFile:"romania.svg.ts", mapVar:"romaniaMap", vbVar:"romaniaViewBox", projFn:"projectCoordsRO",
    names:{ de:"Rumänien", hu:"Románia", ro:"România", en:"Romania" } },
  { iso:"de", slug:"deutschland", svgFile:"deutschland.svg.ts", mapVar:"deutschlandMap", vbVar:"deutschlandViewBox", projFn:"projectCoords",
    names:{ de:"Deutschland", hu:"Németország", ro:"Germania", en:"Germany" } },
  { iso:"fr", slug:"france", svgFile:"france.svg.ts", mapVar:"franceMap", vbVar:"franceViewBox", projFn:"projectCoordsFR",
    names:{ de:"Frankreich", hu:"Franciaország", ro:"Franța", en:"France" } },
  { iso:"it", slug:"italy", svgFile:"italy.svg.ts", mapVar:"italyMap", vbVar:"italyViewBox", projFn:"projectCoordsIT",
    names:{ de:"Italien", hu:"Olaszország", ro:"Italia", en:"Italy" } },
  { iso:"es", slug:"spain", svgFile:"spain.svg.ts", mapVar:"spainMap", vbVar:"spainViewBox", projFn:"projectCoordsES",
    names:{ de:"Spanien", hu:"Spanyolország", ro:"Spania", en:"Spain" } },
  { iso:"pl", slug:"poland", svgFile:"poland.svg.ts", mapVar:"polandMap", vbVar:"polandViewBox", projFn:"projectCoordsPL",
    names:{ de:"Polen", hu:"Lengyelország", ro:"Polonia", en:"Poland" } },
  { iso:"gb", slug:"unitedkingdom", svgFile:"unitedkingdom.svg.ts", mapVar:"unitedkingdomMap", vbVar:"unitedkingdomViewBox", projFn:"projectCoordsUK",
    names:{ de:"Vereinigtes Königreich", hu:"Egyesült Királyság", ro:"Regatul Unit", en:"United Kingdom" } },
  { iso:"nl", slug:"netherlands", svgFile:"netherlands.svg.ts", mapVar:"netherlandsMap", vbVar:"netherlandsViewBox", projFn:"projectCoordsNL",
    names:{ de:"Niederlande", hu:"Hollandia", ro:"Țările de Jos", en:"Netherlands" } },
  { iso:"at", slug:"austria", svgFile:"austria.svg.ts", mapVar:"austriaMap", vbVar:"austriaViewBox", projFn:"projectCoordsAT",
    names:{ de:"Österreich", hu:"Ausztria", ro:"Austria", en:"Austria" } },
  { iso:"be", slug:"belgium", svgFile:"belgium.svg.ts", mapVar:"belgiumMap", vbVar:"belgiumViewBox", projFn:"projectCoordsBE",
    names:{ de:"Belgien", hu:"Belgium", ro:"Belgia", en:"Belgium" } },
  { iso:"pt", slug:"portugal", svgFile:"portugal.svg.ts", mapVar:"portugalMap", vbVar:"portugalViewBox", projFn:"projectCoordsPT",
    names:{ de:"Portugal", hu:"Portugália", ro:"Portugalia", en:"Portugal" } },
  { iso:"gr", slug:"greece", svgFile:"greece.svg.ts", mapVar:"greeceMap", vbVar:"greeceViewBox", projFn:"projectCoordsGR",
    names:{ de:"Griechenland", hu:"Görögország", ro:"Grecia", en:"Greece" } },
  { iso:"ie", slug:"ireland", svgFile:"ireland.svg.ts", mapVar:"irelandMap", vbVar:"irelandViewBox", projFn:"projectCoordsIE",
    names:{ de:"Irland", hu:"Írország", ro:"Irlanda", en:"Ireland" } },
  { iso:"dk", slug:"denmark", svgFile:"denmark.svg.ts", mapVar:"denmarkMap", vbVar:"denmarkViewBox", projFn:"projectCoordsDK",
    names:{ de:"Dänemark", hu:"Dánia", ro:"Danemarca", en:"Denmark" } },
  { iso:"se", slug:"sweden", svgFile:"sweden.svg.ts", mapVar:"swedenMap", vbVar:"swedenViewBox", projFn:"projectCoordsSE",
    names:{ de:"Schweden", hu:"Svédország", ro:"Suedia", en:"Sweden" } },
  { iso:"no", slug:"norway", svgFile:"norway.svg.ts", mapVar:"norwayMap", vbVar:"norwayViewBox", projFn:"projectCoordsNO",
    names:{ de:"Norwegen", hu:"Norvégia", ro:"Norvegia", en:"Norway" } },
  { iso:"fi", slug:"finland", svgFile:"finland.svg.ts", mapVar:"finlandMap", vbVar:"finlandViewBox", projFn:"projectCoordsFI",
    names:{ de:"Finnland", hu:"Finnország", ro:"Finlanda", en:"Finland" } },
  { iso:"ch", slug:"switzerland", svgFile:"switzerland.svg.ts", mapVar:"switzerlandMap", vbVar:"switzerlandViewBox", projFn:"projectCoordsCH",
    names:{ de:"Schweiz", hu:"Svájc", ro:"Elveția", en:"Switzerland" } },
  { iso:"cz", slug:"czech-republic", svgFile:"czechRepublic.svg.ts", mapVar:"czechRepublicMap", vbVar:"czechRepublicViewBox", projFn:"projectCoordsCZ",
    names:{ de:"Tschechien", hu:"Csehország", ro:"Cehia", en:"Czech Republic" } },
  { iso:"sk", slug:"slovakia", svgFile:"slovakia.svg.ts", mapVar:"slovakiaMap", vbVar:"slovakiaViewBox", projFn:"projectCoordsSK",
    names:{ de:"Slowakei", hu:"Szlovákia", ro:"Slovacia", en:"Slovakia" } },
  { iso:"si", slug:"slovenia", svgFile:"slovenia.svg.ts", mapVar:"sloveniaMap", vbVar:"sloveniaViewBox", projFn:"projectCoordsSI",
    names:{ de:"Slowenien", hu:"Szlovénia", ro:"Slovenia", en:"Slovenia" } },
  { iso:"bg", slug:"bulgaria", svgFile:"bulgaria.svg.ts", mapVar:"bulgariaMap", vbVar:"bulgariaViewBox", projFn:"projectCoordsBG",
    names:{ de:"Bulgarien", hu:"Bulgária", ro:"Bulgaria", en:"Bulgaria" } },
  { iso:"rs", slug:"serbia", svgFile:"serbia.svg.ts", mapVar:"serbiaMap", vbVar:"serbiaViewBox", projFn:"projectCoordsRS",
    names:{ de:"Serbien", hu:"Szerbia", ro:"Serbia", en:"Serbia" } },
  { iso:"ba", slug:"bosnia", svgFile:"bosnia.svg.ts", mapVar:"bosniaMap", vbVar:"bosniaViewBox", projFn:"projectCoordsBA",
    names:{ de:"Bosnien", hu:"Bosznia-Hercegovina", ro:"Bosnia și Herțegovina", en:"Bosnia and Herzegovina" } },
  { iso:"al", slug:"albania", svgFile:"albania.svg.ts", mapVar:"albaniaMap", vbVar:"albaniaViewBox", projFn:"projectCoordsAL",
    names:{ de:"Albanien", hu:"Albánia", ro:"Albania", en:"Albania" } },
  { iso:"me", slug:"montenegro", svgFile:"montenegro.svg.ts", mapVar:"montenegroMap", vbVar:"montenegroViewBox", projFn:"projectCoordsME",
    names:{ de:"Montenegro", hu:"Montenegró", ro:"Muntenegru", en:"Montenegro" } },
  { iso:"mk", slug:"northmacedonia", svgFile:"northmacedonia.svg.ts", mapVar:"northmacedoniaMap", vbVar:"northmacedoniaViewBox", projFn:"projectCoordsMK",
    names:{ de:"Nordmazedonien", hu:"Észak-Macedónia", ro:"Macedonia de Nord", en:"North Macedonia" } },
  { iso:"xk", slug:"kosovo", svgFile:"kosovo.svg.ts", mapVar:"kosovoMap", vbVar:"kosovoViewBox", projFn:"projectCoordsXK",
    names:{ de:"Kosovo", hu:"Koszovó", ro:"Kosovo", en:"Kosovo" } },
  { iso:"md", slug:"moldova", svgFile:"moldova.svg.ts", mapVar:"moldovaMap", vbVar:"moldovaViewBox", projFn:"projectCoordsMD",
    names:{ de:"Moldau", hu:"Moldova", ro:"Republica Moldova", en:"Moldova" } },
  { iso:"ua", slug:"ukraine", svgFile:"ukraine.svg.ts", mapVar:"ukraineMap", vbVar:"ukraineViewBox", projFn:"projectCoordsUA",
    names:{ de:"Ukraine", hu:"Ukrajna", ro:"Ucraina", en:"Ukraine" } },
  { iso:"by", slug:"belarus", svgFile:"belarus.svg.ts", mapVar:"belarusMap", vbVar:"belarusViewBox", projFn:"projectCoordsBY",
    names:{ de:"Belarus", hu:"Belarusz", ro:"Belarus", en:"Belarus" } },
  { iso:"lt", slug:"lithuania", svgFile:"lithuania.svg.ts", mapVar:"lithuaniaMap", vbVar:"lithuaniaViewBox", projFn:"projectCoordsLT",
    names:{ de:"Litauen", hu:"Litvánia", ro:"Lituania", en:"Lithuania" } },
  { iso:"lv", slug:"latvia", svgFile:"latvia.svg.ts", mapVar:"latviaMap", vbVar:"latviaViewBox", projFn:"projectCoordsLV",
    names:{ de:"Lettland", hu:"Lettország", ro:"Letonia", en:"Latvia" } },
  { iso:"ee", slug:"estonia", svgFile:"estonia.svg.ts", mapVar:"estoniaMap", vbVar:"estoniaViewBox", projFn:"projectCoordsEE",
    names:{ de:"Estland", hu:"Észtország", ro:"Estonia", en:"Estonia" } },
  { iso:"is", slug:"iceland", svgFile:"iceland.svg.ts", mapVar:"icelandMap", vbVar:"icelandViewBox", projFn:"projectCoordsIS",
    names:{ de:"Island", hu:"Izland", ro:"Islanda", en:"Iceland" } },
  { iso:"mt", slug:"malta", svgFile:"malta.svg.ts", mapVar:"maltaMap", vbVar:"maltaViewBox", projFn:"projectCoordsMT",
    names:{ de:"Malta", hu:"Málta", ro:"Malta", en:"Malta" } },
  { iso:"cy", slug:"cyprus", svgFile:"cyprus.svg.ts", mapVar:"cyprusMap", vbVar:"cyprusViewBox", projFn:"projectCoordsCY",
    names:{ de:"Zypern", hu:"Ciprus", ro:"Cipru", en:"Cyprus" } },
  { iso:"lu", slug:"luxembourg", svgFile:"luxembourg.svg.ts", mapVar:"luxembourgMap", vbVar:"luxembourgViewBox", projFn:"projectCoordsLU",
    names:{ de:"Luxemburg", hu:"Luxemburg", ro:"Luxemburg", en:"Luxembourg" } },
];

const HINT: Record<Lang, string> = {
  de: "Tippe auf einen Ort für Details",
  hu: "Koppints egy helyre a részletekért",
  ro: "Atinge un loc pentru detalii",
  en: "Tap a place for details",
};
const MORE: Record<Lang, string> = { de:"Mehr erfahren", hu:"Bővebben", ro:"Detalii", en:"Read more" };
const BACK: Record<Lang, string> = { de:"Zurück", hu:"Vissza", ro:"Înapoi", en:"Back" };
const TITLE_SUFFIX: Record<Lang, string> = { de:"Karte", hu:"térkép", ro:"hartă", en:"map" };

type SlimPoi = { id:string; type:string; cx:number; cy:number; name:any };

function slimPoi(p: any, proj: (lon:number,lat:number)=>[number,number], W:number, H:number): SlimPoi | null {
  if (!p?.coords || !Array.isArray(p.coords) || p.coords.length < 2) return null;
  const [lon, lat] = p.coords;
  if (typeof lon !== "number" || typeof lat !== "number") return null;
  if (p.type === "country") return null;
  let xy: [number, number];
  try { xy = proj(lon, lat); } catch { return null; }
  const [cx, cy] = xy;
  if (cx < -5 || cx > W + 5 || cy < -5 || cy > H + 5) return null;
  const name: any = {}, desc: any = {};
  for (const l of LANGS) {
    if (p.name?.[l]) name[l] = p.name[l];
  }
  if (!Object.keys(name).length) return null;
  return {
    id: p.id, type: p.type ?? "city",
    cx: +cx.toFixed(1), cy: +cy.toFixed(1),
    name,
  };
}

function parseViewBox(vb: string): { w: number; h: number } {
  const m = vb.split(/\s+/).map(Number);
  return { w: m[2] || 1000, h: m[3] || 1000 };
}

// Drop near-duplicate consecutive points and round to 1 decimal.
// `minDist` is in SVG units; 0.5 is invisible at country zoom.
function simplifyPath(d: string, minDist = 0.5): string {
  const parts = d.match(/[A-Za-z][^A-Za-z]*/g) || [];
  let lastX = -1e9, lastY = -1e9;
  const out: string[] = [];
  const r = (n: number) => (Math.round(n * 10) / 10).toString();
  for (const part of parts) {
    const cmd = part[0];
    const argStr = part.slice(1).trim();
    if ((cmd === "M" || cmd === "L") && argStr) {
      const nums = argStr.split(/[,\s]+/).map(Number);
      if (nums.length >= 2 && !isNaN(nums[0]) && !isNaN(nums[1])) {
        const x = nums[0], y = nums[1];
        const dx = x - lastX, dy = y - lastY;
        if (cmd === "M" || Math.hypot(dx, dy) >= minDist) {
          out.push(cmd + r(x) + "," + r(y));
          lastX = x; lastY = y;
        }
        continue;
      }
    }
    if (cmd === "Z" || cmd === "z") {
      out.push("Z");
      lastX = -1e9; lastY = -1e9;
      continue;
    }
    // Fallback: preserve unknown commands as-is
    out.push(part);
  }
  return out.join("");
}

function escAttr(s: string): string {
  return String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function escText(s: string): string {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function renderHtml(c: Country, lang: Lang, regions: any[], pois: SlimPoi[], viewBox: string, W: number, H: number): string {
  const t = `${c.names[lang]} ${TITLE_SUFFIX[lang]}`;
  const hint = HINT[lang], more = MORE[lang], back = BACK[lang];
  const langLinks = LANGS.map(l => l === lang
    ? `<span class="lang on">${l.toUpperCase()}</span>`
    : `<a class="lang" href="./?lang=${l}">${l.toUpperCase()}</a>`
  ).join("");
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=3">
<title>${t} — Plizio</title>
<meta name="description" content="${hint}">
<link rel="canonical" href="https://plizio.com/${c.slug}-map/${lang==='hu'?'':lang+'/'}">
${LANGS.map(L => `<link rel="alternate" hreflang="${L}" href="https://plizio.com/${c.slug}-map/${L==='hu'?'':L+'/'}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="https://plizio.com/${c.slug}-map/">
<meta property="og:title" content="${t} — Plizio">
<meta property="og:description" content="${hint}">
<meta property="og:url" content="https://plizio.com/${c.slug}-map/${lang==='hu'?'':lang+'/'}">
<meta property="og:type" content="website">
<style>
*{box-sizing:border-box}
html,body{margin:0;padding:0;height:100%;background:#060614;color:#fff;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;overflow:hidden}
header{display:flex;align-items:center;gap:.6rem;padding:.65rem .9rem;background:#0a0a1f;border-bottom:1px solid #ffffff14;position:relative;z-index:5}
header a.back{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#ffffff14;color:#fff;text-decoration:none;font-weight:700}
header a.back:active{background:#ffffff28}
header h1{margin:0;font-size:1rem;font-weight:800;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
header .langs{display:flex;gap:.25rem}
.lang{font-size:.7rem;font-weight:700;padding:.25rem .45rem;border-radius:6px;color:#ffffffb0;text-decoration:none;background:#ffffff10}
.lang.on{background:#3b82f6;color:#fff}
#stage{position:absolute;inset:48px 0 0 0;overflow:hidden;touch-action:none;background:radial-gradient(ellipse at 50% 30%,#0e1233 0%,#060614 70%)}
#svg{width:100%;height:100%;display:block;cursor:grab}
#svg.drag{cursor:grabbing}
.region{fill:#1a2240;stroke:#ffffff30;stroke-width:.6;transition:fill .15s}
.region:hover{fill:#243066}
.label{fill:#ffffff70;font-size:11px;font-weight:600;pointer-events:none;text-anchor:middle}
.poi{cursor:pointer}
.poi circle{fill:#fbbf24;stroke:#000;stroke-width:.5;transition:r .15s}
.poi.city circle{fill:#60a5fa}
.poi.sight circle{fill:#fbbf24}
.poi.nature circle{fill:#22c55e}
.poi:hover circle,.poi.active circle{r:7;fill:#fff}
.hint{position:absolute;top:54px;left:50%;transform:translateX(-50%);background:#000000a0;backdrop-filter:blur(8px);padding:.4rem .8rem;border-radius:999px;font-size:.75rem;color:#ffffffc0;pointer-events:none;z-index:3;animation:fadeOut 4s 2s forwards}
@keyframes fadeOut{to{opacity:0}}
.popup{position:absolute;bottom:0;left:0;right:0;background:#0d1230;border-top:1px solid #ffffff20;padding:1rem 1.2rem 1.4rem;transform:translateY(100%);transition:transform .25s;z-index:10;box-shadow:0 -10px 40px #00000080}
.popup.open{transform:translateY(0)}
.popup .x{position:absolute;top:.5rem;right:.7rem;width:32px;height:32px;border-radius:50%;background:#ffffff14;border:none;color:#fff;font-size:1.1rem;cursor:pointer}
.popup h2{margin:0 0 .3rem;font-size:1.1rem;font-weight:800}
.popup .type{font-size:.7rem;color:#ffffff70;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem}
.popup p{margin:0 0 .8rem;font-size:.85rem;line-height:1.45;color:#ffffffc8}
.popup a.more{display:inline-block;background:#3b82f6;color:#fff;text-decoration:none;font-weight:700;padding:.55rem 1rem;border-radius:8px;font-size:.85rem}
.zoom{position:absolute;right:.7rem;bottom:.7rem;display:flex;flex-direction:column;gap:.35rem;z-index:4}
.zoom button{width:38px;height:38px;border-radius:8px;border:1px solid #ffffff20;background:#0d1230;color:#fff;font-size:1.2rem;font-weight:800;cursor:pointer}
.zoom button:active{background:#1a2240}
</style>
</head>
<body>
<header>
<a class="back" href="/europe-map/" aria-label="${back}">‹</a>
<h1>${t}</h1>
<div class="langs">${langLinks}</div>
</header>
<div id="stage">
  <svg id="svg" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet" aria-label="${t}">
    <g id="gR">${regions.map(r => `<path class="region" data-id="${escAttr(r.id)}" d="${r.path}"/>`).join("")}</g>
    <g id="gL">${regions.filter(r => r.labelX && r.labelY).map(r => `<text class="label" x="${r.labelX}" y="${r.labelY}">${escText((r.name && (r.name[lang] || r.name.en)) || r.id)}</text>`).join("")}</g>
    <g id="gP">${pois.map(p => `<g class="poi ${p.type||'city'}" data-id="${escAttr(p.id)}" data-name="${escAttr(p.name[lang]||p.name.en||p.id)}" transform="translate(${p.cx},${p.cy})"><circle r="${p.type==='city'?5:3.5}"/></g>`).join("")}</g>
  </svg>
  <div class="zoom"><button id="zin" aria-label="zoom in">+</button><button id="zout" aria-label="zoom out">−</button></div>
</div>
<div class="hint">${hint}</div>
<div class="popup" id="popup" role="dialog" aria-modal="false">
  <button class="x" id="px" aria-label="close">×</button>
  <div class="type" id="ptype"></div>
  <h2 id="pname"></h2>
  <a class="more" id="pmore" href="#">${more} →</a>
</div>
<script>
const LANG=${JSON.stringify(lang)},W=${W},H=${H};
const svg=document.getElementById('svg'),stage=document.getElementById('stage');
const gR=document.getElementById('gR'),gL=document.getElementById('gL'),gP=document.getElementById('gP');
let s=1,tx=0,ty=0;
function ap(){const tr='translate('+tx+','+ty+') scale('+s+')';gR.setAttribute('transform',tr);gL.setAttribute('transform',tr);gP.setAttribute('transform',tr)}
function clmp(v){return Math.max(.5,Math.min(8,v))}
function toVb(cx,cy){const r=svg.getBoundingClientRect();return[(cx-r.left)*(W/r.width),(cy-r.top)*(H/r.height)]}
function zoomAt(f,cx,cy){const[vx,vy]=toVb(cx,cy);const ns=clmp(s*f);const k=ns/s;tx=vx-k*(vx-tx);ty=vy-k*(vy-ty);s=ns;ap()}
function zoomCenter(f){const r=svg.getBoundingClientRect();zoomAt(f,r.left+r.width/2,r.top+r.height/2)}
let dr=false,dx=0,dy=0;
svg.addEventListener('pointerdown',e=>{if(e.target.closest('.poi'))return;if(e.isPrimary===false)return;dr=true;dx=e.clientX;dy=e.clientY;svg.classList.add('drag');svg.setPointerCapture(e.pointerId)});
svg.addEventListener('pointermove',e=>{if(!dr)return;const r=svg.getBoundingClientRect();const k=W/r.width;tx+=(e.clientX-dx)*k;ty+=(e.clientY-dy)*k;dx=e.clientX;dy=e.clientY;ap()});
svg.addEventListener('pointerup',()=>{dr=false;svg.classList.remove('drag')});
svg.addEventListener('pointercancel',()=>{dr=false;svg.classList.remove('drag')});
svg.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.15:1/1.15,e.clientX,e.clientY)},{passive:false});
document.getElementById('zin').onclick=()=>zoomCenter(1.3);
document.getElementById('zout').onclick=()=>zoomCenter(1/1.3);
let pD=0,pS=1;
svg.addEventListener('touchstart',e=>{if(e.touches.length===2){const[a,b]=e.touches;pD=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);pS=s;dr=false}},{passive:true});
svg.addEventListener('touchmove',e=>{if(e.touches.length===2){const[a,b]=e.touches;const d=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);const cx=(a.clientX+b.clientX)/2,cy=(a.clientY+b.clientY)/2;const f=(d/pD)*(pS/s);zoomAt(f,cx,cy);e.preventDefault()}},{passive:false});
const pop=document.getElementById('popup');
function openPopup(el){document.querySelectorAll('.poi.active').forEach(n=>n.classList.remove('active'));el.classList.add('active');const t=el.getAttribute('class').split(' ').filter(x=>x!=='poi'&&x!=='active')[0]||'';document.getElementById('ptype').textContent=t;document.getElementById('pname').textContent=el.getAttribute('data-name')||el.getAttribute('data-id');document.getElementById('pmore').href='/poi/'+el.getAttribute('data-id')+'/?lang='+LANG;pop.classList.add('open')}
gP.addEventListener('click',e=>{const el=e.target.closest('.poi');if(el){e.stopPropagation();openPopup(el)}});
document.getElementById('px').onclick=()=>{pop.classList.remove('open');document.querySelectorAll('.poi.active').forEach(n=>n.classList.remove('active'))};
stage.addEventListener('click',e=>{if(!e.target.closest('.poi')&&!e.target.closest('.popup')){pop.classList.remove('open');document.querySelectorAll('.poi.active').forEach(n=>n.classList.remove('active'))}});
</script>
</body>
</html>`;
}

async function buildOne(c: Country): Promise<boolean> {
  const svgPath = `../lib/visualLab/maps/${c.svgFile}`;
  let mod: any;
  try {
    mod = await import(svgPath);
  } catch (e: any) {
    console.log(`SKIP ${c.iso}: cannot import ${c.svgFile} — ${e.message?.slice(0,100)}`);
    return false;
  }
  const map = mod[c.mapVar];
  const viewBox = mod[c.vbVar];
  const proj = mod[c.projFn];
  if (!Array.isArray(map) || !viewBox || typeof proj !== "function") {
    console.log(`SKIP ${c.iso}: missing exports (map=${!!map}, vb=${!!viewBox}, proj=${typeof proj})`);
    return false;
  }
  const { w: W, h: H } = parseViewBox(viewBox);

  const isoUp = c.iso === "gb" ? "GB" : c.iso.toUpperCase();
  const poisJsonPath = path.join(process.cwd(), "public", "data", "pois", `${isoUp}.json`);
  let poisRaw: any[] = [];
  if (fs.existsSync(poisJsonPath)) {
    try {
      const j = JSON.parse(fs.readFileSync(poisJsonPath, "utf8"));
      poisRaw = j.pois || j;
    } catch {}
  }
  const seen = new Set<string>();
  const pois: SlimPoi[] = [];
  for (const p of poisRaw) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    const s = slimPoi(p, proj, W, H);
    if (s) pois.push(s);
  }
  const regions = map.map((r: any) => ({
    id: r.id, name: r.name,
    labelX: r.labelX, labelY: r.labelY,
    path: simplifyPath(r.path),
  }));
  const outDir = path.join(process.cwd(), "public", `${c.slug}-map`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), renderHtml(c, "hu", regions, pois, viewBox, W, H), "utf8");
  for (const l of LANGS) {
    const sub = path.join(outDir, l);
    fs.mkdirSync(sub, { recursive: true });
    fs.writeFileSync(path.join(sub, "index.html"), renderHtml(c, l, regions, pois, viewBox, W, H), "utf8");
  }
  const sz = fs.statSync(path.join(outDir, "index.html")).size;
  console.log(`OK   ${c.iso} ${c.slug.padEnd(18)} regions=${regions.length.toString().padStart(3)} pois=${pois.length.toString().padStart(4)} html=${(sz/1024).toFixed(0)}KB`);
  return true;
}

async function main() {
  const target = process.argv[2] || "all";
  const list = target === "all" ? COUNTRIES : COUNTRIES.filter(c => c.iso === target);
  if (!list.length) { console.error(`No country '${target}'`); process.exit(1); }
  let ok = 0, fail = 0;
  for (const c of list) {
    if (await buildOne(c)) ok++; else fail++;
  }
  console.log(`\nDone: ${ok} ok, ${fail} fail / ${list.length} total.`);
}

main().catch(e => { console.error(e); process.exit(1); });
