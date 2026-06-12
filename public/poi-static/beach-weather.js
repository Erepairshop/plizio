/* Plizio beach weather + sea temperature widget.
 * Reads .bh-weather[data-lat][data-lng][data-lang], fetches Open-Meteo (no API key):
 *   - forecast API: current air temperature + WMO weather code
 *   - marine API:   current sea_surface_temperature
 * Renders into the element. Fails silently (hides the block) if data is unavailable. */
(function () {
  "use strict";
  var L = {
    de: { title: "Wetter & Wassertemperatur", air: "Luft", water: "Wasser", wind: "Wind", err: "" },
    hu: { title: "Időjárás és vízhőmérséklet", air: "Levegő", water: "Víz", wind: "Szél", err: "" },
    ro: { title: "Vremea și temperatura apei", air: "Aer", water: "Apă", wind: "Vânt", err: "" },
    en: { title: "Weather & water temperature", air: "Air", water: "Water", wind: "Wind", err: "" },
  };
  // WMO weather code -> emoji + 4-lang short label
  function wx(code) {
    var m = {
      0: ["☀️", { de: "Klar", hu: "Derült", ro: "Senin", en: "Clear" }],
      1: ["🌤️", { de: "Überwiegend klar", hu: "Túlnyomóan derült", ro: "Predominant senin", en: "Mostly clear" }],
      2: ["⛅", { de: "Teils bewölkt", hu: "Részben felhős", ro: "Parțial înnorat", en: "Partly cloudy" }],
      3: ["☁️", { de: "Bewölkt", hu: "Borult", ro: "Înnorat", en: "Overcast" }],
      45: ["🌫️", { de: "Nebel", hu: "Köd", ro: "Ceață", en: "Fog" }],
      48: ["🌫️", { de: "Nebel", hu: "Köd", ro: "Ceață", en: "Fog" }],
      51: ["🌦️", { de: "Nieselregen", hu: "Szitálás", ro: "Burniță", en: "Drizzle" }],
      53: ["🌦️", { de: "Nieselregen", hu: "Szitálás", ro: "Burniță", en: "Drizzle" }],
      55: ["🌦️", { de: "Nieselregen", hu: "Szitálás", ro: "Burniță", en: "Drizzle" }],
      61: ["🌧️", { de: "Leichter Regen", hu: "Gyenge eső", ro: "Ploaie ușoară", en: "Light rain" }],
      63: ["🌧️", { de: "Regen", hu: "Eső", ro: "Ploaie", en: "Rain" }],
      65: ["🌧️", { de: "Starker Regen", hu: "Erős eső", ro: "Ploaie puternică", en: "Heavy rain" }],
      71: ["🌨️", { de: "Schnee", hu: "Hó", ro: "Ninsoare", en: "Snow" }],
      73: ["🌨️", { de: "Schnee", hu: "Hó", ro: "Ninsoare", en: "Snow" }],
      75: ["🌨️", { de: "Schnee", hu: "Hó", ro: "Ninsoare", en: "Snow" }],
      80: ["🌦️", { de: "Schauer", hu: "Zápor", ro: "Averse", en: "Showers" }],
      81: ["🌦️", { de: "Schauer", hu: "Zápor", ro: "Averse", en: "Showers" }],
      82: ["⛈️", { de: "Heftige Schauer", hu: "Heves zápor", ro: "Averse puternice", en: "Heavy showers" }],
      95: ["⛈️", { de: "Gewitter", hu: "Zivatar", ro: "Furtună", en: "Thunderstorm" }],
      96: ["⛈️", { de: "Gewitter", hu: "Zivatar", ro: "Furtună", en: "Thunderstorm" }],
      99: ["⛈️", { de: "Gewitter", hu: "Zivatar", ro: "Furtună", en: "Thunderstorm" }],
    };
    return m[code] || ["🌡️", { de: "", hu: "", ro: "", en: "" }];
  }

  function init(el) {
    var lat = parseFloat(el.getAttribute("data-lat"));
    var lng = parseFloat(el.getAttribute("data-lng"));
    var lang = el.getAttribute("data-lang") || "en";
    var t = L[lang] || L.en;
    if (isNaN(lat) || isNaN(lng)) { el.style.display = "none"; return; }

    var fc = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lng +
      "&current=temperature_2m,weather_code,wind_speed_10m";
    var mr = "https://marine-api.open-meteo.com/v1/marine?latitude=" + lat + "&longitude=" + lng +
      "&current=sea_surface_temperature";

    Promise.allSettled([
      fetch(fc).then(function (r) { return r.ok ? r.json() : null; }),
      fetch(mr).then(function (r) { return r.ok ? r.json() : null; }),
    ]).then(function (res) {
      var air = res[0].status === "fulfilled" ? res[0].value : null;
      var sea = res[1].status === "fulfilled" ? res[1].value : null;
      var cur = air && air.current ? air.current : null;
      var seaT = sea && sea.current ? sea.current.sea_surface_temperature : null;
      if (!cur && (seaT === null || seaT === undefined)) { el.style.display = "none"; return; }

      var parts = [];
      if (cur) {
        var w = wx(cur.weather_code);
        parts.push('<div class="bh-wx-main"><span class="bh-wx-emoji">' + w[0] + '</span>' +
          '<span class="bh-wx-temp">' + Math.round(cur.temperature_2m) + '°C</span>' +
          '<span class="bh-wx-desc">' + (w[1][lang] || w[1].en) + '</span></div>');
      }
      var chips = [];
      if (cur) chips.push('<span class="bh-wx-chip">🌡️ ' + t.air + ': <b>' + Math.round(cur.temperature_2m) + '°C</b></span>');
      if (seaT !== null && seaT !== undefined)
        chips.push('<span class="bh-wx-chip bh-wx-sea">🌊 ' + t.water + ': <b>' + Math.round(seaT * 10) / 10 + '°C</b></span>');
      if (cur && cur.wind_speed_10m !== undefined)
        chips.push('<span class="bh-wx-chip">💨 ' + t.wind + ': <b>' + Math.round(cur.wind_speed_10m) + ' km/h</b></span>');

      el.innerHTML = '<h2>' + t.title + '</h2>' + parts.join("") +
        '<div class="bh-wx-chips">' + chips.join("") + '</div>';
      el.removeAttribute("hidden");
    }).catch(function () { el.style.display = "none"; });
  }

  function run() {
    var els = document.querySelectorAll(".bh-weather[data-lat]");
    for (var i = 0; i < els.length; i++) init(els[i]);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
