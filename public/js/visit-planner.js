/* Plizio visit planner — builds a walking route around the current POI from
   its real nearby-POI graph. Data is embedded per page as a JSON <script>;
   labels/types live here (shared cached file). List + walk times, no map.
   Only rendered on non-PlizioGo POIs (PlizioGo has its own day itinerary). */
(function () {
  "use strict";

  // type -> minutes + which vibes it belongs to (language-independent keys)
  var TYPE_META = {
    cathedral: { v: ["culture", "mix"], m: 30 }, church: { v: ["culture", "mix"], m: 25 },
    historical: { v: ["culture", "mix"], m: 25 }, monument: { v: ["culture", "mix"], m: 15 },
    memorial: { v: ["culture", "mix"], m: 20 }, landmark: { v: ["culture", "family", "mix"], m: 35 },
    museum: { v: ["culture", "family", "mix"], m: 60 }, castle: { v: ["culture", "family", "mix"], m: 50 },
    fortress: { v: ["culture", "family", "mix"], m: 45 }, palace: { v: ["culture", "family", "mix"], m: 50 },
    tower: { v: ["culture", "family", "mix"], m: 25 }, ruins: { v: ["culture", "mix"], m: 30 },
    theatre: { v: ["culture", "mix"], m: 30 }, square: { v: ["culture", "mix"], m: 20 },
    park: { v: ["nature", "family", "mix"], m: 45 }, garden: { v: ["nature", "family", "mix"], m: 40 },
    river: { v: ["nature", "mix"], m: 20 }, lake: { v: ["nature", "mix"], m: 25 },
    waterfall: { v: ["nature", "mix"], m: 20 }, viewpoint: { v: ["nature", "mix"], m: 20 },
    mountain: { v: ["nature", "mix"], m: 40 }, forest: { v: ["nature", "mix"], m: 40 },
    beach: { v: ["nature", "family", "mix"], m: 60 }, nature: { v: ["nature", "mix"], m: 35 },
    "kid-landmark": { v: ["family", "mix"], m: 90 }, zoo: { v: ["family", "mix"], m: 90 },
    aquarium: { v: ["family", "mix"], m: 60 }, market: { v: ["family", "mix"], m: 30 }
  };
  var WALK_MIN_PER_KM = 12;          // ~5 km/h
  var DRIVE_MIN_PER_KM = 2;          // ~40 km/h incl. ~1.35x road detour
  var PARK_MIN = 5;                  // parking/getting-out overhead per drive leg

  var L = {
    de: { sub: "Stell ein, wie viel Zeit du hast und was dich interessiert — wir bauen eine Route aus Orten in der Nähe.", time: "Wie viel Zeit?", t1: "2 Std", t2: "Halber Tag", t3: "Ganzer Tag", interest: "Was interessiert dich?", culture: "Kultur & Geschichte", nature: "Natur & draußen", family: "Familie", mix: "Gemischt", build: "Route erstellen", day: "Dein Tag", stops: "Stationen", walk: "Min Fußweg", drive: "Min Fahrt", transport: "Wie unterwegs?", foot: "Zu Fuß", car: "Mit dem Auto", min: "Min", save: "Plan speichern", clear: "Löschen", saved: "✓ Auf diesem Gerät gespeichert.", empty: "Zu wenige Orte in der Nähe für dieses Thema. Probier ein anderes Thema oder mehr Zeit.", types: { cathedral: "Kirche", church: "Kirche", historical: "Historischer Ort", monument: "Denkmal", memorial: "Gedenkstätte", landmark: "Sehenswürdigkeit", museum: "Museum", castle: "Schloss", fortress: "Festung", palace: "Palast", tower: "Turm", ruins: "Ruine", theatre: "Theater", square: "Platz", park: "Park", garden: "Garten", river: "Fluss", lake: "See", waterfall: "Wasserfall", viewpoint: "Aussichtspunkt", mountain: "Berg", forest: "Wald", beach: "Strand", nature: "Natur", "kid-landmark": "Familienziel", zoo: "Zoo", aquarium: "Aquarium", market: "Markt" } },
    hu: { sub: "Állítsd be, mennyi időd van és mi érdekel — összerakunk egy útvonalat a környékbeli helyekből.", time: "Mennyi időm van?", t1: "2 óra", t2: "Fél nap", t3: "Egész nap", interest: "Mi érdekel?", culture: "Kultúra & történelem", nature: "Természet & szabadtér", family: "Családi", mix: "Vegyes", build: "Útvonal készítése", day: "A te napod", stops: "megálló", walk: "perc séta", drive: "perc autóval", transport: "Hogyan közlekedsz?", foot: "Gyalog", car: "Autóval", min: "perc", save: "Terv mentése", clear: "Törlés", saved: "✓ Elmentve erre az eszközre.", empty: "Ehhez a témához kevés a közeli hely. Próbálj másik témát vagy hosszabb időt.", types: { cathedral: "Templom", church: "Templom", historical: "Történelmi hely", monument: "Emlékmű", memorial: "Emlékhely", landmark: "Nevezetesség", museum: "Múzeum", castle: "Kastély", fortress: "Erőd", palace: "Palota", tower: "Torony", ruins: "Rom", theatre: "Színház", square: "Tér", park: "Park", garden: "Kert", river: "Folyó", lake: "Tó", waterfall: "Vízesés", viewpoint: "Kilátó", mountain: "Hegy", forest: "Erdő", beach: "Strand", nature: "Természet", "kid-landmark": "Gyerekprogram", zoo: "Állatkert", aquarium: "Akvárium", market: "Piac" } },
    ro: { sub: "Setează cât timp ai și ce te interesează — construim un traseu din locuri din apropiere.", time: "Cât timp ai?", t1: "2 ore", t2: "Jumătate de zi", t3: "Toată ziua", interest: "Ce te interesează?", culture: "Cultură & istorie", nature: "Natură & aer liber", family: "Familie", mix: "Variat", build: "Creează traseul", day: "Ziua ta", stops: "opriri", walk: "min de mers", drive: "min cu mașina", transport: "Cum te deplasezi?", foot: "Pe jos", car: "Cu mașina", min: "min", save: "Salvează planul", clear: "Șterge", saved: "✓ Salvat pe acest dispozitiv.", empty: "Prea puține locuri în apropiere pentru această temă. Încearcă altă temă sau mai mult timp.", types: { cathedral: "Biserică", church: "Biserică", historical: "Loc istoric", monument: "Monument", memorial: "Memorial", landmark: "Obiectiv", museum: "Muzeu", castle: "Castel", fortress: "Cetate", palace: "Palat", tower: "Turn", ruins: "Ruine", theatre: "Teatru", square: "Piață", park: "Parc", garden: "Grădină", river: "Râu", lake: "Lac", waterfall: "Cascadă", viewpoint: "Belvedere", mountain: "Munte", forest: "Pădure", beach: "Plajă", nature: "Natură", "kid-landmark": "Pentru copii", zoo: "Grădină zoologică", aquarium: "Acvariu", market: "Piață" } },
    en: { sub: "Set how much time you have and what you're into — we'll build a route from places nearby.", time: "How much time?", t1: "2 hours", t2: "Half day", t3: "Full day", interest: "What are you into?", culture: "Culture & history", nature: "Nature & outdoors", family: "Family", mix: "Mixed", build: "Build route", day: "Your day", stops: "stops", walk: "min walk", min: "min", save: "Save plan", clear: "Clear", saved: "✓ Saved on this device.", empty: "Too few places nearby for this theme. Try another theme or more time.", types: { cathedral: "Cathedral", church: "Church", historical: "Historical site", monument: "Monument", memorial: "Memorial", landmark: "Landmark", museum: "Museum", castle: "Castle", fortress: "Fortress", palace: "Palace", tower: "Tower", ruins: "Ruins", theatre: "Theatre", square: "Square", park: "Park", garden: "Garden", river: "River", lake: "Lake", waterfall: "Waterfall", viewpoint: "Viewpoint", mountain: "Mountain", forest: "Forest", beach: "Beach", nature: "Nature", "kid-landmark": "Family spot", zoo: "Zoo", aquarium: "Aquarium", market: "Market" } },
    hr: { sub: "Postavi koliko imaš vremena i što te zanima — složit ćemo rutu od mjesta u blizini.", time: "Koliko vremena?", t1: "2 sata", t2: "Pola dana", t3: "Cijeli dan", interest: "Što te zanima?", culture: "Kultura i povijest", nature: "Priroda", family: "Obitelj", mix: "Mješovito", build: "Složi rutu", day: "Tvoj dan", stops: "postaja", walk: "min hoda", min: "min", save: "Spremi plan", clear: "Obriši", saved: "✓ Spremljeno na uređaj.", empty: "Premalo mjesta u blizini za ovu temu. Probaj drugu temu ili više vremena.", types: { cathedral: "Crkva", church: "Crkva", historical: "Povijesno mjesto", monument: "Spomenik", memorial: "Spomen-mjesto", landmark: "Znamenitost", museum: "Muzej", castle: "Dvorac", fortress: "Tvrđava", palace: "Palača", tower: "Toranj", ruins: "Ruševine", theatre: "Kazalište", square: "Trg", park: "Park", garden: "Vrt", river: "Rijeka", lake: "Jezero", waterfall: "Slap", viewpoint: "Vidikovac", mountain: "Planina", forest: "Šuma", beach: "Plaža", nature: "Priroda", "kid-landmark": "Za djecu", zoo: "Zoo", aquarium: "Akvarij", market: "Tržnica" } },
    fr: { sub: "Indique combien de temps tu as et ce qui t'intéresse — on te bâtit un itinéraire à partir des lieux proches.", time: "Combien de temps ?", t1: "2 h", t2: "Demi-journée", t3: "Journée", interest: "Qu'est-ce qui t'intéresse ?", culture: "Culture & histoire", nature: "Nature & plein air", family: "Famille", mix: "Varié", build: "Créer l'itinéraire", day: "Ta journée", stops: "étapes", walk: "min à pied", min: "min", save: "Enregistrer", clear: "Effacer", saved: "✓ Enregistré sur cet appareil.", empty: "Trop peu de lieux à proximité pour ce thème. Essaie un autre thème ou plus de temps.", types: { cathedral: "Église", church: "Église", historical: "Lieu historique", monument: "Monument", memorial: "Mémorial", landmark: "Site", museum: "Musée", castle: "Château", fortress: "Forteresse", palace: "Palais", tower: "Tour", ruins: "Ruines", theatre: "Théâtre", square: "Place", park: "Parc", garden: "Jardin", river: "Rivière", lake: "Lac", waterfall: "Cascade", viewpoint: "Point de vue", mountain: "Montagne", forest: "Forêt", beach: "Plage", nature: "Nature", "kid-landmark": "Pour enfants", zoo: "Zoo", aquarium: "Aquarium", market: "Marché" } },
    tr: { sub: "Ne kadar vaktin olduğunu ve neyi sevdiğini seç — yakındaki yerlerden bir rota oluşturalım.", time: "Ne kadar vakit?", t1: "2 saat", t2: "Yarım gün", t3: "Tam gün", interest: "Neyle ilgileniyorsun?", culture: "Kültür & tarih", nature: "Doğa", family: "Aile", mix: "Karışık", build: "Rota oluştur", day: "Senin günün", stops: "durak", walk: "dk yürüyüş", min: "dk", save: "Planı kaydet", clear: "Temizle", saved: "✓ Bu cihaza kaydedildi.", empty: "Bu tema için yakında çok az yer var. Başka bir tema veya daha fazla zaman dene.", types: { cathedral: "Kilise", church: "Kilise", historical: "Tarihi yer", monument: "Anıt", memorial: "Anma yeri", landmark: "Simge", museum: "Müze", castle: "Kale", fortress: "Hisar", palace: "Saray", tower: "Kule", ruins: "Harabe", theatre: "Tiyatro", square: "Meydan", park: "Park", garden: "Bahçe", river: "Nehir", lake: "Göl", waterfall: "Şelale", viewpoint: "Seyir noktası", mountain: "Dağ", forest: "Orman", beach: "Plaj", nature: "Doğa", "kid-landmark": "Çocuk", zoo: "Hayvanat bahçesi", aquarium: "Akvaryum", market: "Pazar" } }
  };

  function km(a, b) { var R = 6371, d = Math.PI / 180; var s = Math.sin((b[1] - a[1]) * d / 2) * Math.sin((b[1] - a[1]) * d / 2) + Math.cos(a[1] * d) * Math.cos(b[1] * d) * Math.sin((b[0] - a[0]) * d / 2) * Math.sin((b[0] - a[0]) * d / 2); return 2 * R * Math.asin(Math.sqrt(s)); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function fmtMin(m, t) { var h = Math.floor(m / 60), mm = Math.round(m % 60); return h ? (h + " " + (t.min === "min" ? "h" : "ó") + (mm ? (" " + mm + " " + t.min) : "")) : (mm + " " + t.min); }

  function route(data, budget, vibe, mode) {
    var center = data.center;
    var pool = data.stops.filter(function (p) { var m = TYPE_META[p.t]; return m && (vibe === "mix" || m.v.indexOf(vibe) >= 0); });
    var perKm = mode === "car" ? DRIVE_MIN_PER_KM : WALK_MIN_PER_KM;
    var legBase = mode === "car" ? PARK_MIN : 0;
    var out = [], used = {}, cur = center, left = budget, guard = 0;
    while (guard++ < 40) {
      var best = null, bd = 1e9;
      for (var i = 0; i < pool.length; i++) { var p = pool[i]; if (used[i]) continue; var dd = km(cur, p.x); if (dd < bd) { bd = dd; best = i; } }
      if (best === null) break;
      var p2 = pool[best], dur = (TYPE_META[p2.t] || { m: 30 }).m;
      var travel = out.length ? Math.round(bd * perKm + legBase) : 0;
      if (out.length && left - (dur + travel) < 0) break;
      used[best] = 1;
      out.push({ p: p2, travel: travel, dur: dur });
      left -= dur + travel;
      cur = p2.x;
    }
    return out;
  }

  var WALK_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2"/><path d="M7 21l3-6 3 2 1 4M10 15l-2-5 4-1 3 3 3 1"/></svg>';
  var CAR_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l1.4-4.2A2 2 0 0 1 8.3 7.4h7.4a2 2 0 0 1 1.9 1.4L19 13v4h-2M7 17H5v-4M5 13h14"/><circle cx="7.5" cy="17" r="1.6"/><circle cx="16.5" cy="17" r="1.6"/></svg>';

  function render(el, data, t, st) {
    var r = route(data, st.budget, st.vibe, st.mode);
    var tlabel = st.mode === "car" ? t.drive : t.walk;
    var tsvg = st.mode === "car" ? CAR_SVG : WALK_SVG;
    var panel = el.querySelector(".plz-pl-route");
    panel.style.display = "block";
    el.querySelector(".plz-pl-note").textContent = "";
    var list = el.querySelector(".plz-pl-list");
    if (!r.length) { list.innerHTML = '<li class="plz-pl-empty">' + t.empty + "</li>"; el.querySelector(".plz-pl-meta").textContent = ""; return; }
    var total = 0, trav = 0; r.forEach(function (s) { total += s.dur + s.travel; trav += s.travel; });
    el.querySelector(".plz-pl-meta").innerHTML = "<b>" + r.length + "</b> " + t.stops + " &middot; ~<b>" + fmtMin(total, t) + "</b> &middot; " + trav + " " + tlabel;
    list.innerHTML = r.map(function (s, i) {
      var p = s.p, lbl = (t.types[p.t] || p.t), nm = p.u ? ('<a href="' + esc(p.u) + '">' + esc(p.n) + "</a>") : esc(p.n);
      var w = s.travel ? ('<div class="plz-pl-walk">' + tsvg + s.travel + " " + tlabel + " &middot; " + p.d + " km</div>") : "";
      return w + '<li class="plz-pl-stop"><div class="plz-pl-rail"><div class="plz-pl-num">' + (i + 1) + "</div>" + (i < r.length - 1 ? '<div class="plz-pl-line"></div>' : "") + "</div>" +
        '<div class="plz-pl-body"><div class="plz-pl-card"><h3>' + nm + "</h3>" +
        '<div class="plz-pl-tags"><span class="plz-pl-tag">' + esc(lbl) + '</span><span class="plz-pl-tag g">&#9203; ' + (TYPE_META[p.t] || { m: 30 }).m + " " + t.min + "</span></div></div></div></li>";
    }).join("");
  }

  function build(el) {
    var dataEl = el.querySelector('script.plz-pl-data');
    if (!dataEl) return;
    var data;
    try { data = JSON.parse(dataEl.textContent); } catch (e) { el.remove(); return; }
    var t = L[data.lang] || L.en;
    var st = { budget: 240, vibe: "culture", mode: "walk" };
    el.innerHTML =
      '<h2 class="plz-pl-h">' + (t.day === "Dein Tag" ? "Plane deinen Besuch" : t.day === "A te napod" ? "Tervezd meg a látogatásod" : t.day === "Ziua ta" ? "Planifică-ți vizita" : t.day === "Tvoj dan" ? "Isplaniraj posjet" : t.day === "Ta journée" ? "Planifie ta visite" : t.day === "Senin günün" ? "Ziyaretini planla" : "Plan your visit") + "</h2>" +
      '<p class="plz-pl-sub">' + t.sub + "</p>" +
      '<div class="plz-pl-set"><div class="plz-pl-lbl">' + t.time + '</div><div class="plz-pl-opts" data-g="budget">' +
      '<button class="plz-pl-opt" data-val="120">' + t.t1 + '</button><button class="plz-pl-opt" data-val="240" aria-pressed="true">' + t.t2 + '</button><button class="plz-pl-opt" data-val="420">' + t.t3 + "</button></div>" +
      '<div class="plz-pl-lbl">' + t.interest + '</div><div class="plz-pl-opts" data-g="vibe">' +
      '<button class="plz-pl-opt" data-val="culture" aria-pressed="true">' + t.culture + '</button><button class="plz-pl-opt" data-val="nature">' + t.nature + '</button><button class="plz-pl-opt" data-val="family">' + t.family + '</button><button class="plz-pl-opt" data-val="mix">' + t.mix + "</button></div>" +
      '<div class="plz-pl-lbl">' + t.transport + '</div><div class="plz-pl-opts" data-g="mode">' +
      '<button class="plz-pl-opt" data-val="walk" aria-pressed="true">' + t.foot + '</button><button class="plz-pl-opt" data-val="car">' + t.car + "</button></div>" +
      '<button class="plz-pl-go">' + t.build + ' →</button></div>' +
      '<div class="plz-pl-route" style="display:none"><div class="plz-pl-rhead"><span class="plz-pl-meta"></span></div><ul class="plz-pl-list"></ul>' +
      '<div class="plz-pl-acts"><button class="plz-pl-act plz-pl-save">' + t.save + '</button><button class="plz-pl-act plz-pl-clr">' + t.clear + '</button></div><div class="plz-pl-note"></div></div>';

    el.querySelectorAll(".plz-pl-opts").forEach(function (g) {
      g.addEventListener("click", function (e) {
        var b = e.target.closest(".plz-pl-opt"); if (!b) return;
        g.querySelectorAll(".plz-pl-opt").forEach(function (x) { x.removeAttribute("aria-pressed"); });
        b.setAttribute("aria-pressed", "true");
        var grp = g.getAttribute("data-g");
        if (grp === "budget") st.budget = parseInt(b.getAttribute("data-val"), 10);
        else if (grp === "mode") st.mode = b.getAttribute("data-val");
        else st.vibe = b.getAttribute("data-val");
      });
    });
    el.querySelector(".plz-pl-go").addEventListener("click", function () { render(el, data, t, st); });
    el.querySelector(".plz-pl-save").addEventListener("click", function () {
      try { localStorage.setItem("plizio-plan-" + (data.id || location.pathname), JSON.stringify({ budget: st.budget, vibe: st.vibe, mode: st.mode })); el.querySelector(".plz-pl-note").textContent = t.saved; } catch (e) {}
    });
    el.querySelector(".plz-pl-clr").addEventListener("click", function () {
      try { localStorage.removeItem("plizio-plan-" + (data.id || location.pathname)); } catch (e) {}
      el.querySelector(".plz-pl-route").style.display = "none";
    });
  }

  function init() { var n = document.querySelectorAll(".plz-planner"); for (var i = 0; i < n.length; i++) build(n[i]); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
