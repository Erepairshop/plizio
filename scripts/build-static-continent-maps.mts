// Static continent maps — clickable countries → /<slug>-map/
// Generalized version of build-static-europe-map.mts.
// Currently handles: europe, north-america. Add new continents below.
//
// Output: public/<slug>-map/{index.html, de|hu|ro|en/index.html}

import fs from "node:fs";
import path from "node:path";

type Lang = "de" | "hu" | "ro" | "en";
const LANGS: Lang[] = ["de", "hu", "ro", "en"];

type Continent = {
  slug: string;       // URL slug (europe, northamerica)
  svgFile: string;    // file under lib/visualLab/maps/
  mapVar: string;     // exported array (europaMap, northamericaMap)
  vbVar: string;      // exported viewBox string
  title: Record<Lang, string>;
  hint: Record<Lang, string>;
  // country-id → slug for /-map/ link (must match build-static-maps.mts COUNTRIES entries)
  bind: Record<string, string>;
  // Extra width/height bias for the zoom math (some continents need different defaults)
  initialZoom?: number;
};

const SOON: Record<Lang, string> = { de:"Bald verfügbar", hu:"Hamarosan", ro:"În curând", en:"Coming soon" };
const BACK: Record<Lang, string> = { de:"Zurück", hu:"Vissza", ro:"Înapoi", en:"Back" };

const CONTINENTS: Continent[] = [
  {
    slug: "europe",
    svgFile: "europa.svg.ts",
    mapVar: "europaMap",
    vbVar: "europaViewBox",
    title: { de:"Europakarte", hu:"Európa térkép", ro:"Harta Europei", en:"Europe Map" },
    hint:  { de:"Tippe auf ein Land, um die Karte zu öffnen", hu:"Koppints egy országra a térképért", ro:"Atinge o țară pentru harta detaliată", en:"Tap a country to open its map" },
    bind: {
      DE:"deutschland", HU:"magyarorszag", RO:"romania", FR:"france", IT:"italy",
      ES:"spain", GB:"unitedkingdom", NL:"netherlands", PL:"poland", AT:"austria",
      BE:"belgium", PT:"portugal", GR:"greece", IE:"ireland", DK:"denmark",
      SE:"sweden", NO:"norway", FI:"finland", CH:"switzerland", CZ:"czech-republic",
      SK:"slovakia", SI:"slovenia", SM:"sanmarino", HR:"croatia", BG:"bulgaria",
      LU:"luxembourg", LT:"lithuania", LV:"latvia", EE:"estonia", IS:"iceland",
      MT:"malta", CY:"cyprus", AL:"albania", RS:"serbia", BA:"bosnia",
      ME:"montenegro", MK:"northmacedonia", XK:"kosovo", MD:"moldova", UA:"ukraine",
      BY:"belarus", AD:"andorra", MC:"monaco", LI:"liechtenstein", VA:"vatican",
    },
  },
  {
    slug: "northamerica",
    svgFile: "northamerica.svg.ts",
    mapVar: "northamericaMap",
    vbVar: "northamericaViewBox",
    title: { de:"Nordamerika-Karte", hu:"Észak-Amerika térkép", ro:"Harta Americii de Nord", en:"North America Map" },
    hint:  { de:"Tippe auf ein Land, um die Karte zu öffnen", hu:"Koppints egy országra a térképért", ro:"Atinge o țară pentru harta detaliată", en:"Tap a country to open its map" },
    bind: {
      usa:"usa", canada:"canada", mexico:"mexico", guatemala:"guatemala",
      honduras:"honduras", elsalvador:"elsalvador", nicaragua:"nicaragua",
      costarica:"costarica", panama:"panama", belize:"belize", cuba:"cuba",
      jamaica:"jamaica", haiti:"haiti", dominicanrepublic:"dominicanrepublic",
      bahamas:"bahamas", trinidad:"trinidad",
    },
  },
];

function renderHtml(c: Continent, lang: Lang, mapData: any[], viewBox: string): string {
  const t = c.title[lang], hint = c.hint[lang], back = BACK[lang], soon = SOON[lang];
  const langLinks = LANGS.map(l => l === lang
    ? `<span class="lang on">${l.toUpperCase()}</span>`
    : `<a class="lang" href="${l==='hu'?'./':'../'+l+'/'}">${l.toUpperCase()}</a>`
  ).join("");

  const simplifyPath = (d: string, minDist = 0.5): string => {
    const parts = d.match(/[A-Za-z][^A-Za-z]*/g) || [];
    let lx=-1e9, ly=-1e9; const out: string[] = [];
    const r = (n: number) => (Math.round(n*10)/10).toString();
    for (const part of parts) {
      const cmd = part[0]; const arg = part.slice(1).trim();
      if ((cmd==="M"||cmd==="L")&&arg) {
        const ns = arg.split(/[,\s]+/).map(Number);
        if (ns.length>=2 && !isNaN(ns[0]) && !isNaN(ns[1])) {
          const x=ns[0],y=ns[1]; if (cmd==="M"||Math.hypot(x-lx,y-ly)>=minDist) { out.push(cmd+r(x)+","+r(y)); lx=x; ly=y; } continue;
        }
      }
      if (cmd==="Z"||cmd==="z") { out.push("Z"); lx=-1e9; ly=-1e9; continue; }
      out.push(part);
    }
    return out.join("");
  };
  const countries = mapData.map((co: any) => ({
    id: co.id, name: (co.name && co.name[lang]) || (co.names && co.names[lang]) || co.id,
    cap: co.capital, path: simplifyPath(co.path),
    url: c.bind[co.id] ? `/${c.bind[co.id]}-map/${lang==='hu'?'':lang+'/'}` : null,
  }));

  const vbParts = viewBox.split(/\s+/).map(Number);
  const vbW = vbParts[2], vbH = vbParts[3];

  const esc = (s: string) => String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const svgCountries = countries.map((co: any) => {
    const p = `<path class="country${co.url?'':' disabled'}" data-id="${esc(co.id)}" data-name="${esc(co.name)}" d="${co.path}"/>`;
    return co.url ? `<a href="${co.url}" aria-label="${esc(co.name)}">${p}</a>` : p;
  }).join("");

  const canonicalLang = lang === 'hu' ? '' : lang + '/';
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=3">
<title>${t} — Plizio</title>
<meta name="description" content="${hint}">
<link rel="canonical" href="https://plizio.com/${c.slug}-map/${canonicalLang}">
${LANGS.map(L => `<link rel="alternate" hreflang="${L}" href="https://plizio.com/${c.slug}-map/${L==='hu'?'':L+'/'}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="https://plizio.com/${c.slug}-map/">
<meta property="og:title" content="${t} — Plizio">
<meta property="og:description" content="${hint}">
<meta property="og:url" content="https://plizio.com/${c.slug}-map/${canonicalLang}">
<meta property="og:type" content="website">
<style>
*{box-sizing:border-box}
html,body{margin:0;padding:0;height:100%;background:#060614;color:#fff;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;overflow:hidden}
header{display:flex;align-items:center;gap:.6rem;padding:.65rem .9rem;background:#0a0a1f;border-bottom:1px solid #ffffff14;position:relative;z-index:5}
header a.back{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#ffffff14;color:#fff;text-decoration:none;font-weight:700}
header h1{margin:0;font-size:1rem;font-weight:800;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
header .langs{display:flex;gap:.25rem}
.lang{font-size:.7rem;font-weight:700;padding:.25rem .45rem;border-radius:6px;color:#ffffffb0;text-decoration:none;background:#ffffff10}
.lang.on{background:#3b82f6;color:#fff}
#stage{position:absolute;inset:48px 0 0 0;overflow:hidden;touch-action:none;background:radial-gradient(ellipse at 50% 30%,#0e1233 0%,#060614 70%)}
#svg{width:100%;height:100%;display:block;cursor:grab}
#svg.drag{cursor:grabbing}
.country{fill:#1a2240;stroke:#7aa8ff;stroke-width:1.1;stroke-opacity:.75;transition:fill .15s,stroke .15s;cursor:pointer}
.country:hover,.country.hover{fill:#2d3a78;stroke:#fff}
.country.disabled{cursor:not-allowed;opacity:.6}
.hint{position:absolute;top:54px;left:50%;transform:translateX(-50%);background:#000000a0;backdrop-filter:blur(8px);padding:.4rem .8rem;border-radius:999px;font-size:.75rem;color:#ffffffc0;pointer-events:none;z-index:3;animation:fadeOut 4s 2s forwards}
@keyframes fadeOut{to{opacity:0}}
.toast{position:absolute;bottom:1rem;left:50%;transform:translate(-50%,200%);background:#0d1230;border:1px solid #ffffff20;padding:.7rem 1rem;border-radius:10px;font-size:.85rem;z-index:8;transition:transform .25s;pointer-events:none}
.toast.show{transform:translate(-50%,0)}
.zoom{position:absolute;right:.7rem;bottom:.7rem;display:flex;flex-direction:column;gap:.35rem;z-index:4}
.zoom button{width:38px;height:38px;border-radius:8px;border:1px solid #ffffff20;background:#0d1230;color:#fff;font-size:1.2rem;font-weight:800;cursor:pointer}
</style>
</head>
<body>
<header>
<a class="back" href="/learn/" aria-label="${back}">‹</a>
<h1>${t}</h1>
<div class="langs">${langLinks}</div>
</header>
<div id="stage">
  <svg id="svg" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet">
    <g id="gC">${svgCountries}</g>
  </svg>
  <div class="zoom"><button id="zin">+</button><button id="zout">−</button></div>
</div>
<div class="hint">${hint}</div>
<div class="toast" id="toast"></div>
<script>
const LANG=${JSON.stringify(lang)},W=${vbW},H=${vbH},SOON=${JSON.stringify(soon)};
const svg=document.getElementById('svg'),stage=document.getElementById('stage');
const gC=document.getElementById('gC');
let s=1,tx=0,ty=0;
function ap(){gC.setAttribute('transform','translate('+tx+','+ty+') scale('+s+')')}
function clmp(v){return Math.max(.5,Math.min(20,v))}
function toVb(cx,cy){const r=svg.getBoundingClientRect();return[(cx-r.left)*(W/r.width),(cy-r.top)*(H/r.height)]}
function zoomAt(f,cx,cy){const[vx,vy]=toVb(cx,cy);const ns=clmp(s*f);const k=ns/s;tx=vx-k*(vx-tx);ty=vy-k*(vy-ty);s=ns;ap()}
function zoomCenter(f){const r=svg.getBoundingClientRect();zoomAt(f,r.left+r.width/2,r.top+r.height/2)}
let dr=false,dx=0,dy=0,moved=false;
svg.addEventListener('pointerdown',e=>{if(e.isPrimary===false)return;dr=true;dx=e.clientX;dy=e.clientY;moved=false;svg.classList.add('drag');svg.setPointerCapture(e.pointerId)});
svg.addEventListener('pointermove',e=>{if(!dr)return;const r=svg.getBoundingClientRect();const k=W/r.width;const dxm=e.clientX-dx,dym=e.clientY-dy;if(Math.abs(dxm)+Math.abs(dym)>4)moved=true;tx+=dxm*k;ty+=dym*k;dx=e.clientX;dy=e.clientY;ap()});
svg.addEventListener('pointerup',()=>{dr=false;svg.classList.remove('drag')});
svg.addEventListener('pointercancel',()=>{dr=false;svg.classList.remove('drag')});
svg.addEventListener('click',e=>{const dis=e.target.closest('.country.disabled');if(dis){e.preventDefault();showToast(dis.getAttribute('data-name')+' — '+SOON);return}if(moved){e.preventDefault();e.stopPropagation()}},true);
svg.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.2:1/1.2,e.clientX,e.clientY)},{passive:false});
document.getElementById('zin').onclick=()=>zoomCenter(1.3);
document.getElementById('zout').onclick=()=>zoomCenter(1/1.3);
let pD=0,pS=1;
svg.addEventListener('touchstart',e=>{if(e.touches.length===2){const[a,b]=e.touches;pD=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);pS=s;dr=false}},{passive:true});
svg.addEventListener('touchmove',e=>{if(e.touches.length===2){const[a,b]=e.touches;const d=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);const cx=(a.clientX+b.clientX)/2,cy=(a.clientY+b.clientY)/2;const f=(d/pD)*(pS/s);zoomAt(f,cx,cy);e.preventDefault()}},{passive:false});
const toast=document.getElementById('toast');let toastT=0;
function showToast(m){toast.textContent=m;toast.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>toast.classList.remove('show'),2400)}
</script>
</body>
</html>`;
}

for (const c of CONTINENTS) {
  const mod: any = await import(`../lib/visualLab/maps/${c.svgFile}`);
  const mapData = mod[c.mapVar];
  const viewBox = mod[c.vbVar];
  if (!Array.isArray(mapData) || !viewBox) {
    console.log(`SKIP ${c.slug}: missing exports (map=${!!mapData}, vb=${!!viewBox})`);
    continue;
  }
  const outDir = path.join(process.cwd(), "public", `${c.slug}-map`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), renderHtml(c, "hu", mapData, viewBox), "utf8");
  for (const l of LANGS) {
    const sub = path.join(outDir, l);
    fs.mkdirSync(sub, { recursive: true });
    fs.writeFileSync(path.join(sub, "index.html"), renderHtml(c, l, mapData, viewBox), "utf8");
  }
  const sz = fs.statSync(path.join(outDir, "index.html")).size;
  console.log(`OK ${c.slug}-map: ${mapData.length} entries, html=${(sz/1024).toFixed(0)}KB`);
}
