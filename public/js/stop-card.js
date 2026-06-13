/* Plizio stop-card — kozos kartya-komponens (utvonaltervezo stop-kartya + kesobb POI info-kartya).
 *
 * ELV: minden adat-reteg egy SZEKCIO. Uj adat bevitele = 1 fetch/grid + 1 register() hivas itt.
 * Szekcio: { key, render(ctx) => html|"" , fill?(el, ctx) => Promise }  — fill = lazy/async hidratalas.
 *
 * ctx (minden mezo opcionalis, a szekcio maga donti el mit mutat):
 *   name, lat, lon, cc, type, tier, services{water,dump,power,toilets,shower,wifi},
 *   fee, maxstay, website, day, kmCum, badge (pl. "TAG 2"), footerHtml (host-specifikus extra)
 *
 * Hasznalat:
 *   el.innerHTML = PlzStopCard.render(ctx);   // tobb kartya: render() darabonkent
 *   PlzStopCard.hydrate(containerEl);          // async szekciok betoltese (idojaras, unnep, hely)
 */
(function () {
  "use strict";

  /* ---------- inline SVG icon set (24x24, stroke=currentColor) ---------- */
  function _svg(p) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:1em;height:1em;vertical-align:-.15em">' + p + '</svg>';
  }
  var IC = {
    water: _svg('<path d="M12 3.5C12 3.5 6 10 6 14a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5Z"/>'),
    recycle: _svg('<path d="M7 8 4.5 12l2 1.2"/><path d="m12 4 2.3 4-2.1 1.3"/><path d="M17.5 10 20 14l-2.4 1.4"/><path d="M5 14.5 7 19h4"/><path d="M14 19h3.5l2-3.5"/><path d="M11.5 5.5 9.7 8.6"/>'),
    power: _svg('<path d="M9 3v5"/><path d="M15 3v5"/><path d="M7 8h10v3a5 5 0 0 1-10 0Z"/><path d="M12 16v5"/>'),
    toilet: _svg('<path d="M4 3v18"/><path d="M4 13h7a4 4 0 0 1-3.5 4L8 21"/><circle cx="16.5" cy="6" r="2"/><path d="M16.5 9c-2 0-3 1.5-3 4l1 0 .5 8h3l.5-8 1 0c0-2.5-1-4-3-4Z"/>'),
    shower: _svg('<path d="M4 21V8a3 3 0 0 1 3-3h2"/><path d="M9 5a2 2 0 0 1 4 0"/><circle cx="11" cy="6" r="3.2"/><path d="M9 14v1"/><path d="M12 15v1"/><path d="M15 14v1"/><path d="M7 16v1"/><path d="M17 16v1"/>'),
    wifi: _svg('<path d="M5 9a11 11 0 0 1 14 0"/><path d="M8 12.5a7 7 0 0 1 8 0"/><path d="M10.5 16a3 3 0 0 1 3 0"/><circle cx="12" cy="19" r=".6" fill="currentColor"/>'),
    pin: _svg('<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
    eye: _svg('<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.7"/>'),
    globe: _svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z"/>'),
    search: _svg('<circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.8-4.8"/>'),
    place: _svg('<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
    calendar: _svg('<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 9.5h17"/><path d="M8 3v4"/><path d="M16 3v4"/>'),
    doc: _svg('<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v4h4"/><path d="M9 12h6"/><path d="M9 16h6"/>')
  };

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function gmaps(ctx) {
    if (ctx.name) return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ctx.name + " " + ctx.lat + "," + ctx.lon);
    return "https://www.google.com/maps/search/?api=1&query=" + ctx.lat + "," + ctx.lon;
  }
  function streetView(ctx) {
    return "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=" + ctx.lat + "," + ctx.lon;
  }
  var TYPE_LABELS = { caravan_site: "Wohnmobil-Stellplatz", motorhome_parking: "Wohnmobil-Parkplatz", camp_site: "Campingplatz", rest_area: "Rastplatz", services: "Autohof / Raststätte", picnic_site: "Picknick-/Rastplatz", nature_parking: "Parkplatz (Natur)", city: "Stadt" };
  function typeLabel(t) { return TYPE_LABELS[t] || (t ? String(t).replace(/_/g, " ") : ""); }
  var SVC = [["water", IC.water, "Wasser"], ["dump", IC.recycle, "Entsorgung"], ["power", IC.power, "Strom"], ["toilets", IC.toilet, "WC"], ["shower", IC.shower, "Dusche"], ["wifi", IC.wifi, "WLAN"]];

  /* ---------- once-injected CSS (csak a kartya BELSEJE; a kulso hej a hoste) ---------- */
  var CSS = ".plzsc-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}" +
    ".plzsc-badge{background:rgba(76,198,255,.15);color:#4cc6ff;border-radius:7px;padding:2px 8px;font-size:.72rem;font-weight:700;letter-spacing:.4px}" +
    ".plzsc-name{font-weight:700;font-size:1rem;color:#e6ecf3}" +
    ".plzsc-tags{display:flex;gap:5px;flex-wrap:wrap;margin-top:6px}" +
    ".plzsc-tag{font-size:.68rem;border:1px solid rgba(255,255,255,.12);border-radius:6px;padding:2px 7px;color:rgba(230,236,243,.6)}" +
    ".plzsc-svc{display:flex;flex-wrap:wrap;gap:6px;margin-top:7px}" +
    ".plzsc-svc>span{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;font-size:.95rem;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:rgba(255,255,255,.05);color:#4cc6ff}" +
    ".plzsc-line{margin-top:7px;font-size:.84rem;color:rgba(230,236,243,.6);min-height:0;display:flex;align-items:center;flex-wrap:wrap}" +
    ".plzsc-line svg{margin-right:.3em}" +
    ".plzsc-line b{color:#e6ecf3}" +
    ".plzsc-holiday{margin-top:7px;font-size:.8rem;color:#e8c96a;background:rgba(246,201,69,.08);border:1px solid rgba(246,201,69,.25);border-radius:8px;padding:6px 10px;display:flex;align-items:center;gap:.4em}" +
    ".plzsc-links{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}" +
    ".plzsc-lbtn{display:inline-flex;align-items:center;gap:.35em;border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:5px 11px;font-size:.78rem;color:#4cc6ff;text-decoration:none;background:rgba(76,198,255,.07);cursor:pointer}" +
    ".plzsc-lbtn:hover{background:rgba(76,198,255,.15)}" +
    ".plzsc-lbtn-primary{background:#4cc6ff;color:#06121f;border-color:#4cc6ff;font-weight:700}" +
    ".plzsc-lbtn-primary:hover{background:#6fd2ff}";
  var cssDone = false;
  function injectCss() {
    if (cssDone) return; cssDone = true;
    var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
  }

  /* ---------- szekcio-registry ---------- */
  var SECTIONS = [];
  function register(key, renderFn, fillFn) { SECTIONS.push({ key: key, render: renderFn, fill: fillFn }); }

  /* 1. fejlec: badge + nev */
  register("header", function (ctx) {
    return '<div class="plzsc-head">' +
      (ctx.badge ? '<span class="plzsc-badge">' + esc(ctx.badge) + "</span>" : "") +
      '<span class="plzsc-name">' + esc(ctx.name || typeLabel(ctx.type) || "Stopp") + "</span></div>";
  });

  /* 2. hely-sor (reverse geocode, async) */
  register("place", function (ctx) {
    if (ctx.lat == null) return "";
    return '<div class="plzsc-line" data-plzsc="place">' + IC.place + ' …</div>';
  }, function (el, ctx) {
    return fetch("https://photon.komoot.io/reverse?lang=de&lat=" + ctx.lat + "&lon=" + ctx.lon)
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var p = (j.features && j.features[0] && j.features[0].properties) || {};
        var t = [p.city || p.town || p.village || p.county || p.state || "", p.country || ""].filter(Boolean).join(", ");
        el.innerHTML = t ? IC.place + " in der Nähe von " + esc(t) : "";
      }).catch(function () { el.textContent = ""; });
  });

  /* 3. tagek: tipus / orszag / km / dij / maxstay */
  register("tags", function (ctx) {
    var tags = [];
    if (ctx.type) tags.push(typeLabel(ctx.type));
    if (ctx.tier) tags.push("Tier " + ctx.tier);
    if (ctx.cc) tags.push(ctx.cc);
    if (ctx.kmCum != null) tags.push("km " + ctx.kmCum);
    if (ctx.fee === "yes") tags.push("💶 gebührenpflichtig"); else if (ctx.fee === "no") tags.push("kostenlos");
    if (ctx.maxstay) tags.push("⏱ " + ctx.maxstay);
    if (!tags.length) return "";
    return '<div class="plzsc-tags">' + tags.map(function (t) { return '<span class="plzsc-tag">' + esc(t) + "</span>"; }).join("") + "</div>";
  });

  /* 4. szolgaltatas-ikonok */
  register("services", function (ctx) {
    if (!ctx.services) return "";
    var ic = SVC.filter(function (s) { return ctx.services[s[0]]; })
      .map(function (s) { return '<span title="' + s[2] + '">' + s[1] + "</span>"; }).join(" ");
    return ic ? '<div class="plzsc-svc">' + ic + "</div>" : "";
  });

  /* 5. idojaras (async, Open-Meteo) */
  register("weather", function (ctx) {
    if (ctx.lat == null) return "";
    return '<div class="plzsc-line" data-plzsc="weather"></div>';
  }, function (el, ctx) {
    var u = "https://api.open-meteo.com/v1/forecast?latitude=" + ctx.lat + "&longitude=" + ctx.lon +
      "&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=2&timezone=auto";
    return fetch(u).then(function (r) { return r.json(); }).then(function (j) {
      var cu = j.current, da = j.daily;
      var I = function (c) { return c <= 1 ? "☀️" : c <= 3 ? "⛅" : c <= 48 ? "🌫" : c <= 67 ? "🌧" : c <= 77 ? "🌨" : c <= 82 ? "🌧" : "⛈"; };
      el.innerHTML = "<span>" + I(cu.weather_code) + " <b>" + Math.round(cu.temperature_2m) + "°C</b></span>" +
        '<span style="margin-left:12px">morgen <b>' + Math.round(da.temperature_2m_min[1]) + "–" + Math.round(da.temperature_2m_max[1]) + "°C</b></span>" +
        '<span style="margin-left:12px">🌧 ' + (da.precipitation_probability_max[1] != null ? da.precipitation_probability_max[1] : "–") + " %</span>";
    }).catch(function () { el.innerHTML = ""; });
  });

  /* 6. kozelgo unnepnap a stop ORSZAGABAN (async, Nager.Date, 7 napon belul) */
  register("holiday", function (ctx) {
    if (!ctx.cc) return "";
    return '<div data-plzsc="holiday"></div>';
  }, function (el, ctx) {
    return fetch("https://date.nager.at/api/v3/NextPublicHolidays/" + encodeURIComponent(ctx.cc))
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (hs) {
        var now = Date.now(), week = 7 * 864e5;
        var h = (hs || []).find(function (x) { var t = new Date(x.date).getTime(); return t >= now - 864e5 && t <= now + week; });
        if (!h) { el.innerHTML = ""; return; }
        var d = new Date(h.date);
        el.innerHTML = '<div class="plzsc-holiday">' + IC.calendar + " " + d.getDate() + "." + (d.getMonth() + 1) + ". " +
          esc(h.localName) + " (" + esc(ctx.cc) + ") — viele Geschäfte geschlossen</div>";
      }).catch(function () { el.innerHTML = ""; });
  });

  /* 7. linkek */
  register("links", function (ctx) {
    if (ctx.lat == null) return "";
    var h = '<div class="plzsc-links">';
    // Internal link to OUR POI page (car-mode city stops) — primary, NOT nofollow (own page).
    if (ctx.poiUrl) {
      var _dl = ({ de: "Details", hu: "Részletek", ro: "Detalii", en: "Details", fr: "Détails" })[(document.documentElement.lang || "en").slice(0, 2)] || "Details";
      h += '<a class="plzsc-lbtn plzsc-lbtn-primary" href="' + esc(ctx.poiUrl) + '">' + IC.doc + ' ' + esc(_dl) + '</a>';
    }
    h +=
      '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + gmaps(ctx) + '">' + IC.pin + ' Google Maps</a>' +
      '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + streetView(ctx) + '">' + IC.eye + ' Street View</a>';
    if (ctx.website) h += '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + esc(ctx.website) + '">' + IC.globe + ' Website</a>';
    // PlizioGo: "Discover the area" — opens /js/sights-nearby.js modal (radius + category filtered sights).
    var _nl = ({ de: "Umgebung", hu: "Környék", ro: "Împrejurimi", en: "Nearby", fr: "Environs" })[(document.documentElement.lang || "en").slice(0, 2)] || "Nearby";
    h += '<button type="button" class="plzsc-lbtn plzsc-nearby" data-lat="' + ctx.lat + '" data-lon="' + ctx.lon + '">' + IC.search + ' ' + esc(_nl) + "</button>";
    return h + "</div>";
  });

  /* 8. host-specifikus lablec (pl. "behalten" pipa a tervezoben) */
  register("footer", function (ctx) { return ctx.footerHtml || ""; });

  /* ---------- public API ---------- */
  var seq = 0, ctxStore = {};
  function render(ctx) {
    injectCss();
    var id = "plzsc" + (++seq);
    ctxStore[id] = ctx;
    return '<div class="plzsc" data-plzsc-id="' + id + '">' +
      SECTIONS.map(function (s) { try { return s.render(ctx) || ""; } catch (e) { return ""; } }).join("") +
      "</div>";
  }
  function hydrate(root) {
    (root || document).querySelectorAll(".plzsc[data-plzsc-id]").forEach(function (cardEl) {
      var ctx = ctxStore[cardEl.getAttribute("data-plzsc-id")];
      if (!ctx) return;
      SECTIONS.forEach(function (s) {
        if (!s.fill) return;
        var el = cardEl.querySelector('[data-plzsc="' + s.key + '"]');
        if (el && !el.hasAttribute("data-plzsc-done")) {
          el.setAttribute("data-plzsc-done", "1");
          s.fill(el, ctx);
        }
      });
    });
  }
  window.PlzStopCard = { render: render, hydrate: hydrate, register: register };
})();
