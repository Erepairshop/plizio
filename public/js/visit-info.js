/* Plizio visit-info strip — computes sun/daylight/season for ANY POI from its
   coordinates, client-side. No data fetch, no LLM text: pure astronomy + the
   device clock, so every page shows something unique and dynamic.
   Markup: <div class="plz-visit" data-lat data-lng data-type data-lang></div> */
(function () {
  "use strict";
  var L = {
    it: { h: "Informazioni sulla visita", sunrise: "Alba", sunset: "Tramonto", golden: "Ora d'oro", photo: "ideale per le foto", daylight: "Luce diurna", localtime: "Ora locale", season: "Stagione", h_: "h", m_: "min", polarDay: "Sole di mezzanotte (non tramonta)", polarNight: "Notte polare (il sole non sorge)", seasons: ["inverno", "primavera", "estate", "autunno"] },
    de: { h: "Besuchsinfo", sunrise: "Sonnenaufgang", sunset: "Sonnenuntergang", golden: "Goldene Stunde", photo: "beste Fotozeit", daylight: "Tageslicht", localtime: "Ortszeit", season: "Jahreszeit", h_: "Std", m_: "Min", polarDay: "Mitternachtssonne (geht nicht unter)", polarNight: "Polarnacht (geht nicht auf)", seasons: ["Winter", "Frühling", "Sommer", "Herbst"] },
    hu: { h: "Látogatói infó", sunrise: "Napkelte", sunset: "Napnyugta", golden: "Aranyóra", photo: "fotózáshoz ideális", daylight: "Nappal", localtime: "Helyi idő", season: "Évszak", h_: "ó", m_: "p", polarDay: "Éjféli nap (nem nyugszik le)", polarNight: "Sarki éjszaka (nem kel fel)", seasons: ["tél", "tavasz", "nyár", "ősz"] },
    ro: { h: "Info vizită", sunrise: "Răsărit", sunset: "Apus", golden: "Ora de aur", photo: "ideal pentru fotografii", daylight: "Lumină de zi", localtime: "Ora locală", season: "Anotimp", h_: "h", m_: "min", polarDay: "Soare de miezul nopții (nu apune)", polarNight: "Noapte polară (nu răsare)", seasons: ["iarnă", "primăvară", "vară", "toamnă"] },
    en: { h: "Visit info", sunrise: "Sunrise", sunset: "Sunset", golden: "Golden hour", photo: "best for photos", daylight: "Daylight", localtime: "Local time", season: "Season", h_: "h", m_: "min", polarDay: "Midnight sun (never sets)", polarNight: "Polar night (never rises)", seasons: ["Winter", "Spring", "Summer", "Autumn"] },
    hr: { h: "Info za posjet", sunrise: "Izlazak sunca", sunset: "Zalazak sunca", golden: "Zlatni sat", photo: "najbolje za fotografije", daylight: "Dnevno svjetlo", localtime: "Lokalno vrijeme", season: "Godišnje doba", h_: "h", m_: "min", polarDay: "Ponoćno sunce (ne zalazi)", polarNight: "Polarna noć (ne izlazi)", seasons: ["zima", "proljeće", "ljeto", "jesen"] },
    fr: { h: "Infos visite", sunrise: "Lever du soleil", sunset: "Coucher du soleil", golden: "Heure dorée", photo: "idéal pour les photos", daylight: "Lumière du jour", localtime: "Heure locale", season: "Saison", h_: "h", m_: "min", polarDay: "Soleil de minuit (ne se couche pas)", polarNight: "Nuit polaire (ne se lève pas)", seasons: ["hiver", "printemps", "été", "automne"] },
    tr: { h: "Ziyaret bilgisi", sunrise: "Gün doğumu", sunset: "Gün batımı", golden: "Altın saat", photo: "fotoğraf için ideal", daylight: "Gün ışığı", localtime: "Yerel saat", season: "Mevsim", h_: "s", m_: "dk", polarDay: "Gece yarısı güneşi (batmaz)", polarNight: "Kutup gecesi (doğmaz)", seasons: ["kış", "ilkbahar", "yaz", "sonbahar"] }
  };

  var D2R = Math.PI / 180, R2D = 180 / Math.PI;

  // Current UTC offset (hours, DST-correct) for an IANA tz via Intl. null on
  // failure → caller falls back to a longitude estimate.
  function tzOffsetHours(tz, date) {
    if (!tz) return null;
    try {
      var dtf = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false, timeZoneName: "shortOffset" });
      var parts = dtf.formatToParts(date);
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].type === "timeZoneName") {
          var m = parts[i].value.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);
          if (m) { var h = parseInt(m[2], 10) + (m[3] ? parseInt(m[3], 10) / 60 : 0); return m[1] === "-" ? -h : h; }
          if (/^(GMT|UTC)$/.test(parts[i].value)) return 0;
        }
      }
    } catch (e) {}
    return null;
  }

  // Sunrise/sunset in UTC hours for a date (USNO/Almanac algorithm). Returns
  // null on polar day/night. zenith 90.833° = official sunrise/sunset.
  function sunUTC(lat, lng, date, rising, zenith) {
    var start = Date.UTC(date.getUTCFullYear(), 0, 0);
    var diff = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start;
    var N = Math.floor(diff / 86400000);
    var lngHour = lng / 15;
    var t = rising ? N + (6 - lngHour) / 24 : N + (18 - lngHour) / 24;
    var M = 0.9856 * t - 3.289;
    var Lsun = M + 1.916 * Math.sin(M * D2R) + 0.020 * Math.sin(2 * M * D2R) + 282.634;
    Lsun = ((Lsun % 360) + 360) % 360;
    var RA = R2D * Math.atan(0.91764 * Math.tan(Lsun * D2R));
    RA = ((RA % 360) + 360) % 360;
    RA = (RA + (Math.floor(Lsun / 90) * 90 - Math.floor(RA / 90) * 90)) / 15;
    var sinDec = 0.39782 * Math.sin(Lsun * D2R);
    var cosDec = Math.cos(Math.asin(sinDec));
    var cosH = (Math.cos(zenith * D2R) - sinDec * Math.sin(lat * D2R)) / (cosDec * Math.cos(lat * D2R));
    if (cosH > 1 || cosH < -1) return null;
    var H = rising ? 360 - R2D * Math.acos(cosH) : R2D * Math.acos(cosH);
    H = H / 15;
    var T = H + RA - 0.06571 * t - 6.622;
    var UT = T - lngHour;
    UT = ((UT % 24) + 24) % 24;
    return UT;
  }

  function fmt(utcHours, offH) {
    var local = ((utcHours + offH) % 24 + 24) % 24;
    var h = Math.floor(local);
    var m = Math.round((local - h) * 60);
    if (m === 60) { m = 0; h = (h + 1) % 24; }
    return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
  }

  function svg(d) {
    return '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + "</svg>";
  }
  var ICON = {
    sunrise: '<path d="M17 18a5 5 0 0 0-10 0M12 2v7M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M8 6l4-4 4 4"/>',
    sunset: '<path d="M17 18a5 5 0 0 0-10 0M12 9V2M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M16 5l-4 4-4-4"/>',
    golden: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    daylight: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    season: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>'
  };

  function render(el) {
    var lat = parseFloat(el.getAttribute("data-lat"));
    var lng = parseFloat(el.getAttribute("data-lng"));
    if (!isFinite(lat) || !isFinite(lng)) { el.remove(); return; }
    var lang = el.getAttribute("data-lang") || "en";
    var t = L[lang] || L.en;
    var now = new Date();
    var tz = el.getAttribute("data-tz") || "";
    var offH = tzOffsetHours(tz, now);
    if (offH === null) offH = Math.round(lng / 15); // fallback: longitude (no DST)

    var rise = sunUTC(lat, lng, now, true, 90.833);
    var set = sunUTC(lat, lng, now, false, 90.833);

    var chips = [];
    function chip(icon, label, value, hint) {
      chips.push('<div class="plz-vi-chip">' + svg(icon) + '<div><span class="plz-vi-k">' + label + '</span><span class="plz-vi-v">' + value + (hint ? ' <em>' + hint + "</em>" : "") + "</span></div></div>");
    }

    if (rise === null || set === null) {
      // polar day/night — use the sign of the solar declination proxy (month/lat)
      var north = lat >= 0;
      var summer = now.getUTCMonth() >= 3 && now.getUTCMonth() <= 8;
      var polarDay = north ? summer : !summer;
      chip("daylight", t.daylight, polarDay ? t.polarDay : t.polarNight);
    } else {
      chip("sunrise", t.sunrise, fmt(rise, offH));
      chip("sunset", t.sunset, fmt(set, offH));
      // evening golden hour: last 60 min before sunset
      chip("golden", t.golden, fmt(set - 1, offH) + "–" + fmt(set, offH), t.photo);
      var dl = set - rise; if (dl < 0) dl += 24;
      var dh = Math.floor(dl), dm = Math.round((dl - dh) * 60);
      chip("daylight", t.daylight, dh + " " + t.h_ + " " + dm + " " + t.m_);
    }

    // season (hemisphere-aware, meteorological)
    var m = now.getMonth();
    var seasonIdx = Math.floor(((m + 1) % 12) / 3); // 0=winter(DJF),1=spring,2=summer,3=autumn
    if (lat < 0) seasonIdx = (seasonIdx + 2) % 4;
    chip("season", t.season, t.seasons[seasonIdx]);

    // live local time
    chip("clock", t.localtime, fmt(now.getUTCHours() + now.getUTCMinutes() / 60, offH), "");

    el.innerHTML = '<h2 class="plz-vi-h">' + t.h + '</h2><div class="plz-vi-grid">' + chips.join("") + "</div>";

    // keep the clock chip ticking each minute
    var clockChip = el.querySelector(".plz-vi-chip:last-child .plz-vi-v");
    if (clockChip) {
      setInterval(function () {
        var n = new Date();
        clockChip.firstChild.textContent = fmt(n.getUTCHours() + n.getUTCMinutes() / 60, offH) + " ";
      }, 30000);
    }
  }

  function init() {
    var nodes = document.querySelectorAll(".plz-visit");
    for (var i = 0; i < nodes.length; i++) render(nodes[i]);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
