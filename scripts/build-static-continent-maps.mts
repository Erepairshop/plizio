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
  // Optional override: country-id → 4-lang display name (used when SVG name is a placeholder)
  nameOverride?: Record<string, Record<Lang, string>>;
};

// Compute approximate label position from a path's coordinate cloud.
// Returns the median (X, Y) of all numeric pairs found in the path-d string.
function computeLabelPos(d: string): [number, number] | null {
  const nums = d.match(/-?\d+\.?\d*/g);
  if (!nums || nums.length < 4) return null;
  const xs: number[] = [], ys: number[] = [];
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const x = parseFloat(nums[i]), y = parseFloat(nums[i + 1]);
    if (!isNaN(x) && !isNaN(y)) { xs.push(x); ys.push(y); }
  }
  if (!xs.length) return null;
  xs.sort((a, b) => a - b); ys.sort((a, b) => a - b);
  return [xs[Math.floor(xs.length / 2)], ys[Math.floor(ys.length / 2)]];
}

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
    nameOverride: {
      usa: { de:"USA", hu:"USA", ro:"SUA", en:"USA" },
      canada: { de:"Kanada", hu:"Kanada", ro:"Canada", en:"Canada" },
      mexico: { de:"Mexiko", hu:"Mexikó", ro:"Mexic", en:"Mexico" },
      guatemala: { de:"Guatemala", hu:"Guatemala", ro:"Guatemala", en:"Guatemala" },
      honduras: { de:"Honduras", hu:"Honduras", ro:"Honduras", en:"Honduras" },
      elsalvador: { de:"El Salvador", hu:"Salvador", ro:"El Salvador", en:"El Salvador" },
      nicaragua: { de:"Nicaragua", hu:"Nicaragua", ro:"Nicaragua", en:"Nicaragua" },
      costarica: { de:"Costa Rica", hu:"Costa Rica", ro:"Costa Rica", en:"Costa Rica" },
      panama: { de:"Panama", hu:"Panama", ro:"Panama", en:"Panama" },
      belize: { de:"Belize", hu:"Belize", ro:"Belize", en:"Belize" },
      cuba: { de:"Kuba", hu:"Kuba", ro:"Cuba", en:"Cuba" },
      jamaica: { de:"Jamaika", hu:"Jamaica", ro:"Jamaica", en:"Jamaica" },
      haiti: { de:"Haiti", hu:"Haiti", ro:"Haiti", en:"Haiti" },
      dominicanrepublic: { de:"Dom. Rep.", hu:"Dom. Közt.", ro:"Rep. Dom.", en:"Dom. Rep." },
      bahamas: { de:"Bahamas", hu:"Bahamák", ro:"Bahamas", en:"Bahamas" },
      trinidad: { de:"Trinidad", hu:"Trinidad", ro:"Trinidad", en:"Trinidad" },
    },
  },
  {
    slug: "southamerica",
    svgFile: "southamerica.svg.ts",
    mapVar: "southamericaMap",
    vbVar: "southamericaViewBox",
    title: { de:"Südamerika-Karte", hu:"Dél-Amerika térkép", ro:"Harta Americii de Sud", en:"South America Map" },
    hint:  { de:"Tippe auf ein Land, um die Karte zu öffnen", hu:"Koppints egy országra a térképért", ro:"Atinge o țară pentru harta detaliată", en:"Tap a country to open its map" },
    bind: {
      argentina:"argentina", bolivia:"bolivia", brazil:"brazil", chile:"chile",
      colombia:"colombia", ecuador:"ecuador", guyana:"guyana", paraguay:"paraguay",
      peru:"peru", suriname:"suriname", uruguay:"uruguay", venezuela:"venezuela",
    },
    nameOverride: {
      argentina: { de:"Argentinien", hu:"Argentína", ro:"Argentina", en:"Argentina" },
      bolivia: { de:"Bolivien", hu:"Bolívia", ro:"Bolivia", en:"Bolivia" },
      brazil: { de:"Brasilien", hu:"Brazília", ro:"Brazilia", en:"Brazil" },
      chile: { de:"Chile", hu:"Chile", ro:"Chile", en:"Chile" },
      colombia: { de:"Kolumbien", hu:"Kolumbia", ro:"Columbia", en:"Colombia" },
      ecuador: { de:"Ecuador", hu:"Ecuador", ro:"Ecuador", en:"Ecuador" },
      guyana: { de:"Guyana", hu:"Guyana", ro:"Guyana", en:"Guyana" },
      paraguay: { de:"Paraguay", hu:"Paraguay", ro:"Paraguay", en:"Paraguay" },
      peru: { de:"Peru", hu:"Peru", ro:"Peru", en:"Peru" },
      suriname: { de:"Suriname", hu:"Suriname", ro:"Suriname", en:"Suriname" },
      uruguay: { de:"Uruguay", hu:"Uruguay", ro:"Uruguay", en:"Uruguay" },
      venezuela: { de:"Venezuela", hu:"Venezuela", ro:"Venezuela", en:"Venezuela" },
    },
  },

  {
    slug: "africa",
    svgFile: "africa.svg.ts",
    mapVar: "africaMap",
    vbVar: "africaViewBox",
    title: { de:"Afrika-Karte", hu:"Afrika térkép", ro:"Harta Africii", en:"Africa Map" },
    hint:  { de:"Tippe auf ein Land, um die Karte zu öffnen", hu:"Koppints egy országra a térképért", ro:"Atinge o țară pentru harta detaliată", en:"Tap a country to open its map" },
    bind: {
      algeria:"algeria", angola:"angola", benin:"benin", botswana:"botswana",
      burkinafaso:"burkinafaso", burundi:"burundi", cameroon:"cameroon", capeverde:"capeverde",
      centralafricanrepublic:"centralafricanrepublic", chad:"chad", comoros:"comoros",
      congo:"congo", drcongo:"drcongo", djibouti:"djibouti", egypt:"egypt",
      equatorialguinea:"equatorialguinea", eritrea:"eritrea", eswatini:"eswatini",
      ethiopia:"ethiopia", gabon:"gabon", gambia:"gambia", ghana:"ghana",
      guinea:"guinea", guineabissau:"guineabissau", ivorycoast:"ivorycoast",
      kenya:"kenya", lesotho:"lesotho", liberia:"liberia", libya:"libya",
      madagascar:"madagascar", malawi:"malawi", mali:"mali", mauritania:"mauritania",
      mauritius:"mauritius", morocco:"morocco", mozambique:"mozambique",
      namibia:"namibia", niger:"niger", nigeria:"nigeria", rwanda:"rwanda",
      saotome:"saotome", senegal:"senegal", seychelles:"seychelles",
      sierraleone:"sierraleone", somalia:"somalia", southafrica:"southafrica",
      southsudan:"southsudan", sudan:"sudan", tanzania:"tanzania", togo:"togo",
      tunisia:"tunisia", uganda:"uganda", zambia:"zambia", zimbabwe:"zimbabwe",
    },
    nameOverride: {
      algeria: { de:"Algerien", hu:"Algéria", ro:"Algeria", en:"Algeria" },
      angola: { de:"Angola", hu:"Angola", ro:"Angola", en:"Angola" },
      benin: { de:"Benin", hu:"Benin", ro:"Benin", en:"Benin" },
      botswana: { de:"Botswana", hu:"Botswana", ro:"Botswana", en:"Botswana" },
      burkinafaso: { de:"Burkina Faso", hu:"Burkina Faso", ro:"Burkina Faso", en:"Burkina Faso" },
      burundi: { de:"Burundi", hu:"Burundi", ro:"Burundi", en:"Burundi" },
      cameroon: { de:"Kamerun", hu:"Kamerun", ro:"Camerun", en:"Cameroon" },
      capeverde: { de:"Kap Verde", hu:"Zöld-foki-szigetek", ro:"Capul Verde", en:"Cape Verde" },
      centralafricanrepublic: { de:"Zentralafrikanische Republik", hu:"Közép-afrikai Köztársaság", ro:"Republica Centrafricană", en:"Central African Republic" },
      chad: { de:"Tschad", hu:"Csád", ro:"Ciad", en:"Chad" },
      comoros: { de:"Komoren", hu:"Comore-szigetek", ro:"Comore", en:"Comoros" },
      congo: { de:"Kongo", hu:"Kongó", ro:"Congo", en:"Congo" },
      drcongo: { de:"DR Kongo", hu:"Kongói DK", ro:"RD Congo", en:"DR Congo" },
      djibouti: { de:"Dschibuti", hu:"Dzsibuti", ro:"Djibouti", en:"Djibouti" },
      egypt: { de:"Ägypten", hu:"Egyiptom", ro:"Egipt", en:"Egypt" },
      equatorialguinea: { de:"Äquatorialguinea", hu:"Egyenlítői-Guinea", ro:"Guineea Ecuatorială", en:"Equatorial Guinea" },
      eritrea: { de:"Eritrea", hu:"Eritrea", ro:"Eritreea", en:"Eritrea" },
      eswatini: { de:"Eswatini", hu:"Eswatini", ro:"Eswatini", en:"Eswatini" },
      ethiopia: { de:"Äthiopien", hu:"Etiópia", ro:"Etiopia", en:"Ethiopia" },
      gabon: { de:"Gabun", hu:"Gabon", ro:"Gabon", en:"Gabon" },
      gambia: { de:"Gambia", hu:"Gambia", ro:"Gambia", en:"Gambia" },
      ghana: { de:"Ghana", hu:"Ghána", ro:"Ghana", en:"Ghana" },
      guinea: { de:"Guinea", hu:"Guinea", ro:"Guineea", en:"Guinea" },
      guineabissau: { de:"Guinea-Bissau", hu:"Bissau-Guinea", ro:"Guineea-Bissau", en:"Guinea-Bissau" },
      ivorycoast: { de:"Elfenbeinküste", hu:"Elefántcsontpart", ro:"Coasta de Fildeș", en:"Ivory Coast" },
      kenya: { de:"Kenia", hu:"Kenya", ro:"Kenya", en:"Kenya" },
      lesotho: { de:"Lesotho", hu:"Lesotho", ro:"Lesotho", en:"Lesotho" },
      liberia: { de:"Liberia", hu:"Libéria", ro:"Liberia", en:"Liberia" },
      libya: { de:"Libyen", hu:"Líbia", ro:"Libia", en:"Libya" },
      madagascar: { de:"Madagaskar", hu:"Madagaszkár", ro:"Madagascar", en:"Madagascar" },
      malawi: { de:"Malawi", hu:"Malawi", ro:"Malawi", en:"Malawi" },
      mali: { de:"Mali", hu:"Mali", ro:"Mali", en:"Mali" },
      mauritania: { de:"Mauretanien", hu:"Mauritánia", ro:"Mauritania", en:"Mauritania" },
      mauritius: { de:"Mauritius", hu:"Mauritius", ro:"Mauritius", en:"Mauritius" },
      morocco: { de:"Marokko", hu:"Marokkó", ro:"Maroc", en:"Morocco" },
      mozambique: { de:"Mosambik", hu:"Mozambik", ro:"Mozambic", en:"Mozambique" },
      namibia: { de:"Namibia", hu:"Namíbia", ro:"Namibia", en:"Namibia" },
      niger: { de:"Niger", hu:"Niger", ro:"Niger", en:"Niger" },
      nigeria: { de:"Nigeria", hu:"Nigéria", ro:"Nigeria", en:"Nigeria" },
      rwanda: { de:"Ruanda", hu:"Ruanda", ro:"Rwanda", en:"Rwanda" },
      saotome: { de:"São Tomé und Príncipe", hu:"São Tomé és Príncipe", ro:"São Tomé și Príncipe", en:"São Tomé and Príncipe" },
      senegal: { de:"Senegal", hu:"Szenegál", ro:"Senegal", en:"Senegal" },
      seychelles: { de:"Seychellen", hu:"Seychelle-szigetek", ro:"Seychelles", en:"Seychelles" },
      sierraleone: { de:"Sierra Leone", hu:"Sierra Leone", ro:"Sierra Leone", en:"Sierra Leone" },
      somalia: { de:"Somalia", hu:"Szomália", ro:"Somalia", en:"Somalia" },
      southafrica: { de:"Südafrika", hu:"Dél-Afrika", ro:"Africa de Sud", en:"South Africa" },
      southsudan: { de:"Südsudan", hu:"Dél-Szudán", ro:"Sudanul de Sud", en:"South Sudan" },
      sudan: { de:"Sudan", hu:"Szudán", ro:"Sudan", en:"Sudan" },
      tanzania: { de:"Tansania", hu:"Tanzánia", ro:"Tanzania", en:"Tanzania" },
      togo: { de:"Togo", hu:"Togo", ro:"Togo", en:"Togo" },
      tunisia: { de:"Tunesien", hu:"Tunézia", ro:"Tunisia", en:"Tunisia" },
      uganda: { de:"Uganda", hu:"Uganda", ro:"Uganda", en:"Uganda" },
      zambia: { de:"Sambia", hu:"Zambia", ro:"Zambia", en:"Zambia" },
      zimbabwe: { de:"Simbabwe", hu:"Zimbabwe", ro:"Zimbabwe", en:"Zimbabwe" },
    },
  },
  {
    slug: "asia",
    svgFile: "asia.svg.ts",
    mapVar: "asiaMap",
    vbVar: "asiaViewBox",
    title: { de:"Asien-Karte", hu:"Ázsia térkép", ro:"Harta Asiei", en:"Asia Map" },
    hint:  { de:"Tippe auf ein Land, um die Karte zu öffnen", hu:"Koppints egy országra a térképért", ro:"Atinge o țară pentru harta detaliată", en:"Tap a country to open its map" },
    // Asian country pages still served by Next.js (no static SVGs yet) — bind to live Next routes.
    bind: {
      afghanistan:"afghanistan", armenia:"armenia", azerbaijan:"azerbaijan",
      bahrain:"bahrain", bangladesh:"bangladesh", bhutan:"bhutan", brunei:"brunei",
      cambodia:"cambodia", china:"china", georgia:"georgia", india:"india",
      indonesia:"indonesia", iran:"iran", iraq:"iraq", israel:"israel",
      japan:"japan", jordan:"jordan", kazakhstan:"kazakhstan", kuwait:"kuwait",
      kyrgyzstan:"kyrgyzstan", laos:"laos", lebanon:"lebanon", malaysia:"malaysia",
      maldives:"maldives", mongolia:"mongolia", myanmar:"myanmar", nepal:"nepal",
      northkorea:"northkorea", oman:"oman", pakistan:"pakistan",
      philippines:"philippines", qatar:"qatar", russia:"russia",
      saudiarabia:"saudiarabia", singapore:"singapore", southkorea:"southkorea",
      srilanka:"srilanka", syria:"syria", taiwan:"taiwan", tajikistan:"tajikistan",
      thailand:"thailand", timorleste:"timorleste", turkey:"turkey",
      turkmenistan:"turkmenistan", uae:"uae", uzbekistan:"uzbekistan",
      vietnam:"vietnam", yemen:"yemen",
    },
    nameOverride: {
      afghanistan: { de:"Afghanistan", hu:"Afganisztán", ro:"Afganistan", en:"Afghanistan" },
      armenia: { de:"Armenien", hu:"Örményország", ro:"Armenia", en:"Armenia" },
      azerbaijan: { de:"Aserbaidschan", hu:"Azerbajdzsán", ro:"Azerbaidjan", en:"Azerbaijan" },
      bahrain: { de:"Bahrain", hu:"Bahrein", ro:"Bahrain", en:"Bahrain" },
      bangladesh: { de:"Bangladesch", hu:"Banglades", ro:"Bangladesh", en:"Bangladesh" },
      bhutan: { de:"Bhutan", hu:"Bhután", ro:"Bhutan", en:"Bhutan" },
      brunei: { de:"Brunei", hu:"Brunei", ro:"Brunei", en:"Brunei" },
      cambodia: { de:"Kambodscha", hu:"Kambodzsa", ro:"Cambodgia", en:"Cambodia" },
      china: { de:"China", hu:"Kína", ro:"China", en:"China" },
      georgia: { de:"Georgien", hu:"Grúzia", ro:"Georgia", en:"Georgia" },
      india: { de:"Indien", hu:"India", ro:"India", en:"India" },
      indonesia: { de:"Indonesien", hu:"Indonézia", ro:"Indonezia", en:"Indonesia" },
      iran: { de:"Iran", hu:"Irán", ro:"Iran", en:"Iran" },
      iraq: { de:"Irak", hu:"Irak", ro:"Irak", en:"Iraq" },
      israel: { de:"Israel", hu:"Izrael", ro:"Israel", en:"Israel" },
      japan: { de:"Japan", hu:"Japán", ro:"Japonia", en:"Japan" },
      jordan: { de:"Jordanien", hu:"Jordánia", ro:"Iordania", en:"Jordan" },
      kazakhstan: { de:"Kasachstan", hu:"Kazahsztán", ro:"Kazahstan", en:"Kazakhstan" },
      kuwait: { de:"Kuwait", hu:"Kuvait", ro:"Kuwait", en:"Kuwait" },
      kyrgyzstan: { de:"Kirgisistan", hu:"Kirgizisztán", ro:"Kârgâzstan", en:"Kyrgyzstan" },
      laos: { de:"Laos", hu:"Laosz", ro:"Laos", en:"Laos" },
      lebanon: { de:"Libanon", hu:"Libanon", ro:"Liban", en:"Lebanon" },
      malaysia: { de:"Malaysia", hu:"Malajzia", ro:"Malaezia", en:"Malaysia" },
      maldives: { de:"Malediven", hu:"Maldív-szigetek", ro:"Maldive", en:"Maldives" },
      mongolia: { de:"Mongolei", hu:"Mongólia", ro:"Mongolia", en:"Mongolia" },
      myanmar: { de:"Myanmar", hu:"Mianmar", ro:"Myanmar", en:"Myanmar" },
      nepal: { de:"Nepal", hu:"Nepál", ro:"Nepal", en:"Nepal" },
      northkorea: { de:"Nordkorea", hu:"Észak-Korea", ro:"Coreea de Nord", en:"North Korea" },
      oman: { de:"Oman", hu:"Omán", ro:"Oman", en:"Oman" },
      pakistan: { de:"Pakistan", hu:"Pakisztán", ro:"Pakistan", en:"Pakistan" },
      palestine: { de:"Palästina", hu:"Palesztina", ro:"Palestina", en:"Palestine" },
      philippines: { de:"Philippinen", hu:"Fülöp-szigetek", ro:"Filipine", en:"Philippines" },
      qatar: { de:"Katar", hu:"Katar", ro:"Qatar", en:"Qatar" },
      russia: { de:"Russland", hu:"Oroszország", ro:"Rusia", en:"Russia" },
      saudiarabia: { de:"Saudi-Arabien", hu:"Szaúd-Arábia", ro:"Arabia Saudită", en:"Saudi Arabia" },
      singapore: { de:"Singapur", hu:"Szingapúr", ro:"Singapore", en:"Singapore" },
      southkorea: { de:"Südkorea", hu:"Dél-Korea", ro:"Coreea de Sud", en:"South Korea" },
      srilanka: { de:"Sri Lanka", hu:"Srí Lanka", ro:"Sri Lanka", en:"Sri Lanka" },
      syria: { de:"Syrien", hu:"Szíria", ro:"Siria", en:"Syria" },
      taiwan: { de:"Taiwan", hu:"Tajvan", ro:"Taiwan", en:"Taiwan" },
      tajikistan: { de:"Tadschikistan", hu:"Tádzsikisztán", ro:"Tadjikistan", en:"Tajikistan" },
      thailand: { de:"Thailand", hu:"Thaiföld", ro:"Thailanda", en:"Thailand" },
      timorleste: { de:"Osttimor", hu:"Kelet-Timor", ro:"Timorul de Est", en:"Timor-Leste" },
      turkey: { de:"Türkei", hu:"Törökország", ro:"Turcia", en:"Turkey" },
      turkmenistan: { de:"Turkmenistan", hu:"Türkmenisztán", ro:"Turkmenistan", en:"Turkmenistan" },
      uae: { de:"VAE", hu:"EAE", ro:"EAU", en:"UAE" },
      uzbekistan: { de:"Usbekistan", hu:"Üzbegisztán", ro:"Uzbekistan", en:"Uzbekistan" },
      vietnam: { de:"Vietnam", hu:"Vietnám", ro:"Vietnam", en:"Vietnam" },
      yemen: { de:"Jemen", hu:"Jemen", ro:"Yemen", en:"Yemen" },
    },
  },
  {
    slug: "oceania",
    svgFile: "oceania.svg.ts",
    mapVar: "oceaniaMap",
    vbVar: "oceaniaViewBox",
    title: { de:"Ozeanien-Karte", hu:"Óceánia térkép", ro:"Harta Oceaniei", en:"Oceania Map" },
    hint:  { de:"Tippe auf ein Land, um die Karte zu öffnen", hu:"Koppints egy országra a térképért", ro:"Atinge o țară pentru harta detaliată", en:"Tap a country to open its map" },
    bind: {
      australia:"australia", newzealand:"newzealand", papuanewguinea:"papuanewguinea",
      fiji:"fiji", solomonislands:"solomonislands", vanuatu:"vanuatu",
      newcaledonia:"newcaledonia", frenchpolynesia:"frenchpolynesia",
      samoa:"samoa", tonga:"tonga", kiribati:"kiribati", micronesia:"micronesia",
      marshallislands:"marshallislands", palau:"palau", nauru:"nauru",
      tuvalu:"tuvalu", cookislands:"cookislands",
    },
    nameOverride: {
      australia: { de:"Australien", hu:"Ausztrália", ro:"Australia", en:"Australia" },
      newzealand: { de:"Neuseeland", hu:"Új-Zéland", ro:"Noua Zeelandă", en:"New Zealand" },
      papuanewguinea: { de:"Papua-Neuguinea", hu:"Pápua Új-Guinea", ro:"Papua Noua Guinee", en:"Papua New Guinea" },
      fiji: { de:"Fidschi", hu:"Fidzsi", ro:"Fiji", en:"Fiji" },
      solomonislands: { de:"Salomonen", hu:"Salamon-szk.", ro:"Solomon", en:"Solomon Is." },
      vanuatu: { de:"Vanuatu", hu:"Vanuatu", ro:"Vanuatu", en:"Vanuatu" },
      newcaledonia: { de:"Neukaled.", hu:"Új-Kaled.", ro:"N. Caledonia", en:"New Caledonia" },
      frenchpolynesia: { de:"Fr.-Polyn.", hu:"Fr. Polin.", ro:"Polinezia Fr.", en:"Fr. Polynesia" },
      samoa: { de:"Samoa", hu:"Szamoa", ro:"Samoa", en:"Samoa" },
      tonga: { de:"Tonga", hu:"Tonga", ro:"Tonga", en:"Tonga" },
      kiribati: { de:"Kiribati", hu:"Kiribati", ro:"Kiribati", en:"Kiribati" },
      micronesia: { de:"Mikronesien", hu:"Mikronézia", ro:"Micronezia", en:"Micronesia" },
      marshallislands: { de:"Marshall", hu:"Marshall", ro:"Marshall", en:"Marshall Is." },
      palau: { de:"Palau", hu:"Palau", ro:"Palau", en:"Palau" },
      nauru: { de:"Nauru", hu:"Nauru", ro:"Nauru", en:"Nauru" },
      tuvalu: { de:"Tuvalu", hu:"Tuvalu", ro:"Tuvalu", en:"Tuvalu" },
      cookislands: { de:"Cookinseln", hu:"Cook-szk.", ro:"Cook", en:"Cook Is." },
    },
  },
];

function renderHtml(c: Continent, lang: Lang, mapData: any[], viewBox: string): string {
  const t = c.title[lang], hint = c.hint[lang], back = BACK[lang], soon = SOON[lang];
  const langLinks = LANGS.map(l => l === lang
    ? `<span class="lang on">${l.toUpperCase()}</span>`
    : `<a class="lang" href="/${c.slug}-map/${l==='hu'?'':l+'/'}">${l.toUpperCase()}</a>`
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
  const countries = mapData.map((co: any) => {
    // Name priority: nameOverride > co.names (europa style) > co.name (NA style) > id
    const overrideName = c.nameOverride?.[co.id]?.[lang];
    const name = overrideName || (co.names && co.names[lang]) || (co.name && co.name[lang]) || co.id;
    // Label position: use SVG-provided labelX/Y if non-zero, else compute from path median
    let lx = co.labelX || 0, ly = co.labelY || 0;
    if (lx === 0 && ly === 0) {
      const c2 = computeLabelPos(co.path);
      if (c2) { lx = c2[0]; ly = c2[1]; }
    }
    return {
      id: co.id, name, lx, ly, cap: co.capital, path: simplifyPath(co.path),
      url: c.bind[co.id] ? `/${c.bind[co.id]}-map/${lang==='hu'?'':lang+'/'}` : null,
    };
  });

  const vbParts = viewBox.split(/\s+/).map(Number);
  const vbW = vbParts[2], vbH = vbParts[3];

  const esc = (s: string) => String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const svgCountries = countries.map((co: any) => {
    const p = `<path class="country${co.url?'':' disabled'}" data-id="${esc(co.id)}" data-name="${esc(co.name)}" d="${co.path}"/>`;
    return co.url ? `<a href="${co.url}" aria-label="${esc(co.name)}">${p}</a>` : p;
  }).join("");
  // Country name labels (text + stroke for legibility on map)
  const svgLabels = countries
    .filter((co: any) => co.lx && co.ly)
    .map((co: any) => `<text class="cname" x="${co.lx}" y="${co.ly}">${esc(co.name)}</text>`)
    .join("");

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
.cname{fill:#fff;font-size:11px;font-weight:700;pointer-events:none;text-anchor:middle;paint-order:stroke;stroke:#0a0a1f;stroke-width:3;stroke-linejoin:round}
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
const gC=document.getElementById('gC');
let s=1,tx=0,ty=0;
const gL=document.getElementById('gL');
function ap(){const tr='translate('+tx+','+ty+') scale('+s+')';gC.setAttribute('transform',tr);if(gL)gL.setAttribute('transform',tr)}
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
