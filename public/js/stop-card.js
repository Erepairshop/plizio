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

  var LANG = (document.documentElement.lang || "en").slice(0, 2);
  var I18N = {
    de: { stop: "Stopp", near: "in der Nähe von", fee: "gebührenpflichtig", free: "kostenlos", tomorrow: "morgen", closed: "viele Geschäfte geschlossen", details: "Details", nearby: "Umgebung", website: "Website", types: ["Wohnmobil-Stellplatz", "Wohnmobil-Parkplatz", "Campingplatz", "Rastplatz", "Autohof / Raststätte", "Picknick-/Rastplatz", "Parkplatz (Natur)", "Stadt"], svc: ["Wasser", "Entsorgung", "Strom", "WC", "Dusche", "WLAN"] },
    hu: { stop: "Megálló", near: "közelében", fee: "fizetős", free: "ingyenes", tomorrow: "holnap", closed: "sok üzlet zárva tart", details: "Részletek", nearby: "Környék", website: "Weboldal", types: ["Lakóautó-állóhely", "Lakóautó-parkoló", "Kemping", "Pihenőhely", "Autópálya-pihenő", "Piknik- és pihenőhely", "Természetközeli parkoló", "Város"], svc: ["Víz", "Ürítő", "Áram", "WC", "Zuhany", "Wi-Fi"] },
    en: { stop: "Stop", near: "near", fee: "fee required", free: "free", tomorrow: "tomorrow", closed: "many shops closed", details: "Details", nearby: "Nearby", website: "Website", types: ["Motorhome aire", "Motorhome parking", "Campsite", "Rest area", "Motorway services", "Picnic / rest area", "Nature parking", "City"], svc: ["Water", "Waste disposal", "Power", "Toilets", "Shower", "Wi-Fi"] },
    ro: { stop: "Oprire", near: "în apropiere de", fee: "cu plată", free: "gratuit", tomorrow: "mâine", closed: "multe magazine sunt închise", details: "Detalii", nearby: "Împrejurimi", website: "Site web", types: ["Loc pentru autorulote", "Parcare pentru autorulote", "Camping", "Popas", "Spațiu de servicii", "Loc de picnic / popas", "Parcare în natură", "Oraș"], svc: ["Apă", "Golire", "Curent", "Toalete", "Duș", "Wi-Fi"] },
    fr: { stop: "Étape", near: "près de", fee: "payant", free: "gratuit", tomorrow: "demain", closed: "de nombreux magasins sont fermés", details: "Détails", nearby: "Environs", website: "Site web", types: ["Aire de camping-car", "Parking pour camping-cars", "Camping", "Aire de repos", "Aire de services", "Aire de pique-nique / repos", "Parking nature", "Ville"], svc: ["Eau", "Vidange", "Électricité", "WC", "Douche", "Wi-Fi"] },
    it: { stop: "Sosta", near: "vicino a", fee: "a pagamento", free: "gratuito", tomorrow: "domani", closed: "molti negozi sono chiusi", details: "Dettagli", nearby: "Dintorni", website: "Sito web", types: ["Area camper", "Parcheggio camper", "Campeggio", "Area di sosta", "Area di servizio", "Area picnic / sosta", "Parcheggio nella natura", "Città"], svc: ["Acqua", "Scarico", "Elettricità", "WC", "Doccia", "Wi-Fi"] },
    es: { stop: "Parada", near: "cerca de", fee: "de pago", free: "gratis", tomorrow: "mañana", closed: "muchas tiendas están cerradas", details: "Detalles", nearby: "Alrededores", website: "Sitio web", types: ["Área de autocaravanas", "Aparcamiento para autocaravanas", "Camping", "Área de descanso", "Área de servicio", "Área de pícnic / descanso", "Aparcamiento en la naturaleza", "Ciudad"], svc: ["Agua", "Vaciado", "Electricidad", "Aseos", "Ducha", "Wi-Fi"] },
    pt: { stop: "Paragem", near: "perto de", fee: "pago", free: "gratuito", tomorrow: "amanhã", closed: "muitas lojas estão fechadas", details: "Detalhes", nearby: "Arredores", website: "Site", types: ["Área de autocaravanas", "Estacionamento para autocaravanas", "Parque de campismo", "Área de descanso", "Área de serviço", "Área de piquenique / descanso", "Estacionamento na natureza", "Cidade"], svc: ["Água", "Descarga", "Eletricidade", "WC", "Duche", "Wi-Fi"] },
    nl: { stop: "Stop", near: "in de buurt van", fee: "betaald", free: "gratis", tomorrow: "morgen", closed: "veel winkels zijn gesloten", details: "Details", nearby: "Omgeving", website: "Website", types: ["Camperplaats", "Camperparking", "Camping", "Rustplaats", "Verzorgingsplaats", "Picknick- / rustplaats", "Natuurparking", "Stad"], svc: ["Water", "Afvoer", "Stroom", "Toiletten", "Douche", "Wi-Fi"] },
    hr: { stop: "Stajanje", near: "u blizini", fee: "uz naplatu", free: "besplatno", tomorrow: "sutra", closed: "mnoge trgovine su zatvorene", details: "Detalji", nearby: "Okolica", website: "Web-stranica", types: ["Stajalište za kampere", "Parkiralište za kampere", "Kamp", "Odmorište", "Uslužno odmorište", "Izletište / odmorište", "Parkiralište u prirodi", "Grad"], svc: ["Voda", "Pražnjenje", "Struja", "WC", "Tuš", "Wi-Fi"] },
    tr: { stop: "Durak", near: "yakınında", fee: "ücretli", free: "ücretsiz", tomorrow: "yarın", closed: "birçok mağaza kapalı", details: "Ayrıntılar", nearby: "Çevre", website: "Web sitesi", types: ["Motokaravan alanı", "Motokaravan otoparkı", "Kamp alanı", "Dinlenme alanı", "Servis alanı", "Piknik / dinlenme alanı", "Doğa otoparkı", "Şehir"], svc: ["Su", "Atık boşaltma", "Elektrik", "Tuvalet", "Duş", "Wi-Fi"] },
    pl: { stop: "Postój", near: "w pobliżu", fee: "płatne", free: "bezpłatne", tomorrow: "jutro", closed: "wiele sklepów jest zamkniętych", details: "Szczegóły", nearby: "Okolica", website: "Strona", types: ["Miejsce dla kamperów", "Parking dla kamperów", "Kemping", "Miejsce odpoczynku", "MOP", "Miejsce piknikowe / odpoczynku", "Parking przyrodniczy", "Miasto"], svc: ["Woda", "Zrzut", "Prąd", "Toalety", "Prysznic", "Wi-Fi"] }
  };
  var TXT = I18N[LANG] || I18N.en;

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
  var TYPE_KEYS = ["caravan_site", "motorhome_parking", "camp_site", "rest_area", "services", "picnic_site", "nature_parking", "city"];
  function typeLabel(t) { var i = TYPE_KEYS.indexOf(t); return i >= 0 ? TXT.types[i] : (t ? String(t).replace(/_/g, " ") : ""); }
  var SVC = [["water", IC.water, 0], ["dump", IC.recycle, 1], ["power", IC.power, 2], ["toilets", IC.toilet, 3], ["shower", IC.shower, 4], ["wifi", IC.wifi, 5]];

  /* ---------- once-injected CSS (csak a kartya BELSEJE; a kulso hej a hoste) ---------- */
  var CSS = ".plzsc-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap}" +
    ".plzsc-badge{background:var(--accent-wash);color:var(--accent);border-radius:var(--r);padding:2px 8px;font-size:.72rem;font-weight:700;letter-spacing:.4px}" +
    ".plzsc-name{font-weight:700;font-size:1rem;color:var(--ink)}" +
    ".plzsc-tags{display:flex;gap:5px;flex-wrap:wrap;margin-top:6px}" +
    ".plzsc-tag{font-size:.68rem;border:1px solid var(--rule);border-radius:var(--r);padding:2px 7px;color:var(--ink-soft)}" +
    ".plzsc-svc{display:flex;flex-wrap:wrap;gap:6px;margin-top:7px}" +
    ".plzsc-svc>span{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;font-size:.95rem;border:1px solid var(--rule);border-radius:var(--r);background:var(--paper-2);color:var(--accent)}" +
    ".plzsc-line{margin-top:7px;font-size:.84rem;color:var(--ink-soft);min-height:0;display:flex;align-items:center;flex-wrap:wrap}" +
    ".plzsc-line svg{margin-right:.3em}" +
    ".plzsc-line b{color:var(--ink)}" +
    ".plzsc-holiday{margin-top:7px;font-size:.8rem;color:var(--accent-deep);background:var(--accent-wash);border:1px solid var(--rule);border-radius:var(--r);padding:6px 10px;display:flex;align-items:center;gap:.4em}" +
    ".plzsc-links{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}" +
    ".plzsc-lbtn{display:inline-flex;align-items:center;gap:.35em;border:1px solid var(--rule);border-radius:999px;padding:5px 11px;font-size:.78rem;color:var(--accent);text-decoration:none;background:var(--paper-2);cursor:pointer}" +
    ".plzsc-lbtn:hover{background:var(--accent-wash)}" +
    ".plzsc-lbtn-primary{background:var(--accent);color:#fff;border-color:var(--accent);font-weight:700}" +
    ".plzsc-lbtn-primary:hover{background:var(--accent-deep)}";
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
      '<span class="plzsc-name">' + esc(ctx.name || typeLabel(ctx.type) || TXT.stop) + "</span></div>";
  });

  /* 2. hely-sor (reverse geocode, async) */
  register("place", function (ctx) {
    if (ctx.lat == null) return "";
    return '<div class="plzsc-line" data-plzsc="place">' + IC.place + ' …</div>';
  }, function (el, ctx) {
    return fetch("https://photon.komoot.io/reverse?lang=" + encodeURIComponent((["de", "en", "fr", "it"].indexOf(LANG) >= 0 ? LANG : "en")) + "&lat=" + ctx.lat + "&lon=" + ctx.lon)
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var p = (j.features && j.features[0] && j.features[0].properties) || {};
        var t = [p.city || p.town || p.village || p.county || p.state || "", p.country || ""].filter(Boolean).join(", ");
        el.innerHTML = t ? IC.place + " " + esc(TXT.near) + " " + esc(t) : "";
      }).catch(function () { el.textContent = ""; });
  });

  /* 3. tagek: tipus / orszag / km / dij / maxstay */
  register("tags", function (ctx) {
    var tags = [];
    if (ctx.type) tags.push(typeLabel(ctx.type));
    if (ctx.tier) tags.push("Tier " + ctx.tier);
    if (ctx.cc) tags.push(ctx.cc);
    if (ctx.kmCum != null) tags.push("km " + ctx.kmCum);
    if (ctx.fee === "yes") tags.push("💶 " + TXT.fee); else if (ctx.fee === "no") tags.push(TXT.free);
    if (ctx.maxstay) tags.push("⏱ " + ctx.maxstay);
    if (!tags.length) return "";
    return '<div class="plzsc-tags">' + tags.map(function (t) { return '<span class="plzsc-tag">' + esc(t) + "</span>"; }).join("") + "</div>";
  });

  /* 4. szolgaltatas-ikonok */
  register("services", function (ctx) {
    if (!ctx.services) return "";
    var ic = SVC.filter(function (s) { return ctx.services[s[0]]; })
      .map(function (s) { return '<span title="' + esc(TXT.svc[s[2]]) + '">' + s[1] + "</span>"; }).join(" ");
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
        '<span style="margin-left:12px">' + esc(TXT.tomorrow) + ' <b>' + Math.round(da.temperature_2m_min[1]) + "–" + Math.round(da.temperature_2m_max[1]) + "°C</b></span>" +
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
          esc(h.localName) + " (" + esc(ctx.cc) + ") · " + esc(TXT.closed) + "</div>";
      }).catch(function () { el.innerHTML = ""; });
  });

  /* 7. linkek */
  register("links", function (ctx) {
    if (ctx.lat == null) return "";
    var h = '<div class="plzsc-links">';
    // Internal link to OUR POI page (car-mode city stops) — primary, NOT nofollow (own page).
    if (ctx.poiUrl) {
      h += '<a class="plzsc-lbtn plzsc-lbtn-primary" href="' + esc(ctx.poiUrl) + '">' + IC.doc + ' ' + esc(TXT.details) + '</a>';
    }
    h +=
      '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + gmaps(ctx) + '">' + IC.pin + ' Google Maps</a>' +
      '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + streetView(ctx) + '">' + IC.eye + ' Street View</a>';
    if (ctx.website) h += '<a class="plzsc-lbtn" target="_blank" rel="noopener" href="' + esc(ctx.website) + '">' + IC.globe + ' ' + esc(TXT.website) + '</a>';
    // PlizioGo: "Discover the area" — opens /js/sights-nearby.js modal (radius + category filtered sights).
    h += '<button type="button" class="plzsc-lbtn plzsc-nearby" data-lat="' + ctx.lat + '" data-lon="' + ctx.lon + '">' + IC.search + ' ' + esc(TXT.nearby) + "</button>";
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
