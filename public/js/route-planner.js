/* Plizio A→B útvonaltervező (autós + Wohnmobil), POI = cél előtöltve.
   Mount: #plz-route-planner[data-lng,data-lat,data-dest,data-lang,data-copy].
   A már élő camper Workert hívja (ORS routing + korridor-megállók + advisory),
   a megállókat a közös /js/stop-card.js rendereli. Adat: © OpenStreetMap, OpenRouteService. */
(function () {
  var el = document.getElementById("plz-route-planner");
  if (!el) return;
  var WORKER = "https://plizio-camper.plizio.workers.dev/plan";
  var DEST = [parseFloat(el.dataset.lng), parseFloat(el.dataset.lat)];
  var DEST_NAME = el.dataset.dest || "";
  var LANG = el.dataset.lang || "en";
  var C = {};
  try { C = JSON.parse(el.dataset.copy || "{}"); } catch (e) { C = {}; }
  var mode = "car", lastReq = null;

  function $(s, r) { return (r || el).querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  // mode toggle
  el.querySelectorAll(".plz-rp-mode").forEach(function (b) {
    b.addEventListener("click", function () {
      mode = b.dataset.mode;
      el.querySelectorAll(".plz-rp-mode").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
    });
  });

  function geocode(q) {
    return fetch("https://photon.komoot.io/api?limit=1&lang=" + encodeURIComponent(LANG) + "&q=" + encodeURIComponent(q))
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j.features || !j.features.length) throw new Error((C.notFound || "Not found") + ": " + q);
        return j.features[0].geometry.coordinates; // [lon,lat]
      });
  }
  function plan(req) {
    return fetch(WORKER, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(req) })
      .then(function (r) { return r.json(); })
      .then(function (data) { if (!data.ok) throw new Error(data.error || "Error"); return data; });
  }

  function go() {
    var st = $(".plz-rp-status"), res = $(".plz-rp-result");
    var o = $(".plz-rp-origin").value.trim(), v = $(".plz-rp-via").value.trim();
    var stops = parseInt($(".plz-rp-stops").value, 10);
    if (!o) { st.textContent = C.needOrigin || "Please enter a start point."; return; }
    st.textContent = C.searching || "Locating…"; res.style.display = "none";
    var reqServices = Array.prototype.map.call(el.querySelectorAll(".plz-rp-svc:checked"), function (c) { return c.value; });
    var tiers = ({ AB: ["A", "B"], A: ["A"], B: ["B"], ABC: ["A", "B", "C"] })[$(".plz-rp-tier").value] || ["A", "B"];
    var bufferKm = parseInt($(".plz-rp-buffer").value, 10) || 20;
    var origin;
    geocode(o).then(function (oc) {
      origin = oc;
      return v ? geocode(v).then(function (vc) { return [vc]; }) : [];
    }).then(function (baseAnchors) {
      st.textContent = C.routing || "Calculating route…";
      lastReq = { origin: origin, destination: DEST, baseAnchors: baseAnchors, stops: stops, mode: mode, variant: 0, reqServices: reqServices, tiers: tiers, bufferKm: bufferKm };
      return plan({ origin: origin, destination: DEST, anchors: baseAnchors, stops: stops, mode: mode, variant: 0, reqServices: reqServices, tiers: tiers, bufferKm: bufferKm });
    }).then(function (data) {
      render(data, origin); st.textContent = "";
    }).catch(function (e) { st.textContent = "⚠️ " + e.message; });
  }

  function render(d, origin) {
    var res = $(".plz-rp-result"); res.style.display = "";
    var overnights = d.days.filter(function (x) { return x.overnight; }).map(function (x) { return x.overnight; });
    var pts = [origin].concat(overnights.map(function (s) { return [s.lon, s.lat]; })).concat([DEST]).map(function (p) { return p[1] + "," + p[0]; });
    var mapsAll = "https://www.google.com/maps/dir/?api=1&travelmode=driving&origin=" + pts[0] + "&destination=" + pts[pts.length - 1];
    if (pts.length > 2) mapsAll += "&waypoints=" + encodeURIComponent(pts.slice(1, -1).join("|"));

    var h = '<div class="plz-rp-summary">' +
      '<div class="plz-rp-stat"><b>' + (d.summary.km) + '</b> ' + esc(C.km || "km") + '</div>' +
      '<div class="plz-rp-stat"><b>' + (d.summary.hours) + '</b> ' + esc(C.hrs || "h") + '</div>' +
      '<div class="plz-rp-stat"><b>' + (d.summary.overnightStops || 0) + '</b> ' + esc(C.nights || "nights") + '</div>' +
      '<div class="plz-rp-stat"><b>' + (d.eligibleStops != null ? d.eligibleStops : d.corridorStops) + '</b> ' + esc(C.matchStops || "stops") + '</div>' +
      '<a class="plz-rp-mapsall" href="' + mapsAll + '" target="_blank" rel="nofollow noopener">🗺️ ' + esc(C.mapsAll || "Whole route in Maps") + '</a></div>';

    if (d.advisory && d.advisory.length) {
      h += '<div class="plz-rp-adv"><h3>⚠️ ' + esc(C.advisory || "Country notes") + ' (' + esc(d.countries.join(" · ")) + ')</h3>';
      d.advisory.forEach(function (a) {
        h += '<details class="plz-rp-advc"><summary>' + esc(a.name || a.cc) + ' <span>' + esc(a.cur || "") + '</span></summary><div class="plz-rp-advb">' +
          (a.toll ? '<div>🛣️ <b>' + esc(C.toll || "Toll") + ':</b> ' + esc(a.toll) + '</div>' : '') +
          (a.lez && a.lez !== "—" ? '<div>🏙️ <b>' + esc(C.lez || "Low-emission zone") + ':</b> ' + esc(a.lez) + '</div>' : '') +
          (a.wild ? '<div>🏕️ <b>' + esc(C.overnight || "Overnight") + ':</b> ' + esc(a.wild) + '</div>' : '') +
          (a.equip ? '<div>🧰 <b>' + esc(C.mandatory || "Required") + ':</b> ' + esc(a.equip) + '</div>' : '') +
          (a.note ? '<div class="plz-rp-muted">' + esc(a.note) + '</div>' : '') +
          '</div></details>';
      });
      h += '<p class="plz-rp-muted plz-rp-advnote">' + esc(d.advisoryNote || "") + '</p></div>';
    }

    var hasSC = (typeof window.PlzStopCard !== "undefined");
    h += '<div class="plz-rp-deck">';
    d.days.forEach(function (x) {
      var o = x.overnight;
      if (o) {
        var keep = '<label class="plz-rp-keep"><input type="checkbox" class="plz-rp-keepcb" data-lon="' + o.lon + '" data-lat="' + o.lat + '"> ' + esc(C.keepStop || "keep this stop") + '</label>';
        if (hasSC) {
          h += '<div class="plz-rp-card">' + window.PlzStopCard.render({
            name: o.name || "", type: o.type, tier: o.tier, cc: o.cc, lat: o.lat, lon: o.lon,
            services: o.services, fee: o.fee, maxstay: o.maxstay, website: o.website,
            kmCum: x.driveKmCumulative, badge: (C.day || "DAY") + " " + x.day, footerHtml: keep
          }) + '</div>';
        } else {
          h += '<div class="plz-rp-card plz-rp-cardfb"><div class="plz-rp-badge">' + (C.day || "DAY") + " " + x.day + '</div><h4>' + esc(o.name || "") + '</h4>' +
            '<a href="https://www.google.com/maps/search/?api=1&query=' + o.lat + ',' + o.lon + '" target="_blank" rel="nofollow noopener">🗺️ Maps</a>' + keep + '</div>';
        }
      } else {
        if (hasSC) {
          h += '<div class="plz-rp-card">' + window.PlzStopCard.render({ name: DEST_NAME || (C.dest || "Destination"), lat: DEST[1], lon: DEST[0], kmCum: x.driveKmCumulative, badge: (C.day || "DAY") + " " + x.day + " · " + (C.dest || "GOAL") }) + '</div>';
        } else {
          h += '<div class="plz-rp-card plz-rp-cardfb"><div class="plz-rp-badge">' + (C.day || "DAY") + " " + x.day + " · " + (C.dest || "GOAL") + '</div><h4>' + esc(DEST_NAME) + '</h4></div>';
        }
      }
    });
    h += '</div><p class="plz-rp-swipe">' + esc(C.swipe || "← swipe cards →") + '</p>';
    h += '<button class="plz-rp-regen" type="button">↻ ' + esc(C.regen || "Regenerate — keep checked stops") + '</button>';

    res.innerHTML = h;
    if (hasSC && window.PlzStopCard.hydrate) window.PlzStopCard.hydrate(res);
    var rg = $(".plz-rp-regen", res);
    if (rg) rg.addEventListener("click", function () {
      var kept = Array.prototype.map.call(res.querySelectorAll(".plz-rp-keepcb:checked"), function (c) { return [parseFloat(c.dataset.lon), parseFloat(c.dataset.lat)]; });
      var st = $(".plz-rp-status");
      var anchors, variant;
      if (kept.length) { anchors = (lastReq.baseAnchors || []).concat(kept); variant = 0; st.textContent = C.regenKept || "Route with kept stops…"; }
      else { anchors = lastReq.baseAnchors || []; variant = (lastReq.variant || 0) + 1; st.textContent = C.regenNew || "New variant…"; }
      lastReq.variant = variant;
      plan({ origin: lastReq.origin, destination: DEST, anchors: anchors, stops: lastReq.stops, mode: lastReq.mode, variant: variant, reqServices: lastReq.reqServices, tiers: lastReq.tiers, bufferKm: lastReq.bufferKm })
        .then(function (data) { render(data, lastReq.origin); st.textContent = ""; })
        .catch(function (e) { st.textContent = "⚠️ " + e.message; });
    });
  }

  var goBtn = $(".plz-rp-go");
  if (goBtn) goBtn.addEventListener("click", go);
  $(".plz-rp-origin").addEventListener("keydown", function (e) { if (e.key === "Enter") go(); });
})();
