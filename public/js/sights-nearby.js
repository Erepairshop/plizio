// PlizioGo "Discover the area" — opens a modal of OUR sights near a stop/POI coordinate.
// Triggered by any element with class .plzsc-nearby + data-lat / data-lon (event-delegated).
// Data: geo-sharded static index /data/sights-geo/<latcell>_<loncell>.json (1°x1° cells)
//       + _manifest.json {cells:[...], cats:[...]}. Client-side haversine + category filter.
// Self-contained, lazy: manifest + cells fetched on first open, cached. Lang from <html lang>.
(function () {
  "use strict";
  var BASE = "/data/sights-geo/";
  var manifest = null, cellCache = {}, modal = null, state = { lat: 0, lon: 0, r: 15, cats: {} };
  var LANG = (document.documentElement.lang || "en").slice(0, 2);
  var T = {
    de: { title: "Entdecke die Umgebung", radius: "Umkreis", none: "Keine Sehenswürdigkeiten im Umkreis.", all: "Alle", loading: "Lädt…", map: "Karte" },
    hu: { title: "Ismerd meg a környéket", radius: "Körzet", none: "Nincs látnivaló a körzetben.", all: "Mind", loading: "Töltés…", map: "Térkép" },
    ro: { title: "Descoperă împrejurimile", radius: "Rază", none: "Niciun obiectiv în rază.", all: "Toate", loading: "Se încarcă…", map: "Hartă" },
    en: { title: "Discover the area", radius: "Radius", none: "No sights within range.", all: "All", loading: "Loading…", map: "Map" },
    fr: { title: "Découvrir les environs", radius: "Rayon", none: "Aucun site à proximité.", all: "Tous", loading: "Chargement…", map: "Carte" },
  };
  function _svg(p) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:1em;height:1em;vertical-align:-.15em">' + p + '</svg>';
  }
  var IC = {
    landmark: _svg('<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
    natural: _svg('<path d="M12 21v-7"/><path d="M12 14c-3 0-5-2-5-5 3 0 5 2 5 5Z"/><path d="M12 11c0-3 2-5 5-5 0 3-2 5-5 5Z"/>'),
    religious: _svg('<path d="M12 3v4"/><path d="M10 5h4"/><path d="M9 21V11l3-3 3 3v10"/><path d="M5 21v-7l4-3"/><path d="M19 21v-7l-4-3"/>'),
    historical: _svg('<path d="M3 21h18"/><path d="M4 21V10l8-5 8 5v11"/><path d="M8 21v-7"/><path d="M12 21v-7"/><path d="M16 21v-7"/>'),
    museum: _svg('<rect x="4" y="5" width="16" height="13" rx="1.5"/><path d="M4 14l4-4 3 3 3-4 6 6"/><circle cx="9" cy="9" r="1.2"/>'),
    recreational: _svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.2"/><path d="M12 3v5"/><path d="M12 16v5"/><path d="M3 12h5"/><path d="M16 12h5"/>'),
    cultural: _svg('<path d="M8 4a4 5 0 0 0 0 10 4 5 0 0 0 0-10Z"/><path d="M16 4a4 5 0 0 1 0 10 4 5 0 0 1 0-10Z"/><path d="M8 14v6"/><path d="M16 14v6"/>'),
    family: _svg('<circle cx="8" cy="7" r="2.5"/><circle cx="16" cy="7" r="2.5"/><path d="M4 20v-3a4 4 0 0 1 8 0v3"/><path d="M12 20v-3a4 4 0 0 1 8 0v3"/>'),
    park: _svg('<path d="M12 21v-5"/><path d="M12 16a5 5 0 0 0 0-10 5 5 0 0 0 0 10Z"/><path d="M7 11a5 5 0 0 0 10 0"/>'),
    castle: _svg('<path d="M4 21V8l2 1V6l2 1V5l2 1.5L12 5l2 1.5L16 5v2l2-1v3l2-1v13Z"/><path d="M10 21v-4h4v4"/>'),
    fortress: _svg('<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6Z"/><path d="M9 12l2 2 4-4"/>'),
    tower: _svg('<path d="M9 21V8l3-5 3 5v13"/><path d="M9 12h6"/><path d="M8 21h8"/>'),
    wildlife: _svg('<path d="M7 4l2 4"/><path d="M17 4l-2 4"/><path d="M8 8c-1 2-1 4 0 5l-1 4 3-1 2 1 2-1 3 1-1-4c1-1 1-3 0-5Z"/>'),
    other: _svg('<circle cx="12" cy="12" r="2.2" fill="currentColor"/>'),
    map: _svg('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/><path d="M9 4v14"/><path d="M15 6v14"/>'),
    pin: _svg('<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
    eye: _svg('<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.7"/>'),
    close: _svg('<path d="M6 6l12 12"/><path d="M18 6 6 18"/>')
  };
  var CAT = {
    landmark: { e: IC.landmark, de: "Sehenswürdigkeit", hu: "Látnivaló", ro: "Obiectiv", en: "Landmark", fr: "Site" },
    natural: { e: IC.natural, de: "Natur", hu: "Természet", ro: "Natură", en: "Nature", fr: "Nature" },
    religious: { e: IC.religious, de: "Religiös", hu: "Vallási", ro: "Religios", en: "Religious", fr: "Religieux" },
    historical: { e: IC.historical, de: "Historisch", hu: "Történelmi", ro: "Istoric", en: "Historic", fr: "Historique" },
    museum: { e: IC.museum, de: "Museum", hu: "Múzeum", ro: "Muzeu", en: "Museum", fr: "Musée" },
    recreational: { e: IC.recreational, de: "Freizeit", hu: "Szabadidő", ro: "Recreere", en: "Recreation", fr: "Loisirs" },
    cultural: { e: IC.cultural, de: "Kultur", hu: "Kultúra", ro: "Cultură", en: "Culture", fr: "Culture" },
    family: { e: IC.family, de: "Familie", hu: "Család", ro: "Familie", en: "Family", fr: "Famille" },
    park: { e: IC.park, de: "Park", hu: "Park", ro: "Parc", en: "Park", fr: "Parc" },
    castle: { e: IC.castle, de: "Schloss", hu: "Kastély", ro: "Castel", en: "Castle", fr: "Château" },
    fortress: { e: IC.fortress, de: "Festung", hu: "Erőd", ro: "Fortăreață", en: "Fortress", fr: "Forteresse" },
    tower: { e: IC.tower, de: "Turm", hu: "Torony", ro: "Turn", en: "Tower", fr: "Tour" },
    wildlife: { e: IC.wildlife, de: "Tierwelt", hu: "Vadvilág", ro: "Faună", en: "Wildlife", fr: "Faune" },
    other: { e: IC.other, de: "Sonstige", hu: "Egyéb", ro: "Altele", en: "Other", fr: "Autre" },
  };
  function t(k) { return (T[LANG] || T.en)[k] || T.en[k]; }
  function catLabel(c) { var o = CAT[c] || CAT.other; return ('<span class="plznb-cic">' + o.e + '</span>' + (o[LANG] || o.en)); }
  function catText(c) { var o = CAT[c] || CAT.other; return (o[LANG] || o.en); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function haversine(la1, lo1, la2, lo2) {
    var R = 6371, d2r = Math.PI / 180;
    var dLa = (la2 - la1) * d2r, dLo = (lo2 - lo1) * d2r;
    var a = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(la1 * d2r) * Math.cos(la2 * d2r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }
  function loadManifest() {
    if (manifest) return Promise.resolve(manifest);
    return fetch(BASE + "_manifest.json").then(function (r) { return r.json(); }).then(function (m) { manifest = m; return m; }).catch(function () { manifest = { cells: [], cats: [] }; return manifest; });
  }
  function cellsForBbox(lat, lon, rKm) {
    var dLat = rKm / 111, dLon = rKm / (111 * Math.cos(lat * Math.PI / 180) || 1);
    var out = [], seen = {};
    for (var la = Math.floor(lat - dLat); la <= Math.floor(lat + dLat); la++) {
      for (var lo = Math.floor(lon - dLon); lo <= Math.floor(lon + dLon); lo++) {
        var k = la + "_" + lo; if (!seen[k]) { seen[k] = 1; out.push(k); }
      }
    }
    return out;
  }
  function loadCell(k) {
    if (cellCache[k]) return Promise.resolve(cellCache[k]);
    if (manifest && manifest.cells.indexOf(k) < 0) { cellCache[k] = []; return Promise.resolve([]); }
    return fetch(BASE + k + ".json").then(function (r) { return r.ok ? r.json() : []; }).then(function (a) { cellCache[k] = a || []; return cellCache[k]; }).catch(function () { cellCache[k] = []; return []; });
  }
  function gather() {
    return loadManifest().then(function () {
      return Promise.all(cellsForBbox(state.lat, state.lon, 30).map(loadCell));
    }).then(function (arrs) {
      var all = [];
      arrs.forEach(function (a) { a.forEach(function (s) { all.push(s); }); });
      // s = [lon, lat, name, cat]
      var rows = [];
      for (var i = 0; i < all.length; i++) {
        var s = all[i], d = haversine(state.lat, state.lon, s[1], s[0]);
        if (d <= state.r) rows.push({ name: s[2], cat: s[3], lat: s[1], lon: s[0], d: d, desc: s[4] || [], sv: s[5] === 1 });
      }
      rows.sort(function (a, b) { return a.d - b.d; });
      return rows;
    });
  }
  function renderList() {
    var body = modal.querySelector(".plznb-list");
    body.innerHTML = '<div class="plznb-empty">' + t("loading") + "</div>";
    gather().then(function (rows) {
      var active = Object.keys(state.cats).filter(function (k) { return state.cats[k]; });
      if (active.length) rows = rows.filter(function (r) { return state.cats[r.cat]; });
      if (!rows.length) { body.innerHTML = '<div class="plznb-empty">' + t("none") + "</div>"; return; }
      var LI = { de: 0, hu: 1, ro: 2, en: 3 }[LANG]; if (LI == null) LI = 3;
      body.innerHTML = rows.slice(0, 200).map(function (r) {
        var maps = "https://www.google.com/maps/search/?api=1&query=" + r.lat + "," + r.lon;
        var sv = "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=" + r.lat + "," + r.lon;
        var dsc = (r.desc && (r.desc[LI] || r.desc[3])) || "";
        var meta = esc(catText(r.cat)) + " · " + (r.d < 1 ? Math.round(r.d * 1000) + " m" : r.d.toFixed(1) + " km");
        return '<div class="plznb-item">' +
          '<div class="plznb-row' + (dsc ? " plznb-has" : "") + '">' +
            '<span class="plznb-ic">' + (CAT[r.cat] || CAT.other).e + "</span>" +
            '<span class="plznb-n">' + esc(r.name) + "<small>" + meta + "</small></span>" +
            '<span class="plznb-act">' +
              '<a class="plznb-b" href="' + maps + '" target="_blank" rel="nofollow noopener" title="Google Maps">' + IC.pin + '<span class="plznb-bl">GM</span></a>' +
              (r.sv ? '<a class="plznb-b" href="' + sv + '" target="_blank" rel="nofollow noopener" title="Street View">' + IC.eye + '<span class="plznb-bl">SV</span></a>' : "") +
            "</span>" +
          "</div>" +
          (dsc ? '<div class="plznb-descbox" hidden>' + esc(dsc) + "</div>" : "") +
          "</div>";
      }).join("");
    });
  }
  function buildModal() {
    modal = document.createElement("div");
    modal.className = "plznb-overlay"; modal.setAttribute("aria-hidden", "true");
    modal.innerHTML =
      '<div class="plznb-box" role="dialog" aria-modal="true">' +
      '<div class="plznb-head"><h3 class="plznb-title"></h3><button class="plznb-x" aria-label="close">' + IC.close + '</button></div>' +
      '<div class="plznb-ctrl"><label class="plznb-rlbl"><span class="plznb-rt"></span> <b class="plznb-rv"></b></label>' +
      '<input type="range" class="plznb-range" min="1" max="30" step="1"></div>' +
      '<div class="plznb-cats"></div>' +
      '<div class="plznb-list"></div></div>';
    document.body.appendChild(modal);
    modal.querySelector(".plznb-x").addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
    var range = modal.querySelector(".plznb-range");
    range.addEventListener("input", function () { state.r = parseInt(range.value, 10); modal.querySelector(".plznb-rv").textContent = state.r + " km"; renderList(); });
    // row click -> toggle the sight description (GM/SV links pass through)
    modal.querySelector(".plznb-list").addEventListener("click", function (e) {
      if (e.target.closest(".plznb-b")) return;
      var row = e.target.closest(".plznb-row"); if (!row) return;
      var box = row.parentNode.querySelector(".plznb-descbox");
      if (box) box.hidden = !box.hidden;
    });
  }
  function buildCatChips() {
    var wrap = modal.querySelector(".plznb-cats");
    var cats = (manifest && manifest.cats) || Object.keys(CAT);
    wrap.innerHTML = cats.map(function (c) { return '<button type="button" class="plznb-chip" data-cat="' + c + '">' + catLabel(c) + "</button>"; }).join("");
    wrap.querySelectorAll(".plznb-chip").forEach(function (b) {
      b.addEventListener("click", function () { var c = b.dataset.cat; state.cats[c] = !state.cats[c]; b.classList.toggle("on", state.cats[c]); renderList(); });
    });
  }
  function open(lat, lon) {
    if (!modal) buildModal();
    state.lat = lat; state.lon = lon; state.r = 15; state.cats = {};
    modal.querySelector(".plznb-title").textContent = t("title");
    modal.querySelector(".plznb-rt").textContent = t("radius");
    modal.querySelector(".plznb-rv").textContent = state.r + " km";
    modal.querySelector(".plznb-range").value = state.r;
    loadManifest().then(buildCatChips);
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    renderList();
  }
  function close() { if (!modal) return; modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".plzsc-nearby"); if (!b) return;
    e.preventDefault();
    var lat = parseFloat(b.dataset.lat), lon = parseFloat(b.dataset.lon);
    if (isFinite(lat) && isFinite(lon)) open(lat, lon);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
})();
