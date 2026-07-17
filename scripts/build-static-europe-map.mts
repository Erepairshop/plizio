// Static Europe continent map — clickable countries → /<slug>-map/
// Output: public/europe-map/{index.html, de|hu|ro|en/index.html}
import fs from "node:fs";
import path from "node:path";
import * as EU from "../lib/visualLab/maps/europa.svg.ts";

const { europaMap, europaViewBox } = EU as any;

type Lang = "de" | "hu" | "ro" | "en";
const LANGS: Lang[] = ["de", "hu", "ro", "en"];

const TITLE: Record<Lang, string> = {
  de: "Europakarte", hu: "Európa térkép", ro: "Harta Europei", en: "Europe Map",
};
const HINT: Record<Lang, string> = {
  de: "Tippe auf ein Land, um die Karte zu öffnen",
  hu: "Koppints egy országra a térképért",
  ro: "Atinge o țară pentru harta detaliată",
  en: "Tap a country to open its map",
};
const SOON: Record<Lang, string> = {
  de: "Bald verfügbar", hu: "Hamarosan", ro: "În curând", en: "Coming soon",
};
const BACK: Record<Lang, string> = { de:"Zurück", hu:"Vissza", ro:"Înapoi", en:"Back" };

// ISO2 → slug (must match existing /-map/ routes)
const BIND: Record<string, string> = {
  DE:"deutschland", HU:"magyarorszag", RO:"romania", FR:"france", IT:"italy",
  ES:"spain", GB:"unitedkingdom", NL:"netherlands", PL:"poland", AT:"austria",
  BE:"belgium", PT:"portugal", GR:"greece", IE:"ireland", DK:"denmark",
  SE:"sweden", NO:"norway", FI:"finland", CH:"switzerland", CZ:"czech-republic",
  SK:"slovakia", SI:"slovenia", SM:"sanmarino", HR:"croatia", BG:"bulgaria",
  LU:"luxembourg", LT:"lithuania", LV:"latvia", EE:"estonia", IS:"iceland",
  MT:"malta", CY:"cyprus", AL:"albania", RS:"serbia", BA:"bosnia",
  ME:"montenegro", MK:"northmacedonia", XK:"kosovo", MD:"moldova", UA:"ukraine",
  BY:"belarus", AD:"andorra", MC:"monaco", LI:"liechtenstein", VA:"vatican",
};

function renderHtml(lang: Lang): string {
  const t = TITLE[lang], hint = HINT[lang], back = BACK[lang], soon = SOON[lang];
  const langLinks = LANGS.map(l => l === lang
    ? `<span class="lang on">${l.toUpperCase()}</span>`
    : `<a class="lang" href="/europe-map/${l==='hu'?'':l+'/'}">${l.toUpperCase()}</a>`
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
  const countries = europaMap.map((c: any) => ({
    id: c.id, name: (c.names && c.names[lang]) || c.id,
    cap: c.capital, path: simplifyPath(c.path), url: BIND[c.id] ? `/${BIND[c.id]}-map/${lang==='hu'?'':lang+'/'}` : null,
  }));

  const [_, __, vbW, vbH] = europaViewBox.split(/\s+/).map(Number);

  // Build inline SVG markup. Wrap clickable countries in <a> for native navigation (no JS overhead).
  const esc = (s: string) => String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const svgCountries = countries.map((c: any) => {
    const p = `<path class="country${c.url?'':' disabled'}" data-id="${esc(c.id)}" data-name="${esc(c.name)}" d="${c.path}"/>`;
    return c.url ? `<a href="${c.url}" aria-label="${esc(c.name)}">${p}</a>` : p;
  }).join("");
  const svgCapitals = countries.filter((c: any) => c.cap).map((c: any) =>
    `<circle class="capital" cx="${c.cap.coords[0]}" cy="${c.cap.coords[1]}" r="2.2"/>`
  ).join("");
  const svgLabels = countries.filter((c: any) => c.cap).map((c: any) =>
    `<text class="caplabel" x="${c.cap.coords[0]+4}" y="${c.cap.coords[1]+3}">${esc(c.cap.name)}</text>`
  ).join("");

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=3">
<title>${t} — Plizio</title>
<meta name="description" content="${hint}">
<link rel="canonical" href="https://plizio.com/europe-map/${lang==='hu'?'':lang+'/'}">
${LANGS.map(L => `<link rel="alternate" hreflang="${L}" href="https://plizio.com/europe-map/${L==='hu'?'':L+'/'}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="https://plizio.com/europe-map/">
<meta property="og:title" content="${t} — Plizio">
<meta property="og:description" content="${hint}">
<meta property="og:url" content="https://plizio.com/europe-map/${lang==='hu'?'':lang+'/'}">
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
.country{fill:#1a2240;stroke:#ffffff30;stroke-width:.6;transition:fill .15s,stroke .15s;cursor:pointer}
.country:hover,.country.hover{fill:#2c3a7a;stroke:#fff}
.country.disabled{cursor:not-allowed;opacity:.6}
.capital{fill:#fbbf24;stroke:#000;stroke-width:.4;pointer-events:none}
.caplabel{fill:#fff;font-size:9px;font-weight:600;pointer-events:none;text-shadow:0 0 4px #000}
.cname{fill:#ffffffa0;font-size:10px;font-weight:700;pointer-events:none;text-anchor:middle;text-shadow:0 0 2px #000}
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
  <svg id="svg" viewBox="${europaViewBox}" preserveAspectRatio="xMidYMid meet">
    <g id="gC">${svgCountries}</g>
    <g id="gP">${svgCapitals}</g>
    <g id="gL">${svgLabels}</g>
  </svg>
  <div class="zoom"><button id="zin">+</button><button id="zout">−</button></div>
</div>
<div class="hint">${hint}</div>
<div class="toast" id="toast"></div>
<script>
const LANG=${JSON.stringify(lang)},W=${vbW},H=${vbH},SOON=${JSON.stringify(soon)};
try{localStorage.setItem('plizio_language',LANG)}catch(e){}
const svg=document.getElementById('svg'),stage=document.getElementById('stage');
const gC=document.getElementById('gC'),gP=document.getElementById('gP'),gL=document.getElementById('gL');
let s=1,tx=0,ty=0;
function ap(){const tr='translate('+tx+','+ty+') scale('+s+')';gC.setAttribute('transform',tr);gP.setAttribute('transform',tr);gL.setAttribute('transform',tr)}
function clmp(v){return Math.max(.5,Math.min(20,v))}
// Convert clientX/Y to SVG viewBox coords (pre-group-transform space)
function toVb(cx,cy){const r=svg.getBoundingClientRect();return[(cx-r.left)*(W/r.width),(cy-r.top)*(H/r.height)]}
// Zoom by factor f, keeping (clientX,clientY) fixed under cursor
function zoomAt(f,cx,cy){const[vx,vy]=toVb(cx,cy);const ns=clmp(s*f);const k=ns/s;tx=vx-k*(vx-tx);ty=vy-k*(vy-ty);s=ns;ap()}
// Center-zoom (button fallback)
function zoomCenter(f){const r=svg.getBoundingClientRect();zoomAt(f,r.left+r.width/2,r.top+r.height/2)}
let dr=false,dx=0,dy=0,moved=false,pid=null;
svg.addEventListener('pointerdown',e=>{if(e.isPrimary===false||e.button!==0)return;dr=true;pid=e.pointerId;dx=e.clientX;dy=e.clientY;moved=false;svg.classList.add('drag')});
svg.addEventListener('pointermove',e=>{if(!dr||e.pointerId!==pid)return;const r=svg.getBoundingClientRect();const k=W/r.width;const dxm=e.clientX-dx,dym=e.clientY-dy;if(Math.abs(dxm)+Math.abs(dym)>4){moved=true;if(!svg.hasPointerCapture(e.pointerId))svg.setPointerCapture(e.pointerId)}tx+=dxm*k;ty+=dym*k;dx=e.clientX;dy=e.clientY;ap()});
function endDrag(e){if(pid!==null&&svg.hasPointerCapture(pid))svg.releasePointerCapture(pid);dr=false;pid=null;svg.classList.remove('drag')}
svg.addEventListener('pointerup',endDrag);
svg.addEventListener('pointercancel',endDrag);
// Native <a> clicks navigate automatically; we only intercept to (a) suppress on drag, (b) show toast on disabled
svg.addEventListener('click',e=>{const dis=e.target.closest('.country.disabled');if(dis){e.preventDefault();showToast(dis.getAttribute('data-name')+' — '+SOON);return}if(moved){e.preventDefault();e.stopPropagation()}},true);
svg.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.2:1/1.2,e.clientX,e.clientY)},{passive:false});
document.getElementById('zin').onclick=()=>zoomCenter(1.3);
document.getElementById('zout').onclick=()=>zoomCenter(1/1.3);
// Pinch zoom around pinch midpoint
let pD=0,pS=1,pCX=0,pCY=0;
svg.addEventListener('touchstart',e=>{if(e.touches.length===2){const[a,b]=e.touches;pD=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);pCX=(a.clientX+b.clientX)/2;pCY=(a.clientY+b.clientY)/2;pS=s;dr=false}},{passive:true});
svg.addEventListener('touchmove',e=>{if(e.touches.length===2){const[a,b]=e.touches;const d=Math.hypot(b.clientX-a.clientX,b.clientY-a.clientY);const cx=(a.clientX+b.clientX)/2,cy=(a.clientY+b.clientY)/2;const f=(d/pD)*(pS/s);zoomAt(f,cx,cy);e.preventDefault()}},{passive:false});
const toast=document.getElementById('toast');let toastT=0;
function showToast(m){toast.textContent=m;toast.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>toast.classList.remove('show'),2400)}
</script>
</body>
</html>`;
}

const outDir = path.join(process.cwd(), "public", "europe-map");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"), renderHtml("hu"), "utf8");
for (const l of LANGS) {
  const sub = path.join(outDir, l);
  fs.mkdirSync(sub, { recursive: true });
  fs.writeFileSync(path.join(sub, "index.html"), renderHtml(l), "utf8");
}
const sz = fs.statSync(path.join(outDir, "index.html")).size;
console.log(`europe-map: ${europaMap.length} countries, html=${(sz/1024).toFixed(0)}KB`);
