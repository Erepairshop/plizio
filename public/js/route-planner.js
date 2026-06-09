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

  var COPY = {
    de: { h: "Routenplaner — Auto & Wohnmobil", sub: "Start und Ziel eingeben — wir bauen die Route mit Stopps und Länder-Hinweisen.", from: "Start", fromPh: "z.B. München", dest: "Ziel", destPh: "z.B. Lyon", via: "Über (optional)", viaPh: "z.B. Zagreb", nights: "Übernachtungs-Stopps", vehicle: "Fahrzeug", car: "🚗 Auto", camper: "🚐 Wohnmobil", filter: "Nur Stopps mit (optional):", water: "💧 Wasser", dump: "♻️ Entsorgung", power: "🔌 Strom", wc: "🚻 WC", shower: "🚿 Dusche", tierAB: "Stellplätze + Camping", tierA: "Nur Stellplätze", tierB: "Nur Camping", tierABC: "Auch Natur-/Rastplätze", b10: "Umweg max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Route planen" },
    hu: { h: "Útvonaltervező — Autó & Lakóautó", sub: "Add meg az indulást és a célt — megtervezzük az utat megállókkal és ország-tudnivalókkal.", from: "Indulás", fromPh: "pl. Budapest", dest: "Cél", destPh: "pl. Lyon", via: "Érintve (opcionális)", viaPh: "pl. Zagreb", nights: "Éjszakai megállók", vehicle: "Jármű", car: "🚗 Autó", camper: "🚐 Lakóautó", filter: "Csak megállók ezzel (opcionális):", water: "💧 Víz", dump: "♻️ Ürítő", power: "🔌 Áram", wc: "🚻 WC", shower: "🚿 Zuhany", tierAB: "Stellplatz + kemping", tierA: "Csak Stellplatz", tierB: "Csak kemping", tierABC: "Pihenő-/natúrhelyek is", b10: "Kitérő max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Útvonal tervezése" },
    en: { h: "Route planner — Car & Motorhome", sub: "Enter start and destination — we build the route with stops and country notes.", from: "Start", fromPh: "e.g. Munich", dest: "Destination", destPh: "e.g. Lyon", via: "Via (optional)", viaPh: "e.g. Zagreb", nights: "Overnight stops", vehicle: "Vehicle", car: "🚗 Car", camper: "🚐 Motorhome", filter: "Only stops with (optional):", water: "💧 Water", dump: "♻️ Disposal", power: "🔌 Power", wc: "🚻 Toilets", shower: "🚿 Shower", tierAB: "Aires + campsites", tierA: "Aires only", tierB: "Campsites only", tierABC: "Also rest/nature areas", b10: "Detour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Plan route" },
    ro: { h: "Planificator traseu — Mașină & Rulotă", sub: "Introdu plecarea și destinația — construim traseul cu opriri și informații pe țări.", from: "Plecare", fromPh: "ex. Cluj", dest: "Destinație", destPh: "ex. Lyon", via: "Prin (opțional)", viaPh: "ex. Zagreb", nights: "Opriri peste noapte", vehicle: "Vehicul", car: "🚗 Mașină", camper: "🚐 Rulotă", filter: "Doar opriri cu (opțional):", water: "💧 Apă", dump: "♻️ Golire", power: "🔌 Curent", wc: "🚻 Toaletă", shower: "🚿 Duș", tierAB: "Popasuri + camping", tierA: "Doar popasuri", tierB: "Doar camping", tierABC: "Și locuri de odihnă/natură", b10: "Ocol max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Planifică traseul" },
    fr: { h: "Planificateur — Voiture & Camping-car", sub: "Indiquez départ et destination — nous construisons l'itinéraire avec étapes et infos par pays.", from: "Départ", fromPh: "ex. Paris", dest: "Destination", destPh: "ex. Lyon", via: "Via (optionnel)", viaPh: "ex. Zagreb", nights: "Étapes nuitées", vehicle: "Véhicule", car: "🚗 Voiture", camper: "🚐 Camping-car", filter: "Étapes avec (optionnel) :", water: "💧 Eau", dump: "♻️ Vidange", power: "🔌 Électricité", wc: "🚻 WC", shower: "🚿 Douche", tierAB: "Aires + campings", tierA: "Aires seulement", tierB: "Campings seulement", tierABC: "Aussi aires nature/repos", b10: "Détour max 10 km", b20: "max 20 km", b30: "max 30 km", b50: "max 50 km", plan: "🧭 Planifier" },
  };
  var DYN = {
    de: { notFound: "Ort nicht gefunden", needBoth: "Bitte Start und Ziel eingeben.", searching: "📍 Orte werden gesucht…", routing: "🛣️ Route wird berechnet…", km: "km", hrs: "Std.", nights: "Übernachtungen", matchStops: "passende Stopps", mapsAll: "Ganze Route in Maps", advisory: "Länder-Hinweise", toll: "Maut", lez: "Umweltzone", overnight: "Übernachten", mandatory: "Pflicht", keepStop: "diesen Stopp behalten", day: "TAG", dest: "ZIEL", swipe: "← Karten wischen →", regen: "Neu generieren — behaltene Stopps fixieren", regenKept: "🔄 Route mit behaltenen Stopps…", regenNew: "🔄 Neue Variante…" },
    hu: { notFound: "A hely nem található", needBoth: "Add meg az indulást és a célt.", searching: "📍 Helyek keresése…", routing: "🛣️ Útvonal számítása…", km: "km", hrs: "óra", nights: "éjszaka", matchStops: "találó megálló", mapsAll: "Teljes útvonal Mapsben", advisory: "Ország-tudnivalók", toll: "Útdíj", lez: "Környezeti zóna", overnight: "Éjszakázás", mandatory: "Kötelező", keepStop: "ezt a megállót megtartom", day: "NAP", dest: "CÉL", swipe: "← húzd a kártyákat →", regen: "Újragenerálás — megtartottak rögzítése", regenKept: "🔄 Útvonal a megtartottakkal…", regenNew: "🔄 Új variáció…" },
    en: { notFound: "Place not found", needBoth: "Please enter start and destination.", searching: "📍 Locating…", routing: "🛣️ Calculating route…", km: "km", hrs: "h", nights: "nights", matchStops: "matching stops", mapsAll: "Whole route in Maps", advisory: "Country notes", toll: "Toll", lez: "Low-emission zone", overnight: "Overnight", mandatory: "Required", keepStop: "keep this stop", day: "DAY", dest: "GOAL", swipe: "← swipe cards →", regen: "Regenerate — fix kept stops", regenKept: "🔄 Route with kept stops…", regenNew: "🔄 New variant…" },
    ro: { notFound: "Locul nu a fost găsit", needBoth: "Introdu plecarea și destinația.", searching: "📍 Se caută locurile…", routing: "🛣️ Se calculează traseul…", km: "km", hrs: "ore", nights: "nopți", matchStops: "opriri potrivite", mapsAll: "Tot traseul în Maps", advisory: "Informații pe țări", toll: "Taxă drum", lez: "Zonă ecologică", overnight: "Înnoptare", mandatory: "Obligatoriu", keepStop: "păstrează această oprire", day: "ZIUA", dest: "ȚINTĂ", swipe: "← glisează →", regen: "Regenerează — fixează opririle păstrate", regenKept: "🔄 Traseu cu opririle păstrate…", regenNew: "🔄 Variantă nouă…" },
    fr: { notFound: "Lieu introuvable", needBoth: "Entrez départ et destination.", searching: "📍 Recherche…", routing: "🛣️ Calcul de l'itinéraire…", km: "km", hrs: "h", nights: "nuitées", matchStops: "étapes", mapsAll: "Tout l'itinéraire dans Maps", advisory: "Infos par pays", toll: "Péage", lez: "Zone à faibles émissions", overnight: "Nuitée", mandatory: "Obligatoire", keepStop: "garder cette étape", day: "JOUR", dest: "BUT", swipe: "← faites glisser →", regen: "Régénérer — fixer les étapes gardées", regenKept: "🔄 Itinéraire avec étapes gardées…", regenNew: "🔄 Nouvelle variante…" },
  };
  var T = COPY[LANG] || COPY.en, C = DYN[LANG] || DYN.en;

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function $(s) { return M.querySelector(s); }

  // ── CSS (egyszeri injektálás) ───────────────────────────────────────────────
  var CSS = '#plz-route-planner.plz-rp{margin:1.4rem 0;background:rgba(0,8,20,.55);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1rem 1.05rem 1.15rem;color:#e6ecf3}'
    + '.plz-rp-head h2{font-size:1.1rem;margin:0 0 .2rem;display:flex;align-items:center;gap:.4rem}'
    + '.plz-rp-head p{font-size:.84rem;color:rgba(230,236,243,.62);margin:.15rem 0 .8rem}'
    + '.plz-rp-row{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:.6rem}'
    + '.plz-rp-row>label,.plz-rp-vehicle{flex:1 1 160px;display:flex;flex-direction:column;font-size:.74rem;color:rgba(230,236,243,.6);gap:.25rem}'
    + '.plz-rp input,.plz-rp select{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:9px;padding:.5rem .6rem;color:#e6ecf3;font-size:.9rem;color-scheme:dark}'
    + '.plz-rp input:focus,.plz-rp select:focus{outline:none;border-color:#4cc6ff}'
    + '.plz-rp-vehbtns{display:flex;border:1px solid rgba(255,255,255,.14);border-radius:9px;overflow:hidden}'
    + '.plz-rp-mode{flex:1;padding:.5rem;background:rgba(255,255,255,.04);color:rgba(230,236,243,.6);border:none;cursor:pointer;font-size:.85rem}'
    + '.plz-rp-mode[aria-selected="true"]{background:#4cc6ff;color:#0a0f1c;font-weight:700}'
    + '.plz-rp-filters{display:flex;flex-wrap:wrap;gap:.45rem;align-items:center;margin:.2rem 0 .7rem}'
    + '.plz-rp-flabel{flex:1 0 100%;font-size:.74rem;color:rgba(230,236,243,.6)}'
    + '.plz-rp-svcl{font-size:.8rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:.28rem .6rem;cursor:pointer;display:inline-flex;gap:.25rem;align-items:center}'
    + '.plz-rp-go{width:100%;padding:.7rem;border:none;border-radius:999px;background:linear-gradient(135deg,#4cc6ff,#7dd87a);color:#06121f;font-weight:800;font-size:.98rem;cursor:pointer}'
    + '.plz-rp-go:hover{opacity:.92}'
    + '.plz-rp-status{text-align:center;font-size:.82rem;color:rgba(230,236,243,.6);min-height:1.1em;margin-top:.5rem}'
    + '.plz-rp-result{margin-top:1rem;display:flex;flex-direction:column;gap:.9rem}'
    + '.plz-rp-summary{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem 1.1rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:.7rem .9rem}'
    + '.plz-rp-stat b{font-size:1.35rem}.plz-rp-stat{font-size:.78rem;color:rgba(230,236,243,.6)}'
    + '.plz-rp-mapsall{margin-left:auto;background:linear-gradient(135deg,#4cc6ff,#7dd87a);color:#06121f;font-weight:700;font-size:.82rem;padding:.4rem .8rem;border-radius:999px;text-decoration:none}'
    + '.plz-rp-adv{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.7rem .9rem}'
    + '.plz-rp-adv h3{font-size:.92rem;margin:0 0 .5rem}'
    + '.plz-rp-advc{background:rgba(255,255,255,.05);border-radius:9px;padding:.45rem .6rem;margin-bottom:.4rem}'
    + '.plz-rp-advc summary{cursor:pointer;font-weight:600;font-size:.86rem}.plz-rp-advc summary span{color:rgba(230,236,243,.45);font-size:.76rem}'
    + '.plz-rp-advb{font-size:.82rem;color:rgba(230,236,243,.78);margin-top:.4rem;display:flex;flex-direction:column;gap:.2rem}'
    + '.plz-rp-muted{color:rgba(230,236,243,.45)}.plz-rp-advnote{font-size:.74rem;margin:.4rem 0 0}'
    + '.plz-rp-deck{display:flex;gap:.7rem;overflow-x:auto;scroll-snap-type:x mandatory;padding:.2rem .1rem .6rem;scrollbar-width:thin}'
    + '.plz-rp-card{flex:0 0 min(86%,330px);scroll-snap-align:center}'
    + '.plz-rp-cardfb{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:.8rem}'
    + '.plz-rp-cardfb h4{margin:.3rem 0;font-size:.95rem}.plz-rp-cardfb a{color:#4cc6ff;text-decoration:none;font-size:.84rem}'
    + '.plz-rp-badge{font-size:.72rem;font-weight:700;color:#4cc6ff;letter-spacing:.05em}'
    + '.plz-rp-keep{display:flex;align-items:center;gap:.35rem;font-size:.8rem;color:rgba(230,236,243,.65);margin-top:.5rem;cursor:pointer}'
    + '.plz-rp-swipe{text-align:center;font-size:.74rem;color:rgba(230,236,243,.4);margin:.1rem 0}'
    + '.plz-rp-regen{width:100%;padding:.6rem;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#e6ecf3;font-weight:600;cursor:pointer}'
    + '.plz-rp-regen:hover{background:rgba(255,255,255,.12)}'
    + '.plz-rp-credit{font-size:.7rem;color:rgba(230,236,243,.38);margin:.7rem 0 0;text-align:center}'
    + '@media(max-width:560px){.plz-rp-card{flex:0 0 calc(100% - .6rem)}}';
  if (!document.getElementById("plz-rp-css")) {
    var st = document.createElement("style"); st.id = "plz-rp-css"; st.textContent = CSS; document.head.appendChild(st);
  }

  // ── UI felépítése (ha még nincs beégetve) ───────────────────────────────────
  var hasDest = false;
  if (!M.querySelector(".plz-rp-origin")) {
    M.classList.add("plz-rp");
    var stopsOpts = ""; for (var n = 1; n <= 8; n++) stopsOpts += '<option' + (n === 2 ? " selected" : "") + '>' + n + '</option>';
    var svcDefs = [["water", T.water], ["dump", T.dump], ["power", T.power], ["toilets", T.wc], ["shower", T.shower]];
    var svcHtml = svcDefs.map(function (p) { return '<label class="plz-rp-svcl"><input type="checkbox" class="plz-rp-svc" value="' + p[0] + '"> ' + esc(p[1]) + '</label>'; }).join("");
    M.innerHTML =
      '<div class="plz-rp-head"><h2>' + esc(T.h) + '</h2><p>' + esc(T.sub) + '</p></div>'
      + '<div class="plz-rp-row">'
      + '<label>' + esc(T.from) + '<input class="plz-rp-origin" type="text" placeholder="' + esc(T.fromPh) + '"></label>'
      + '<label>' + esc(T.dest) + '<input class="plz-rp-dest" type="text" placeholder="' + esc(T.destPh) + '" value="' + esc(DEST_PREFILL.name) + '"></label>'
      + '</div><div class="plz-rp-row">'
      + '<label>' + esc(T.via) + '<input class="plz-rp-via" type="text" placeholder="' + esc(T.viaPh) + '"></label>'
      + '<label>' + esc(T.nights) + '<select class="plz-rp-stops">' + stopsOpts + '</select></label>'
      + '</div><div class="plz-rp-row"><div class="plz-rp-vehicle">' + esc(T.vehicle)
      + '<div class="plz-rp-vehbtns"><button type="button" class="plz-rp-mode" data-mode="car" aria-selected="true">' + esc(T.car) + '</button><button type="button" class="plz-rp-mode" data-mode="camper" aria-selected="false">' + esc(T.camper) + '</button></div></div></div>'
      + '<div class="plz-rp-filters"><span class="plz-rp-flabel">' + esc(T.filter) + '</span>' + svcHtml
      + '<select class="plz-rp-tier"><option value="AB">' + esc(T.tierAB) + '</option><option value="A">' + esc(T.tierA) + '</option><option value="B">' + esc(T.tierB) + '</option><option value="ABC">' + esc(T.tierABC) + '</option></select>'
      + '<select class="plz-rp-buffer"><option value="10">' + esc(T.b10) + '</option><option value="20" selected>' + esc(T.b20) + '</option><option value="30">' + esc(T.b30) + '</option><option value="50">' + esc(T.b50) + '</option></select></div>'
      + '<button type="button" class="plz-rp-go">' + esc(T.plan) + '</button>'
      + '<div class="plz-rp-status"></div><div class="plz-rp-result" style="display:none"></div>'
      + '<p class="plz-rp-credit">© OpenStreetMap contributors · OpenRouteService</p>';
    hasDest = true;
  } else {
    hasDest = !!M.querySelector(".plz-rp-dest");
  }

  M.querySelectorAll(".plz-rp-mode").forEach(function (b) {
    b.addEventListener("click", function () {
      mode = b.dataset.mode;
      M.querySelectorAll(".plz-rp-mode").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
    });
  });

  function geocode(q) {
    return fetch("https://photon.komoot.io/api?limit=1&lang=" + GEO_LANG + "&q=" + encodeURIComponent(q))
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j.features || !j.features.length) throw new Error(C.notFound + ": " + q);
        return j.features[0].geometry.coordinates;
      });
  }
  function plan(req) {
    return fetch(WORKER, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(req) })
      .then(function (r) { return r.json(); })
      .then(function (data) { if (!data.ok) throw new Error(data.error || "Error"); return data; });
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

  function go() {
    var stt = $(".plz-rp-status"), res = $(".plz-rp-result");
    var o = $(".plz-rp-origin").value.trim(), v = $(".plz-rp-via").value.trim();
    var stops = parseInt($(".plz-rp-stops").value, 10);
    if (!o || (hasDest && !$(".plz-rp-dest").value.trim() && !DEST_PREFILL.coords)) { stt.textContent = C.needBoth; return; }
    stt.textContent = C.searching; res.style.display = "none";
    var reqServices = Array.prototype.map.call(M.querySelectorAll(".plz-rp-svc:checked"), function (c) { return c.value; });
    var tiers = ({ AB: ["A", "B"], A: ["A"], B: ["B"], ABC: ["A", "B", "C"] })[$(".plz-rp-tier").value] || ["A", "B"];
    var bufferKm = parseInt($(".plz-rp-buffer").value, 10) || 20;
    var origin, destination, destName = destNameNow();
    Promise.all([geocode(o), resolveDest(), v ? geocode(v) : Promise.resolve(null)]).then(function (r) {
      origin = r[0]; destination = r[1]; var baseAnchors = r[2] ? [r[2]] : [];
      if (!destination) throw new Error(C.needBoth);
      stt.textContent = C.routing;
      lastReq = { origin: origin, destination: destination, baseAnchors: baseAnchors, stops: stops, mode: mode, variant: 0, reqServices: reqServices, tiers: tiers, bufferKm: bufferKm, destName: destName };
      return plan({ origin: origin, destination: destination, anchors: baseAnchors, stops: stops, mode: mode, variant: 0, reqServices: reqServices, tiers: tiers, bufferKm: bufferKm });
    }).then(function (data) { render(data); stt.textContent = ""; })
      .catch(function (e) { stt.textContent = "⚠️ " + e.message; });
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
      + '<a class="plz-rp-mapsall" href="' + mapsAll + '" target="_blank" rel="nofollow noopener">🗺️ ' + esc(C.mapsAll) + '</a></div>';
    if (d.advisory && d.advisory.length) {
      h += '<div class="plz-rp-adv"><h3>⚠️ ' + esc(C.advisory) + ' (' + esc(d.countries.join(" · ")) + ')</h3>';
      d.advisory.forEach(function (a) {
        h += '<details class="plz-rp-advc"><summary>' + esc(a.name || a.cc) + ' <span>' + esc(a.cur || "") + '</span></summary><div class="plz-rp-advb">'
          + (a.toll ? '<div>🛣️ <b>' + esc(C.toll) + ':</b> ' + esc(a.toll) + '</div>' : '')
          + (a.lez && a.lez !== "—" ? '<div>🏙️ <b>' + esc(C.lez) + ':</b> ' + esc(a.lez) + '</div>' : '')
          + (a.wild ? '<div>🏕️ <b>' + esc(C.overnight) + ':</b> ' + esc(a.wild) + '</div>' : '')
          + (a.equip ? '<div>🧰 <b>' + esc(C.mandatory) + ':</b> ' + esc(a.equip) + '</div>' : '')
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
        else h += '<div class="plz-rp-card plz-rp-cardfb"><div class="plz-rp-badge">' + C.day + " " + x.day + '</div><h4>' + esc(o.name || "") + '</h4><a href="https://www.google.com/maps/search/?api=1&query=' + o.lat + ',' + o.lon + '" target="_blank" rel="nofollow noopener">🗺️ Maps</a>' + keep + '</div>';
      } else {
        if (hasSC) h += '<div class="plz-rp-card">' + window.PlzStopCard.render({ name: destName || C.dest, lat: dest[1], lon: dest[0], kmCum: x.driveKmCumulative, badge: C.day + " " + x.day + " · " + C.dest }) + '</div>';
        else h += '<div class="plz-rp-card plz-rp-cardfb"><div class="plz-rp-badge">' + C.day + " " + x.day + " · " + C.dest + '</div><h4>' + esc(destName) + '</h4></div>';
      }
    });
    h += '</div><p class="plz-rp-swipe">' + esc(C.swipe) + '</p><button class="plz-rp-regen" type="button">↻ ' + esc(C.regen) + '</button>';
    res.innerHTML = h;
    if (hasSC && window.PlzStopCard.hydrate) window.PlzStopCard.hydrate(res);
    var rg = res.querySelector(".plz-rp-regen");
    if (rg) rg.addEventListener("click", function () {
      var kept = Array.prototype.map.call(res.querySelectorAll(".plz-rp-keepcb:checked"), function (c) { return [parseFloat(c.dataset.lon), parseFloat(c.dataset.lat)]; });
      var stt = $(".plz-rp-status"), anchors, variant;
      if (kept.length) { anchors = (lastReq.baseAnchors || []).concat(kept); variant = 0; stt.textContent = C.regenKept; }
      else { anchors = lastReq.baseAnchors || []; variant = (lastReq.variant || 0) + 1; stt.textContent = C.regenNew; }
      lastReq.variant = variant;
      plan({ origin: lastReq.origin, destination: lastReq.destination, anchors: anchors, stops: lastReq.stops, mode: lastReq.mode, variant: variant, reqServices: lastReq.reqServices, tiers: lastReq.tiers, bufferKm: lastReq.bufferKm })
        .then(function (data) { render(data); stt.textContent = ""; }).catch(function (e) { stt.textContent = "⚠️ " + e.message; });
    });
  }

  var goBtn = $(".plz-rp-go");
  if (goBtn) goBtn.addEventListener("click", go);
  var oi = $(".plz-rp-origin");
  if (oi) oi.addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
})();
