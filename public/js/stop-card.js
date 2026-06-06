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
  var SVC = [["water", "💧", "Wasser"], ["dump", "♻️", "Entsorgung"], ["power", "🔌", "Strom"], ["toilets", "🚻", "WC"], ["shower", "🚿", "Dusche"], ["wifi", "📶", "WLAN"]];

  /* ---------- once-injected CSS (csak a kartya BELSEJE; a kulso hej a hoste) ---------- */
  var CSS = ".plzsc-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap}" +
    ".plzsc-badge{background:rgba(0,212,170,.15);color:#00D4AA;border-radius:8px;padding:3px 9px;font-size:.72rem;font-weight:700;letter-spacing:.5px}" +
    ".plzsc-name{font-weight:700;font-size:1rem}" +
    ".plzsc-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:7px}" +
    ".plzsc-tag{font-size:.68rem;border:1px solid rgba(255,255,255,.15);border-radius:6px;padding:2px 7px;color:#9ca3af}" +
    ".plzsc-svc{margin-top:8px;font-size:1rem;letter-spacing:3px}" +
    ".plzsc-line{margin-top:8px;font-size:.84rem;color:#9ca3af;min-height:0}" +
    ".plzsc-line b{color:#fff}" +
    ".plzsc-holiday{margin-top:8px;font-size:.8rem;color:#e8c96a;background:rgba(246,201,69,.08);border:1px solid rgba(246,201,69,.25);border-radius:8px;padding:6px 10px}" +
    ".plzsc-links{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}" +
    ".plzsc-lbtn{border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:6px 12px;font-size:.78rem;color:#7aa8ff;text-decoration:none;background:rgba(122,168,255,.06)}";
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
    return '<div class="plzsc-line" data-plzsc="place">📍 …</div>';
  }, function (el, ctx) {
    return fetch("https://photon.komoot.io/reverse?lang=de&lat=" + ctx.lat + "&lon=" + ctx.lon)
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var p = (j.features && j.features[0] && j.features[0].properties) || {};
        var t = [p.city || p.town || p.village || p.county || p.state || "", p.country || ""].filter(Boolean).join(", ");
        el.textContent = t ? "📍 in der Nähe von " + t : "";
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
        el.innerHTML = '<div class="plzsc-holiday">🎌 ' + d.getDate() + "." + (d.getMonth() + 1) + ". " +
          esc(h.localName) + " (" + esc(ctx.cc) + ") — viele Geschäfte geschlossen</div>";
      }).catch(function () { el.innerHTML = ""; });
  });

  /* 7. linkek */
  register("links", function (ctx) {
    if (ctx.lat == null) return "";
    var h = '<div class="plzsc-links">' +
      '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + gmaps(ctx) + '">📍 Google Maps</a>' +
      '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + streetView(ctx) + '">👁 Street View</a>';
    if (ctx.website) h += '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + esc(ctx.website) + '">🌐 Website</a>';
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
