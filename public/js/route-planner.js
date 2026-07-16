/* Plizio A→B útvonaltervező (autós + lakóautó). Önállóan építi az UI-t a
   #plz-route-planner mountba. A cél = amit a user megad (a POI csak előkitöltött,
   de szerkeszthető alapérték). A camper Workert hívja (ORS routing + korridor-
   megállók + ország-advisory), a megállókat a közös /js/stop-card.js rendereli.
   Mount data-*: lang, dest (előkitöltött cél név), lat, lng (előkitöltött cél koord).
   Dual-mode: ha a mountban már van .plz-rp-origin (régi beégetett form), azt használja.
   Adat: © OpenStreetMap contributors · OpenRouteService. */
(function () {
  var M = document.getElementById("plz-route-planner");
  if (!M) return;
  var WORKER = "https://plizio-camper.plizio.workers.dev/plan";
  var LANG = M.dataset.lang || "en";
  // Photon csak de/en/fr/it nyelvet ismer — hu/ro/stb. üres találat → "nem található".
  var GEO_LANG = ({ de: "de", en: "en", fr: "fr", it: "it" })[LANG] || "en";
  var _plat = parseFloat(M.dataset.lat), _plng = parseFloat(M.dataset.lng);
  var DEST_PREFILL = { name: M.dataset.dest || "", coords: (isFinite(_plat) && isFinite(_plng)) ? [_plng, _plat] : null };
  var mode = "car", lastReq = null;
  var PREFILL_CC = (M.dataset.cc || "").toUpperCase();   // POI ország ISO2 (üres = ismeretlen parent)
  var SUPPORTED = null;                                   // {CC:1} ha betöltött; null = ismeretlen → soha nem tilt
  var WORKER_BASE = WORKER.replace(/\/plan\/?$/, "");     // .../plan → ... (a /countries-hez)

  var COPY = {
    de: { h: "Routenplaner — Auto & Wohnmobil", sub: "Start und Ziel eingeben — wir bauen die Route mit Stopps und Länder-Hinweisen.", from: "Start", fromPh: "z.B. München", dest: "Ziel", destPh: "z.B. Lyon", via: "Über (optional)", viaPh: "z.B. Zagreb", nights: "Übernachtungs-Stopps", vehicle: "Fahrzeug", car: "Auto", camper: "Wohnmobil", filter: "Nur Stopps mit (optional):", water: "Wasser", dump: "Entsorgung", power: "Strom", wc: "WC", shower: "Dusche", tierAB: "Stellplätze + Camping", tierA: "Nur Stellplätze", tierB: "Nur Camping", tierABC: "Auch Natur-/Rastplätze", b10: "Umweg max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Route planen" },
    hu: { h: "Útvonaltervező — Autó & Lakóautó", sub: "Add meg az indulást és a célt — megtervezzük az utat megállókkal és ország-tudnivalókkal.", from: "Indulás", fromPh: "pl. Budapest", dest: "Cél", destPh: "pl. Lyon", via: "Érintve (opcionális)", viaPh: "pl. Zagreb", nights: "Éjszakai megállók", vehicle: "Jármű", car: "Autó", camper: "Lakóautó", filter: "Csak megállók ezzel (opcionális):", water: "Víz", dump: "Ürítő", power: "Áram", wc: "WC", shower: "Zuhany", tierAB: "Stellplatz + kemping", tierA: "Csak Stellplatz", tierB: "Csak kemping", tierABC: "Pihenő-/natúrhelyek is", b10: "Kitérő max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Útvonal tervezése" },
    en: { h: "Route planner — Car & Motorhome", sub: "Enter start and destination — we build the route with stops and country notes.", from: "Start", fromPh: "e.g. Munich", dest: "Destination", destPh: "e.g. Lyon", via: "Via (optional)", viaPh: "e.g. Zagreb", nights: "Overnight stops", vehicle: "Vehicle", car: "Car", camper: "Motorhome", filter: "Only stops with (optional):", water: "Water", dump: "Disposal", power: "Power", wc: "Toilets", shower: "Shower", tierAB: "Aires + campsites", tierA: "Aires only", tierB: "Campsites only", tierABC: "Also rest/nature areas", b10: "Detour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Plan route" },
    ro: { h: "Planificator traseu — Mașină & Rulotă", sub: "Introdu plecarea și destinația — construim traseul cu opriri și informații pe țări.", from: "Plecare", fromPh: "ex. Cluj", dest: "Destinație", destPh: "ex. Lyon", via: "Prin (opțional)", viaPh: "ex. Zagreb", nights: "Opriri peste noapte", vehicle: "Vehicul", car: "Mașină", camper: "Rulotă", filter: "Doar opriri cu (opțional):", water: "Apă", dump: "Golire", power: "Curent", wc: "Toaletă", shower: "Duș", tierAB: "Popasuri + camping", tierA: "Doar popasuri", tierB: "Doar camping", tierABC: "Și locuri de odihnă/natură", b10: "Ocol max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Planifică traseul" },
    fr: { h: "Planificateur — Voiture & Camping-car", sub: "Indiquez départ et destination — nous construisons l'itinéraire avec étapes et infos par pays.", from: "Départ", fromPh: "ex. Paris", dest: "Destination", destPh: "ex. Lyon", via: "Via (optionnel)", viaPh: "ex. Zagreb", nights: "Étapes nuitées", vehicle: "Véhicule", car: "Voiture", camper: "Camping-car", filter: "Étapes avec (optionnel) :", water: "Eau", dump: "Vidange", power: "Électricité", wc: "WC", shower: "Douche", tierAB: "Aires + campings", tierA: "Aires seulement", tierB: "Campings seulement", tierABC: "Aussi aires nature/repos", b10: "Détour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "Planifier" },
  };
  var DYN = {
    de: { notFound: "Ort nicht gefunden", needBoth: "Bitte Start und Ziel eingeben.", searching: "📍 Orte werden gesucht…", routing: "🛣️ Route wird berechnet…", km: "km", hrs: "Std.", nights: "Übernachtungen", matchStops: "passende Stopps", mapsAll: "Ganze Route in Maps", advisory: "Länder-Hinweise", toll: "Maut", lez: "Umweltzone", overnight: "Übernachten", mandatory: "Pflicht", keepStop: "diesen Stopp behalten", day: "TAG", dest: "ZIEL", swipe: "← Karten wischen →", regen: "Neu generieren — behaltene Stopps fixieren", regenKept: "🔄 Route mit behaltenen Stopps…", regenNew: "🔄 Neue Variante…" },
    hu: { notFound: "A hely nem található", needBoth: "Add meg az indulást és a célt.", searching: "📍 Helyek keresése…", routing: "🛣️ Útvonal számítása…", km: "km", hrs: "óra", nights: "éjszaka", matchStops: "találó megálló", mapsAll: "Teljes útvonal Mapsben", advisory: "Ország-tudnivalók", toll: "Útdíj", lez: "Környezeti zóna", overnight: "Éjszakázás", mandatory: "Kötelező", keepStop: "ezt a megállót megtartom", day: "NAP", dest: "CÉL", swipe: "← húzd a kártyákat →", regen: "Újragenerálás — megtartottak rögzítése", regenKept: "🔄 Útvonal a megtartottakkal…", regenNew: "🔄 Új variáció…" },
    en: { notFound: "Place not found", needBoth: "Please enter start and destination.", searching: "📍 Locating…", routing: "🛣️ Calculating route…", km: "km", hrs: "h", nights: "nights", matchStops: "matching stops", mapsAll: "Whole route in Maps", advisory: "Country notes", toll: "Toll", lez: "Low-emission zone", overnight: "Overnight", mandatory: "Required", keepStop: "keep this stop", day: "DAY", dest: "GOAL", swipe: "← swipe cards →", regen: "Regenerate — fix kept stops", regenKept: "🔄 Route with kept stops…", regenNew: "🔄 New variant…" },
    ro: { notFound: "Locul nu a fost găsit", needBoth: "Introdu plecarea și destinația.", searching: "📍 Se caută locurile…", routing: "🛣️ Se calculează traseul…", km: "km", hrs: "ore", nights: "nopți", matchStops: "opriri potrivite", mapsAll: "Tot traseul în Maps", advisory: "Informații pe țări", toll: "Taxă drum", lez: "Zonă ecologică", overnight: "Înnoptare", mandatory: "Obligatoriu", keepStop: "păstrează această oprire", day: "ZIUA", dest: "ȚINTĂ", swipe: "← glisează →", regen: "Regenerează — fixează opririle păstrate", regenKept: "🔄 Traseu cu opririle păstrate…", regenNew: "🔄 Variantă nouă…" },
    fr: { notFound: "Lieu introuvable", needBoth: "Entrez départ et destination.", searching: "📍 Recherche…", routing: "🛣️ Calcul de l'itinéraire…", km: "km", hrs: "h", nights: "nuitées", matchStops: "étapes", mapsAll: "Tout l'itinéraire dans Maps", advisory: "Infos par pays", toll: "Péage", lez: "Zone à faibles émissions", overnight: "Nuitée", mandatory: "Obligatoire", keepStop: "garder cette étape", day: "JOUR", dest: "BUT", swipe: "← faites glisser →", regen: "Régénérer — fixer les étapes gardées", regenKept: "🔄 Itinéraire avec étapes gardées…", regenNew: "🔄 Nouvelle variante…" },
  };
  var T = COPY[LANG] || COPY.en, C = DYN[LANG] || DYN.en;
  var VEHICLE_COPY = {
    de: { title: "Wohnmobil-Maße", compact: "Kompaktvan", standard: "Wohnmobil 3,5 t", large: "Großes Wohnmobil", custom: "Eigene Maße", length: "Länge", width: "Breite", height: "Höhe", weight: "Gewicht", invalid: "Bitte gültige Wohnmobil-Maße eingeben." },
    hu: { title: "Lakóautó méretei", compact: "Kompakt furgon", standard: "Lakóautó 3,5 t", large: "Nagy lakóautó", custom: "Saját méretek", length: "Hossz", width: "Szélesség", height: "Magasság", weight: "Tömeg", invalid: "Adj meg érvényes lakóautó-méreteket." },
    en: { title: "Motorhome dimensions", compact: "Compact van", standard: "3.5 t motorhome", large: "Large motorhome", custom: "Custom dimensions", length: "Length", width: "Width", height: "Height", weight: "Weight", invalid: "Enter valid motorhome dimensions." },
    ro: { title: "Dimensiuni autorulotă", compact: "Camper compact", standard: "Autorulotă 3,5 t", large: "Autorulotă mare", custom: "Dimensiuni proprii", length: "Lungime", width: "Lățime", height: "Înălțime", weight: "Greutate", invalid: "Introdu dimensiuni valide pentru autorulotă." },
    fr: { title: "Dimensions du camping-car", compact: "Fourgon compact", standard: "Camping-car 3,5 t", large: "Grand camping-car", custom: "Dimensions personnalisées", length: "Longueur", width: "Largeur", height: "Hauteur", weight: "Poids", invalid: "Saisissez des dimensions valides." },
  };
  var V = VEHICLE_COPY[LANG] || VEHICLE_COPY.en;
  var VEHICLE_PRESETS = {
    compact: { length: 5.4, width: 2.05, height: 2.6, weight: 3 },
    standard: { length: 7, width: 2.3, height: 3.1, weight: 3.5 },
    large: { length: 8.5, width: 2.5, height: 3.4, weight: 5 },
  };
  // "Ehhez az országhoz még nincs camping-adat" popup (a Wohnmobil-kapuzáshoz).
  var ND = {
    de: { title: "Noch keine Wohnmobil-Daten", body: "Für dieses Land haben wir noch keine Stellplatz-Daten. Sobald Daten vorliegen, lässt sich die Route hierher automatisch planen.", car: "Mit dem Auto planen", ok: "OK" },
    hu: { title: "Még nincs lakóautós adat", body: "Ehhez az országhoz még nincs lakóautó-megálló adatunk. Amint lesz adat, ide is automatikusan tervezhető lesz a lakóautós útvonal.", car: "Tervezés autóval", ok: "OK" },
    en: { title: "No motorhome data yet", body: "We don't have motorhome stop data for this country yet. As soon as data is available, routing here will work automatically.", car: "Plan by car", ok: "OK" },
    ro: { title: "Încă nu avem date pentru rulote", body: "Nu avem încă date despre opriri pentru rulote în această țară. De îndată ce apar date, traseul până aici se va putea planifica automat.", car: "Planifică cu mașina", ok: "OK" },
    fr: { title: "Pas encore de données camping-car", body: "Nous n'avons pas encore de données d'aires pour ce pays. Dès que des données seront disponibles, l'itinéraire jusqu'ici fonctionnera automatiquement.", car: "Planifier en voiture", ok: "OK" },
  };
  var NDC = ND[LANG] || ND.en;

  // ── inline SVG icon set (24x24, stroke=currentColor) ─────────────────────────
  function _svg(p) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:1em;height:1em;vertical-align:-.15em">' + p + '</svg>';
  }
  var IC = {
    car: _svg('<path d="M5 11l1.5-4A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1l1.5 4"/><path d="M3 11h18v5a1 1 0 0 1-1 1h-1.5a1.5 1.5 0 0 1-3 0h-7a1.5 1.5 0 0 1-3 0H4a1 1 0 0 1-1-1Z"/><path d="M6.5 14h1"/><path d="M16.5 14h1"/>'),
    camper: _svg('<path d="M3 16V8a2 2 0 0 1 2-2h11l4 5v5"/><path d="M3 16h2.5a1.5 1.5 0 0 0 3 0h7a1.5 1.5 0 0 0 3 0H21"/><rect x="6" y="8.5" width="4" height="3" rx=".5"/><path d="M14 7v5"/>'),
    water: _svg('<path d="M12 3.5C12 3.5 6 10 6 14a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5Z"/>'),
    recycle: _svg('<path d="M7 8 4.5 12l2 1.2"/><path d="m12 4 2.3 4-2.1 1.3"/><path d="M17.5 10 20 14l-2.4 1.4"/><path d="M5 14.5 7 19h4"/><path d="M14 19h3.5l2-3.5"/><path d="M11.5 5.5 9.7 8.6"/>'),
    power: _svg('<path d="M9 3v5"/><path d="M15 3v5"/><path d="M7 8h10v3a5 5 0 0 1-10 0Z"/><path d="M12 16v5"/>'),
    toilet: _svg('<path d="M4 3v18"/><path d="M4 13h7a4 4 0 0 1-3.5 4L8 21"/><circle cx="16.5" cy="6" r="2"/><path d="M16.5 9c-2 0-3 1.5-3 4l1 0 .5 8h3l.5-8 1 0c0-2.5-1-4-3-4Z"/>'),
    shower: _svg('<path d="M4 21V8a3 3 0 0 1 3-3h2"/><path d="M9 5a2 2 0 0 1 4 0"/><circle cx="11" cy="6" r="3.2"/><path d="M9 14v1"/><path d="M12 15v1"/><path d="M15 14v1"/><path d="M7 16v1"/><path d="M17 16v1"/>'),
    compass: _svg('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>'),
    map: _svg('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/><path d="M9 4v14"/><path d="M15 6v14"/>'),
    warning: _svg('<path d="M12 4 2.5 20h19L12 4Z"/><path d="M12 10v4"/><path d="M12 17.5v.2"/>'),
    road: _svg('<path d="M7 3 4 21"/><path d="M17 3l3 18"/><path d="M12 4v2"/><path d="M12 10v2"/><path d="M12 16v2"/>'),
    building: _svg('<path d="M4 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16"/><path d="M13 9h6a1 1 0 0 1 1 1v11"/><path d="M7 8h2"/><path d="M7 12h2"/><path d="M7 16h2"/><path d="M16 13h1"/><path d="M16 17h1"/><path d="M3 21h18"/>'),
    tent: _svg('<path d="M12 4 3 20h18L12 4Z"/><path d="M12 4v16"/><path d="M12 20l5-9"/><path d="M12 20 7 11"/>'),
    wrench: _svg('<path d="M14.5 6a3.5 3.5 0 0 0-4.6 4.3L4 16.2 7.8 20l5.9-5.9A3.5 3.5 0 0 0 18 9.5l-2.3 2.3-1.8-1.8L16.2 7.7Z"/>')
  };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function $(s) { return M.querySelector(s); }
  function vehicleSpecHtml() {
    return '<div class="plz-rp-camper-spec"><span class="plz-rp-flabel">' + esc(V.title) + '</span>'
      + '<select class="plz-rp-vehicle-preset"><option value="compact">' + esc(V.compact) + '</option><option value="standard" selected>' + esc(V.standard) + '</option><option value="large">' + esc(V.large) + '</option><option value="custom">' + esc(V.custom) + '</option></select>'
      + '<div class="plz-rp-dimensions">'
      + '<label>' + esc(V.length) + '<input class="plz-rp-dim" data-key="length" type="number" min="3" max="15" step="0.1" value="7"><span>m</span></label>'
      + '<label>' + esc(V.width) + '<input class="plz-rp-dim" data-key="width" type="number" min="1.5" max="3.5" step="0.05" value="2.3"><span>m</span></label>'
      + '<label>' + esc(V.height) + '<input class="plz-rp-dim" data-key="height" type="number" min="1.8" max="4.5" step="0.05" value="3.1"><span>m</span></label>'
      + '<label>' + esc(V.weight) + '<input class="plz-rp-dim" data-key="weight" type="number" min="1" max="20" step="0.1" value="3.5"><span>t</span></label>'
      + '</div></div>';
  }

  // ── CSS (egyszeri injektálás) ───────────────────────────────────────────────
  var CSS = '#plz-route-planner.plz-rp{margin:1.4rem 0;background:var(--panel);border:1px solid var(--rule);border-radius:var(--r);padding:1rem 1.05rem 1.15rem;color:var(--ink)}'
    + '.plz-rp-head h2{font-size:1.1rem;margin:0 0 .2rem;display:flex;align-items:center;gap:.4rem}'
    + '.plz-rp-head p{font-size:.84rem;color:var(--ink-soft);margin:.15rem 0 .8rem}'
    + '.plz-rp-row{display:flex;flex-wrap:wrap;gap:.55rem;margin-bottom:.5rem}'
    + '.plz-rp-row>label,.plz-rp-vehicle{flex:1 1 160px;display:flex;flex-direction:column;font-size:.74rem;color:var(--ink-soft);gap:.25rem}'
    + '.plz-rp input,.plz-rp select{background:var(--paper);border:1px solid var(--rule);border-radius:var(--r);padding:.5rem .6rem;color:var(--ink);font-size:.9rem}'
    + '.plz-rp input:focus,.plz-rp select:focus{outline:none;border-color:var(--accent)}'
    + '.plz-rp-vehbtns{display:flex;border:1px solid var(--rule);border-radius:var(--r);overflow:hidden}'
    + '.plz-rp-mode{flex:1;padding:.5rem;background:var(--paper-2);color:var(--ink-soft);border:none;cursor:pointer;font-size:.85rem;display:inline-flex;align-items:center;justify-content:center;gap:.35em}'
    + '.plz-rp-mode[aria-selected="true"]{background:var(--accent);color:#fff;font-weight:700}'
    + '.plz-rp-filters{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;margin:.2rem 0 .7rem;background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--r);padding:.6rem .7rem}'
    + '.plz-rp.mode-car .plz-rp-filters{display:none!important}'
    + '.plz-rp-flabel{flex:1 0 100%;font-size:.72rem;font-weight:600;letter-spacing:.02em;color:var(--ink-soft);margin-bottom:.1rem}'
    + '.plz-rp-svcl{font-size:.8rem;background:var(--paper);border:1px solid var(--rule);border-radius:999px;padding:.3rem .66rem;cursor:pointer;display:inline-flex;gap:.3rem;align-items:center;color:var(--ink-soft);transition:background .15s,border-color .15s,color .15s}'
    + '.plz-rp-svcl input{position:absolute;opacity:0;width:0;height:0;margin:0}'
    + '.plz-rp-svcl svg{width:1em;height:1em}'
    + '.plz-rp-svcl:hover{background:var(--paper-2)}'
    + '.plz-rp-svcl:has(input:checked){background:var(--accent-wash);border-color:var(--accent);color:var(--ink)}'
    + '.plz-rp-camper-spec{flex:1 0 100%;display:flex;flex-wrap:wrap;align-items:end;gap:.45rem;padding-top:.35rem;border-top:1px solid var(--rule)}'
    + '.plz-rp-camper-spec>.plz-rp-flabel{flex:1 0 100%}.plz-rp-vehicle-preset{flex:1 1 180px}'
    + '.plz-rp-dimensions{display:grid;grid-template-columns:repeat(4,minmax(70px,1fr));gap:.4rem;flex:3 1 360px}'
    + '.plz-rp-dimensions label{position:relative;font-size:.68rem;color:var(--ink-soft)}.plz-rp-dimensions input{width:100%;padding-right:1.5rem!important}'
    + '.plz-rp-dimensions label span{position:absolute;right:.48rem;bottom:.52rem;font-size:.72rem;color:var(--ink-faint);pointer-events:none}'
    + '.plz-rp-go{width:100%;padding:.65rem;border:none;border-radius:999px;background:var(--accent);color:#fff;font-weight:800;font-size:.98rem;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:.4em}'
    + '.plz-rp-go:hover{background:var(--accent-deep)}'
    + '.plz-rp-status{text-align:center;font-size:.82rem;color:var(--ink-soft);min-height:1.1em;margin-top:.5rem}'
    + '.plz-rp-result{margin-top:1rem;display:flex;flex-direction:column;gap:.9rem}'
    + '.plz-rp-summary{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1.1rem;background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--r);padding:.7rem .9rem}'
    + '.plz-rp-stat b{font-size:1.35rem;color:var(--ink)}.plz-rp-stat{font-size:.78rem;color:var(--ink-soft)}'
    + '.plz-rp-mapsall{margin-left:auto;background:var(--accent);color:#fff;font-weight:700;font-size:.82rem;padding:.38rem .8rem;border-radius:999px;text-decoration:none;display:inline-flex;align-items:center;gap:.35em}'
    + '.plz-rp-mapsall:hover{background:var(--accent-deep)}'
    + '.plz-rp-adv{background:var(--paper-2);border:1px solid var(--rule);border-radius:var(--r);padding:.7rem .9rem}'
    + '.plz-rp-adv h3{font-size:.92rem;margin:0 0 .5rem;display:flex;align-items:center;gap:.35em}'
    + '.plz-rp-advb svg{margin-right:.25em}'
    + '.plz-rp-advc{background:var(--paper);border:1px solid var(--rule);border-radius:var(--r);padding:.45rem .6rem;margin-bottom:.4rem}'
    + '.plz-rp-advc summary{cursor:pointer;font-weight:600;font-size:.86rem}.plz-rp-advc summary span{color:var(--ink-faint);font-size:.76rem}'
    + '.plz-rp-advb{font-size:.82rem;color:var(--ink-soft);margin-top:.4rem;display:flex;flex-direction:column;gap:.2rem}'
    + '.plz-rp-muted{color:var(--ink-faint)}.plz-rp-advnote{font-size:.74rem;margin:.4rem 0 0}'
    + '.plz-rp-deck{display:flex;gap:.7rem;overflow-x:auto;scroll-snap-type:x mandatory;padding:.2rem .1rem .6rem;scrollbar-width:thin;-webkit-overflow-scrolling:touch}'
    + '.plz-rp-deck::-webkit-scrollbar{height:6px}'
    + '.plz-rp-deck::-webkit-scrollbar-thumb{background:var(--rule);border-radius:3px}'
    + '.plz-rp-card{flex:0 0 min(85%,300px);scroll-snap-align:start;scroll-snap-stop:always}'
    + '.plz-rp-card>.plzsc{background:var(--paper);border:1px solid var(--rule);border-left:2px solid var(--accent);border-radius:var(--r);padding:.85rem;height:100%;transition:transform .2s,border-color .2s}'
    + '.plz-rp-card>.plzsc:hover{border-color:var(--accent);transform:translateY(-2px)}'
    + '.plz-rp-cardfb{background:var(--paper);border:1px solid var(--rule);border-left:2px solid var(--accent);border-radius:var(--r);padding:.85rem;height:100%}'
    + '.plz-rp-cardfb h4{margin:.3rem 0;font-size:.95rem;color:var(--ink)}.plz-rp-cardfb a{color:var(--accent);text-decoration:none;font-size:.84rem}'
    + '.plz-rp-badge{font-size:.72rem;font-weight:700;color:var(--accent);letter-spacing:.05em}'
    + '.plz-rp-keep{display:flex;align-items:center;gap:.35rem;font-size:.8rem;color:var(--ink-soft);margin-top:.5rem;cursor:pointer}'
    + '.plz-rp-dots{display:flex;justify-content:center;gap:.35rem;margin:.4rem 0 .15rem;flex-wrap:wrap}'
    + '.plz-rp-dot{width:7px;height:7px;border-radius:50%;background:var(--rule);transition:all .2s;border:none;padding:0;cursor:pointer}'
    + '.plz-rp-dot.active{background:var(--accent);transform:scale(1.3)}'
    + '.plz-rp-swipe{text-align:center;font-size:.78rem;color:var(--ink-faint);margin:.1rem 0;font-style:italic}'
    + '.plz-rp-regen{width:100%;padding:.6rem;border-radius:999px;border:1px solid var(--rule);background:var(--paper-2);color:var(--ink);font-weight:600;cursor:pointer}'
    + '.plz-rp-regen:hover{background:var(--paper)}'
    + '.plz-rp-credit{font-size:.7rem;color:var(--ink-faint);margin:.7rem 0 0;text-align:center}'
    + '.plz-rp-row>label{position:relative}'
    + '.plz-rp-ac{position:absolute;top:100%;left:0;right:0;z-index:30;background:var(--panel);border:1px solid var(--rule);border-radius:var(--r);margin-top:2px;max-height:240px;overflow-y:auto;box-shadow:0 10px 28px rgba(33,29,24,.18)}'
    + '.plz-rp-ac-item{padding:.42rem .6rem;cursor:pointer;display:flex;flex-direction:column;gap:1px}'
    + '.plz-rp-ac-item:hover,.plz-rp-ac-item.on{background:var(--accent-wash)}'
    + '.plz-rp-ac-item .nm{font-size:.86rem;color:var(--ink)}.plz-rp-ac-item .sub{font-size:.72rem;color:var(--ink-faint)}'
    + '#plz-route-planner.plz-rp{position:relative}'
    + '.plz-rp-pop{position:absolute;inset:0;z-index:60;display:flex;align-items:center;justify-content:center;background:rgba(33,29,24,.45);border-radius:var(--r);padding:1rem}'
    + '.plz-rp-pop-card{background:var(--panel);border:1px solid var(--rule);border-radius:var(--r);padding:1rem 1.1rem;max-width:340px;box-shadow:0 12px 32px rgba(33,29,24,.25)}'
    + '.plz-rp-pop-card h4{margin:0 0 .4rem;font-size:1rem;color:var(--ink)}'
    + '.plz-rp-pop-card p{margin:0 0 .85rem;font-size:.85rem;color:var(--ink-soft);line-height:1.45}'
    + '.plz-rp-pop-btns{display:flex;gap:.5rem;justify-content:flex-end;flex-wrap:wrap}'
    + '.plz-rp-pop-btns button{padding:.45rem .85rem;border-radius:999px;font-size:.85rem;font-weight:600;cursor:pointer;border:1px solid var(--rule)}'
    + '.plz-rp-pop-car{background:var(--accent);color:#fff;border-color:var(--accent)}'
    + '.plz-rp-pop-ok{background:var(--paper);color:var(--ink)}'
    + '@media(max-width:560px){.plz-rp-card{flex:0 0 calc(100% - .6rem)}.plz-rp-dimensions{grid-template-columns:repeat(2,1fr)}}';
  if (!document.getElementById("plz-rp-css")) {
    var st = document.createElement("style"); st.id = "plz-rp-css"; st.textContent = CSS; document.head.appendChild(st);
  }

  // ── UI felépítése (ha még nincs beégetve) ───────────────────────────────────
  var hasDest = false;
  if (!M.querySelector(".plz-rp-origin")) {
    M.classList.add("plz-rp");
    var stopsOpts = ""; for (var n = 1; n <= 8; n++) stopsOpts += '<option' + (n === 2 ? " selected" : "") + '>' + n + '</option>';
    var svcDefs = [["water", T.water, IC.water], ["dump", T.dump, IC.recycle], ["power", T.power, IC.power], ["toilets", T.wc, IC.toilet], ["shower", T.shower, IC.shower]];
    var svcHtml = svcDefs.map(function (p) { return '<label class="plz-rp-svcl"><input type="checkbox" class="plz-rp-svc" value="' + p[0] + '"> ' + p[2] + ' ' + esc(p[1]) + '</label>'; }).join("");
    M.innerHTML =
      '<div class="plz-rp-head"><h2>' + esc(T.h) + '</h2><p>' + esc(T.sub) + '</p></div>'
      + '<div class="plz-rp-row">'
      + '<label>' + esc(T.from) + '<input class="plz-rp-origin" type="text" placeholder="' + esc(T.fromPh) + '"></label>'
      + '<label>' + esc(T.dest) + '<input class="plz-rp-dest" type="text" placeholder="' + esc(T.destPh) + '" value="' + esc(DEST_PREFILL.name) + '"></label>'
      + '</div><div class="plz-rp-row">'
      + '<label>' + esc(T.via) + '<input class="plz-rp-via" type="text" placeholder="' + esc(T.viaPh) + '"></label>'
      + '<label>' + esc(T.nights) + '<select class="plz-rp-stops">' + stopsOpts + '</select></label>'
      + '</div><div class="plz-rp-row"><div class="plz-rp-vehicle">' + esc(T.vehicle)
      + '<div class="plz-rp-vehbtns"><button type="button" class="plz-rp-mode" data-mode="car" aria-selected="true">' + IC.car + ' ' + esc(T.car) + '</button><button type="button" class="plz-rp-mode" data-mode="camper" aria-selected="false">' + IC.camper + ' ' + esc(T.camper) + '</button></div></div></div>'
      + '<div class="plz-rp-filters"><span class="plz-rp-camperonly" style="display:contents"><span class="plz-rp-flabel">' + esc(T.filter) + '</span>' + svcHtml
      + '<select class="plz-rp-tier"><option value="AB">' + esc(T.tierAB) + '</option><option value="A">' + esc(T.tierA) + '</option><option value="B">' + esc(T.tierB) + '</option><option value="ABC">' + esc(T.tierABC) + '</option></select></span>' + vehicleSpecHtml() + '</div>'
      + '<button type="button" class="plz-rp-go">' + IC.compass + ' ' + esc(T.plan) + '</button>'
      + '<div class="plz-rp-status"></div><div class="plz-rp-result" style="display:none"></div>'
      + '<p class="plz-rp-credit">© OpenStreetMap contributors · OpenRouteService</p>';
    hasDest = true;
  } else {
    hasDest = !!M.querySelector(".plz-rp-dest");
  }
  if (!M.querySelector(".plz-rp-camper-spec")) {
    var filterBox = M.querySelector(".plz-rp-filters");
    if (filterBox) filterBox.insertAdjacentHTML("beforeend", vehicleSpecHtml());
  }
  var presetEl = M.querySelector(".plz-rp-vehicle-preset");
  if (presetEl) presetEl.addEventListener("change", function () {
    var preset = VEHICLE_PRESETS[presetEl.value];
    if (!preset) return;
    M.querySelectorAll(".plz-rp-dim").forEach(function (input) { input.value = preset[input.dataset.key]; });
  });
  M.querySelectorAll(".plz-rp-dim").forEach(function (input) {
    input.addEventListener("input", function () { if (presetEl) presetEl.value = "custom"; });
  });

  // car mode = stops at OUR city POIs (camper-only service/tier filters hidden); camper = OSM camper sites
  function applyModeClass() { M.classList.toggle("mode-car", mode === "car"); M.classList.toggle("mode-camper", mode !== "car"); }
  applyModeClass();
  function setMode(m, b) {
    mode = m;
    M.querySelectorAll(".plz-rp-mode").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
    applyModeClass();
  }
  // ── Wohnmobil-kapuzás: csak ahol van camping-adat (Worker /countries → SUPPORTED) ──
  function ccOk(cc) { return !SUPPORTED || !cc || !!SUPPORTED[cc]; } // ismeretlen lista/cc → engedjük
  function applyCamperAvail() {
    var cb = M.querySelector('.plz-rp-mode[data-mode="camper"]');
    if (!cb) return;
    var ok = ccOk(PREFILL_CC);
    cb.style.display = ok ? "" : "none";               // nincs adat az ország POI-jára → camper gomb eltűnik
    if (!ok && mode === "camper") { var carb = M.querySelector('.plz-rp-mode[data-mode="car"]'); if (carb) setMode("car", carb); }
  }
  // az aktuális cél országkódja: AC-választás (dataset.cc) → előkitöltött (PREFILL_CC) → reverse-geocode
  function curDestCC() {
    var di = $(".plz-rp-dest");
    if (di && di.dataset.cc) return Promise.resolve(di.dataset.cc.toUpperCase());
    var v = di ? di.value.trim() : "";
    if (!v || (DEST_PREFILL.name && v === DEST_PREFILL.name)) return Promise.resolve(PREFILL_CC || null);
    return inputCoords(".plz-rp-dest", DEST_PREFILL.coords).then(function (c) {
      if (!c) return null;
      return fetch("https://photon.komoot.io/reverse?lang=en&lat=" + c[1] + "&lon=" + c[0])
        .then(function (r) { return r.json(); })
        .then(function (j) { var pr = j.features && j.features[0] && j.features[0].properties; return pr && pr.countrycode ? pr.countrycode.toUpperCase() : null; })
        .catch(function () { return null; });
    });
  }
  function showNoData(cc) {
    var name = cc || "";
    try { name = (new Intl.DisplayNames([LANG], { type: "region" })).of(cc) || cc; } catch (e) { }
    var old = M.querySelector(".plz-rp-pop"); if (old && old.parentNode) old.parentNode.removeChild(old);
    var ov = document.createElement("div"); ov.className = "plz-rp-pop";
    ov.innerHTML = '<div class="plz-rp-pop-card"><h4>🚐 ' + esc(NDC.title) + '</h4>'
      + '<p>' + (name ? '<b>' + esc(name) + '</b>: ' : '') + esc(NDC.body) + '</p>'
      + '<div class="plz-rp-pop-btns"><button type="button" class="plz-rp-pop-car">' + esc(NDC.car) + '</button>'
      + '<button type="button" class="plz-rp-pop-ok">' + esc(NDC.ok) + '</button></div></div>';
    M.appendChild(ov);
    function close() { if (ov.parentNode) ov.parentNode.removeChild(ov); }
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    ov.querySelector(".plz-rp-pop-ok").addEventListener("click", close);
    ov.querySelector(".plz-rp-pop-car").addEventListener("click", function () {
      var carb = M.querySelector('.plz-rp-mode[data-mode="car"]'); if (carb) setMode("car", carb); close();
    });
  }
  M.querySelectorAll(".plz-rp-mode").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.mode === "camper") {
        curDestCC().then(function (cc) {
          if (SUPPORTED && cc && !SUPPORTED[cc]) { showNoData(cc); return; } // nincs adat → marad autó
          setMode("camper", b);
        });
      } else setMode(b.dataset.mode, b);
    });
  });
  // lefedett országok lekérése (KV-ből, deploy nélkül friss) — bukásnál SUPPORTED=null marad → nem tilt
  fetch(WORKER_BASE + "/countries").then(function (r) { return r.json(); }).then(function (j) {
    if (j && j.ok && j.countries && j.countries.length) {
      SUPPORTED = {}; j.countries.forEach(function (c) { SUPPORTED[String(c).toUpperCase()] = 1; });
      applyCamperAvail();
    }
  }).catch(function () { });

  function geocode(q) {
    return fetch("https://photon.komoot.io/api?limit=1&lang=" + GEO_LANG + "&q=" + encodeURIComponent(q))
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j.features || !j.features.length) throw new Error(C.notFound + ": " + q);
        return j.features[0].geometry.coordinates;
      });
  }

  // ── Autocomplete (egyértelmű hely-választás, megöli a "rossz Lauingen" gondot) ──
  function attachAC(input) {
    if (!input) return;
    var label = input.parentNode;
    var box = document.createElement("div"); box.className = "plz-rp-ac"; box.style.display = "none";
    label.appendChild(box);
    var t = null, items = [], sel = -1;
    function close() { box.style.display = "none"; box.innerHTML = ""; items = []; sel = -1; }
    function choose(it) { input.value = it.label; input.dataset.lon = it.coords[0]; input.dataset.lat = it.coords[1]; if (it.cc) input.dataset.cc = it.cc; else input.removeAttribute("data-cc"); close(); }
    input.addEventListener("input", function () {
      input.removeAttribute("data-lon"); input.removeAttribute("data-lat"); input.removeAttribute("data-cc"); // gépelés → a kiválasztott koord/cc érvénytelen
      var q = input.value.trim();
      if (t) clearTimeout(t);
      if (q.length < 2) { close(); return; }
      t = setTimeout(function () {
        fetch("https://photon.komoot.io/api?limit=6&lang=" + GEO_LANG + "&q=" + encodeURIComponent(q))
          .then(function (r) { return r.json(); })
          .then(function (j) {
            items = (j.features || []).map(function (f) {
              var p = f.properties || {}, nm = p.name || "";
              var extra = [p.city, p.county].filter(function (x) { return x && x !== nm; }).slice(0, 1).join("");
              var sub = [extra, p.state, p.country || p.countrycode].filter(Boolean).join(" · ");
              return { label: nm, sub: sub, coords: f.geometry.coordinates, cc: (p.countrycode || "").toUpperCase() };
            }).filter(function (it) { return it.label; });
            if (!items.length) { close(); return; }
            box.innerHTML = items.map(function (it, i) { return '<div class="plz-rp-ac-item" data-i="' + i + '"><span class="nm">' + esc(it.label) + '</span><span class="sub">' + esc(it.sub) + '</span></div>'; }).join("");
            box.style.display = ""; sel = -1;
            box.querySelectorAll(".plz-rp-ac-item").forEach(function (elx) { elx.addEventListener("mousedown", function (e) { e.preventDefault(); choose(items[+elx.dataset.i]); }); });
          }).catch(function () { close(); });
      }, 280);
    });
    input.addEventListener("keydown", function (e) {
      if (box.style.display === "none") return;
      if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(sel + 1, items.length - 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(sel - 1, 0); }
      else if (e.key === "Enter" && sel >= 0) { e.preventDefault(); e.stopImmediatePropagation(); choose(items[sel]); return; }
      else if (e.key === "Escape") { close(); return; }
      else return;
      box.querySelectorAll(".plz-rp-ac-item").forEach(function (elx, i) { elx.classList.toggle("on", i === sel); });
    });
    input.addEventListener("blur", function () { setTimeout(close, 180); });
  }
  attachAC($(".plz-rp-origin")); attachAC($(".plz-rp-dest")); attachAC($(".plz-rp-via"));

  // koord-feloldás: ha a user a legördülőből választott (dataset coords) → azt; különben geocode limit=1; üres → fallback
  function inputCoords(sel, fallback) {
    var elx = $(sel); if (!elx) return Promise.resolve(fallback || null);
    if (elx.dataset.lon && elx.dataset.lat) return Promise.resolve([parseFloat(elx.dataset.lon), parseFloat(elx.dataset.lat)]);
    var v = elx.value.trim();
    if (!v) return Promise.resolve(fallback || null);
    if (sel === ".plz-rp-dest" && DEST_PREFILL.coords && DEST_PREFILL.name && v === DEST_PREFILL.name) return Promise.resolve(DEST_PREFILL.coords);
    return geocode(v);
  }
  function plan(req) {
    return fetch(WORKER, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(req) })
      .then(function (r) { return r.json(); })
      .then(function (data) { if (!data.ok) throw new Error(data.error || "Error"); return data; });
  }
  function readVehicle() {
    if (mode !== "camper") return null;
    var limits = { length: [3, 15], width: [1.5, 3.5], height: [1.8, 4.5], weight: [1, 20] };
    var vehicle = {}, valid = true;
    M.querySelectorAll(".plz-rp-dim").forEach(function (input) {
      var key = input.dataset.key, value = parseFloat(input.value), range = limits[key];
      if (!range || !isFinite(value) || value < range[0] || value > range[1]) valid = false;
      vehicle[key] = value;
    });
    return valid ? vehicle : null;
  }
  // a cél feloldása: ha van dest-input és a user nem írta át az előkitöltöttet → előkitöltött koord; különben geocode
  function resolveDest() {
    var di = $(".plz-rp-dest");
    if (!di) return Promise.resolve(DEST_PREFILL.coords); // régi beégetett (fix cél)
    var v = di.value.trim();
    if (DEST_PREFILL.coords && DEST_PREFILL.name && v === DEST_PREFILL.name) return Promise.resolve(DEST_PREFILL.coords);
    if (!v) return Promise.resolve(DEST_PREFILL.coords);
    return geocode(v);
  }
  function destNameNow() { var di = $(".plz-rp-dest"); return di ? (di.value.trim() || DEST_PREFILL.name) : DEST_PREFILL.name; }

  // Wohnmobil-mód tervezés előtt: ha a cél időközben támogatatlan országra változott → popup, nem tervezünk.
  function go() {
    if (mode === "camper") {
      curDestCC().then(function (cc) {
        if (SUPPORTED && cc && !SUPPORTED[cc]) { showNoData(cc); return; }
        _go();
      });
    } else _go();
  }
  function _go() {
    var stt = $(".plz-rp-status"), res = $(".plz-rp-result");
    var oEl = $(".plz-rp-origin"), dEl = $(".plz-rp-dest");
    var hasOrigin = oEl && (oEl.dataset.lon || oEl.value.trim());
    var hasDestVal = (dEl && (dEl.dataset.lon || dEl.value.trim())) || DEST_PREFILL.coords;
    var stops = parseInt($(".plz-rp-stops").value, 10);
    if (!hasOrigin || !hasDestVal) { stt.textContent = C.needBoth; return; }
    stt.textContent = C.searching; res.style.display = "none";
    var reqServices = Array.prototype.map.call(M.querySelectorAll(".plz-rp-svc:checked"), function (c) { return c.value; });
    var tiers = ({ AB: ["A", "B"], A: ["A"], B: ["B"], ABC: ["A", "B", "C"] })[$(".plz-rp-tier").value] || ["A", "B"];
    var vehicle = readVehicle();
    if (mode === "camper" && !vehicle) { stt.textContent = V.invalid; return; }
    var _bEl = $(".plz-rp-buffer"); var bufferKm = _bEl ? (parseInt(_bEl.value, 10) || 20) : 20; // buffer selector removed → fixed 20km corridor
    var origin, destination, destName = destNameNow();
    Promise.all([inputCoords(".plz-rp-origin"), inputCoords(".plz-rp-dest", DEST_PREFILL.coords), inputCoords(".plz-rp-via")]).then(function (r) {
      origin = r[0]; destination = r[1]; var baseAnchors = r[2] ? [r[2]] : [];
      if (!origin || !destination) throw new Error(C.needBoth);
      stt.textContent = C.routing;
      lastReq = { origin: origin, destination: destination, baseAnchors: baseAnchors, stops: stops, mode: mode, vehicle: vehicle, variant: 0, reqServices: reqServices, tiers: tiers, bufferKm: bufferKm, destName: destName };
      return plan({ origin: origin, destination: destination, anchors: baseAnchors, stops: stops, mode: mode, vehicle: vehicle, variant: 0, reqServices: reqServices, tiers: tiers, bufferKm: bufferKm });
    }).then(carify).then(function (data) { return refineCountries(data).then(function () { render(data); stt.textContent = ""; }); })
      .catch(function (e) { stt.textContent = "⚠️ " + e.message; });
  }

  // A Worker az országokat a korridor-bufferből (20km) veszi → a határ közeli (pl. olasz)
  // megállók is bekerülnek, pedig a route nem megy át rajtuk. A tényleges tranzit-országokat
  // a route-vonal mintapontjainak reverse-geocode-jából számoljuk, és kiszűrjük a hamis cc-ket.
  function refineCountries(d) {
    var pts = d.route || [];
    if (!pts.length || !d.advisory || !d.advisory.length) return Promise.resolve();
    var n = pts.length, S = 8, idx = {};
    for (var i = 0; i < S; i++) idx[Math.floor(i * (n - 1) / (S - 1))] = 1;
    var keys = Object.keys(idx).map(Number);
    return Promise.all(keys.map(function (i) {
      var p = pts[i];
      return fetch("https://photon.komoot.io/reverse?lang=en&lat=" + p[1] + "&lon=" + p[0])
        .then(function (r) { return r.json(); })
        .then(function (j) { var pr = j.features && j.features[0] && j.features[0].properties; return pr && pr.countrycode ? pr.countrycode.toUpperCase() : null; })
        .catch(function () { return null; });
    })).then(function (ccs) {
      var have = {}; ccs.filter(Boolean).forEach(function (c) { have[c] = 1; });
      if (!Object.keys(have).length) return; // reverse-geocode bukott → a Worker listája marad
      d.countries = (d.countries || []).filter(function (c) { return have[c]; });
      d.advisory = (d.advisory || []).filter(function (a) { return have[a.cc]; });
    });
  }

  // ── CAR mode: stops at OUR city POIs along the corridor (static cities-geo index) ──
  // The Worker already returns the route polyline; we pick N cities spaced by cumulative
  // distance, each linking to its own Plizio page. KV-free, mirrors the sights-geo pattern.
  var CBASE = "/data/cities-geo/", cMan = null, cCache = {};
  function cHav(la1, lo1, la2, lo2) {
    var R = 6371, d2r = Math.PI / 180, dLa = (la2 - la1) * d2r, dLo = (lo2 - lo1) * d2r;
    var a = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(la1 * d2r) * Math.cos(la2 * d2r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  function cLoadMan() { if (cMan) return Promise.resolve(cMan); return fetch(CBASE + "_manifest.json").then(function (r) { return r.json(); }).then(function (m) { cMan = m; return m; }).catch(function () { cMan = { cells: [] }; return cMan; }); }
  function cLoadCell(k) { if (cCache[k]) return Promise.resolve(cCache[k]); if (cMan && cMan.cells.indexOf(k) < 0) { cCache[k] = []; return Promise.resolve([]); } return fetch(CBASE + k + ".json").then(function (r) { return r.ok ? r.json() : []; }).then(function (a) { cCache[k] = a || []; return cCache[k]; }).catch(function () { cCache[k] = []; return []; }); }
  function cCellsForLine(line) { var s = {}; for (var i = 0; i < line.length; i++) { var latC = Math.floor(line[i][1]), lonC = Math.floor(line[i][0]); for (var dx = -1; dx <= 1; dx++) for (var dy = -1; dy <= 1; dy++) s[(latC + dx) + "_" + (lonC + dy)] = 1; } return Object.keys(s); }
  function gatherCities(line, bufferKm) {
    var cum = [0]; for (var i = 1; i < line.length; i++) cum.push(cum[i - 1] + cHav(line[i - 1][1], line[i - 1][0], line[i][1], line[i][0]));
    var total = cum[cum.length - 1];
    return cLoadMan().then(function () { return Promise.all(cCellsForLine(line).map(cLoadCell)); }).then(function (arrs) {
      var out = [], seen = {};
      arrs.forEach(function (a) {
        a.forEach(function (s) {
          var lon = s[0], lat = s[1], m = Infinity, bi = 0;
          for (var i = 0; i < line.length; i++) { var dd = cHav(lat, lon, line[i][1], line[i][0]); if (dd < m) { m = dd; bi = i; } }
          if (m > bufferKm) return;
          var key = lat.toFixed(4) + "," + lon.toFixed(4); if (seen[key]) return; seen[key] = 1;
          out.push({ lon: lon, lat: lat, nm: s[2], u: s[3], rank: s[4] || 2, dLine: m, alongKm: cum[bi] });
        });
      });
      return { cands: out, total: total };
    });
  }
  // Replace the Worker's camper day-plan with city stops (only in car mode).
  function carify(d) {
    if (!lastReq || lastReq.mode !== "car") return Promise.resolve(d);
    var line = d.route || [];
    if (line.length < 2) return Promise.resolve(d);
    var stopsWanted = Math.max(0, lastReq.stops | 0), bufferKm = lastReq.bufferKm || 20;
    var keep = (lastReq._keep || []); // [[lon,lat],...] fixed stops to honour on regen
    return gatherCities(line, bufferKm).then(function (res) {
      var cands = res.cands, total = res.total, seg = total / (stopsWanted + 1);
      var picks = [], used = {};
      // honour kept stops first (snap each to the nearest candidate)
      keep.forEach(function (kp) {
        var best = null, bd = Infinity;
        for (var i = 0; i < cands.length; i++) { if (used[i]) continue; var dd = cHav(kp[1], kp[0], cands[i].lat, cands[i].lon); if (dd < bd) { bd = dd; best = i; } }
        if (best != null && bd < 8) { used[best] = 1; picks.push(cands[best]); }
      });
      for (var k = 1; k <= stopsWanted - picks.length; k++) {
        var target = seg * picks.length + seg * k;
        if (target >= total) break;
        var bi2 = null, bs = Infinity;
        for (var j = 0; j < cands.length; j++) {
          var c = cands[j]; if (used[j]) continue;
          if (c.alongKm < seg * 0.25 || c.alongKm > total - seg * 0.25) continue;
          var dAlong = Math.abs(c.alongKm - target);
          var score = dAlong + c.dLine * 4 + c.rank * 12;
          if (score < bs) { bs = score; bi2 = j; }
        }
        if (bi2 != null) { used[bi2] = 1; picks.push(cands[bi2]); }
      }
      picks.sort(function (a, b) { return a.alongKm - b.alongKm; });
      var days = [];
      picks.forEach(function (c, i) {
        var name = (c.nm && (c.nm[LANG] || c.nm.en || c.nm.de)) || "";
        var url = (c.u && (c.u[LANG] || c.u.en || c.u.de)) || "";
        days.push({ day: i + 1, driveKmCumulative: Math.round(c.alongKm), overnight: { name: name, lat: c.lat, lon: c.lon, type: "city", poiUrl: url } });
      });
      days.push({ day: days.length + 1, driveKmCumulative: Math.round(total), overnight: null });
      d.days = days;
      d.summary = d.summary || {};
      d.summary.overnightStops = picks.length;
      d.eligibleStops = cands.length;
      return d;
    }).catch(function () { return d; });
  }

  function render(d) {
    var res = $(".plz-rp-result"); res.style.display = "";
    var dest = lastReq.destination, destName = lastReq.destName;
    var overnights = d.days.filter(function (x) { return x.overnight; }).map(function (x) { return x.overnight; });
    var pts = [lastReq.origin].concat(overnights.map(function (s) { return [s.lon, s.lat]; })).concat([dest]).map(function (p) { return p[1] + "," + p[0]; });
    var mapsAll = "https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=" + pts[0] + "&destination=" + pts[pts.length - 1];
    if (pts.length > 2) mapsAll += "&waypoints=" + encodeURIComponent(pts.slice(1, -1).join("|"));
    var h = '<div class="plz-rp-summary">'
      + '<div class="plz-rp-stat"><b>' + d.summary.km + '</b> ' + esc(C.km) + '</div>'
      + '<div class="plz-rp-stat"><b>' + d.summary.hours + '</b> ' + esc(C.hrs) + '</div>'
      + '<div class="plz-rp-stat"><b>' + (d.summary.overnightStops || 0) + '</b> ' + esc(C.nights) + '</div>'
      + '<div class="plz-rp-stat"><b>' + (d.eligibleStops != null ? d.eligibleStops : d.corridorStops) + '</b> ' + esc(C.matchStops) + '</div>'
      + '<a class="plz-rp-mapsall" href="' + mapsAll + '" target="_blank" rel="nofollow noopener">' + IC.map + ' ' + esc(C.mapsAll) + '</a></div>';
    if (d.advisory && d.advisory.length) {
      h += '<div class="plz-rp-adv"><h3>' + IC.warning + ' ' + esc(C.advisory) + ' (' + esc(d.countries.join(" · ")) + ')</h3>';
      d.advisory.forEach(function (a) {
        h += '<details class="plz-rp-advc"><summary>' + esc(a.name || a.cc) + ' <span>' + esc(a.cur || "") + '</span></summary><div class="plz-rp-advb">'
          + (a.toll ? '<div>' + IC.road + ' <b>' + esc(C.toll) + ':</b> ' + esc(a.toll) + '</div>' : '')
          + (a.lez && a.lez !== "—" ? '<div>' + IC.building + ' <b>' + esc(C.lez) + ':</b> ' + esc(a.lez) + '</div>' : '')
          + (a.wild ? '<div>' + IC.tent + ' <b>' + esc(C.overnight) + ':</b> ' + esc(a.wild) + '</div>' : '')
          + (a.equip ? '<div>' + IC.wrench + ' <b>' + esc(C.mandatory) + ':</b> ' + esc(a.equip) + '</div>' : '')
          + (a.note ? '<div class="plz-rp-muted">' + esc(a.note) + '</div>' : '') + '</div></details>';
      });
      h += '<p class="plz-rp-muted plz-rp-advnote">' + esc(d.advisoryNote || "") + '</p></div>';
    }
    var hasSC = (typeof window.PlzStopCard !== "undefined");
    h += '<div class="plz-rp-deck">';
    d.days.forEach(function (x) {
      var o = x.overnight;
      if (o) {
        var keep = '<label class="plz-rp-keep"><input type="checkbox" class="plz-rp-keepcb" data-lon="' + o.lon + '" data-lat="' + o.lat + '"> ' + esc(C.keepStop) + '</label>';
        if (hasSC) h += '<div class="plz-rp-card">' + window.PlzStopCard.render({ name: o.name || "", type: o.type, tier: o.tier, cc: o.cc, lat: o.lat, lon: o.lon, services: o.services, fee: o.fee, maxstay: o.maxstay, website: o.website, kmCum: x.driveKmCumulative, badge: C.day + " " + x.day, footerHtml: keep }) + '</div>';
        else h += '<div class="plz-rp-card plz-rp-cardfb"><div class="plz-rp-badge">' + C.day + " " + x.day + '</div><h4>' + esc(o.name || "") + '</h4><a href="https://www.google.com/maps/search/?api=1&query=' + o.lat + ',' + o.lon + '" target="_blank" rel="nofollow noopener">' + IC.map + ' Maps</a>' + keep + '</div>';
      } else {
        if (hasSC) h += '<div class="plz-rp-card">' + window.PlzStopCard.render({ name: destName || C.dest, lat: dest[1], lon: dest[0], kmCum: x.driveKmCumulative, badge: C.day + " " + x.day + " · " + C.dest }) + '</div>';
        else h += '<div class="plz-rp-card plz-rp-cardfb"><div class="plz-rp-badge">' + C.day + " " + x.day + " · " + C.dest + '</div><h4>' + esc(destName) + '</h4></div>';
      }
    });
    h += '</div>';
    var dotCount = d.days.length;
    if (dotCount > 1) {
      h += '<div class="plz-rp-dots" aria-hidden="true">';
      for (var di = 0; di < dotCount; di++) h += '<button type="button" class="plz-rp-dot' + (di === 0 ? ' active' : '') + '" data-i="' + di + '"></button>';
      h += '</div>';
    }
    h += '<p class="plz-rp-swipe">' + esc(C.swipe) + '</p><button class="plz-rp-regen" type="button">↻ ' + esc(C.regen) + '</button>';
    res.innerHTML = h;
    if (hasSC && window.PlzStopCard.hydrate) window.PlzStopCard.hydrate(res);
    // scroll → active-dot sync (mirrors the itinerary's .plz-itin-dot logic)
    var deck = res.querySelector(".plz-rp-deck"), dots = res.querySelectorAll(".plz-rp-dot");
    if (deck && dots.length) {
      var syncDots = function () {
        var w = deck.clientWidth, idx = Math.round(deck.scrollLeft / (w * 0.85));
        if (idx < 0) idx = 0; if (idx > dots.length - 1) idx = dots.length - 1;
        dots.forEach(function (dt, i) { dt.classList.toggle("active", i === idx); });
      };
      deck.addEventListener("scroll", syncDots, { passive: true });
      dots.forEach(function (dt, i) {
        dt.addEventListener("click", function () {
          var card = deck.children[i];
          if (card) deck.scrollTo({ left: card.offsetLeft - deck.offsetLeft, behavior: "smooth" });
        });
      });
    }
    var rg = res.querySelector(".plz-rp-regen");
    if (rg) rg.addEventListener("click", function () {
      var kept = Array.prototype.map.call(res.querySelectorAll(".plz-rp-keepcb:checked"), function (c) { return [parseFloat(c.dataset.lon), parseFloat(c.dataset.lat)]; });
      var stt = $(".plz-rp-status"), anchors, variant;
      if (kept.length) { anchors = (lastReq.baseAnchors || []).concat(kept); variant = 0; stt.textContent = C.regenKept; }
      else { anchors = lastReq.baseAnchors || []; variant = (lastReq.variant || 0) + 1; stt.textContent = C.regenNew; }
      lastReq.variant = variant;
      lastReq._keep = kept; // car mode: snap kept city stops back in after re-picking
      plan({ origin: lastReq.origin, destination: lastReq.destination, anchors: anchors, stops: lastReq.stops, mode: lastReq.mode, vehicle: lastReq.vehicle, variant: variant, reqServices: lastReq.reqServices, tiers: lastReq.tiers, bufferKm: lastReq.bufferKm })
        .then(carify).then(function (data) { return refineCountries(data).then(function () { render(data); stt.textContent = ""; }); }).catch(function (e) { stt.textContent = "⚠️ " + e.message; });
    });
  }

  var goBtn = $(".plz-rp-go");
  if (goBtn) goBtn.addEventListener("click", go);
  var oi = $(".plz-rp-origin");
  if (oi) oi.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
})();
