/**
 * Plizio Camper route-planner Worker.
 * POST /plan  { origin:[lon,lat], destination:[lon,lat], days, mode:"camper"|"car",
 *               anchors?:[[lon,lat]...], bufferKm?, dailyHours? }
 *  1. ORS directions (driving-hgv for camper, driving-car for car) -> polyline + summary
 *  2. corridor: 0.5deg tiles along the route from KV (CAMPER) -> candidate stops, dist<=buffer
 *  3. day-segmentation: split by daily driving budget -> overnight stop (A/B tier) per day
 *  4. countries crossed (from stop cc) -> advisory hook (rules added later)
 * KV: CAMPER (tile:<cx>_<cy> -> JSON array of stops). Secret: ORS_KEY.
 */
const CELL = 0.5;
const R = 6371;
const d2r = Math.PI / 180;
const VEHICLE_DEFAULT = { length: 7, width: 2.3, height: 3.1, weight: 3.5 };
const CACHE_VERSION = "2026-08-16-route-v2";
const RULES_UPDATED = "2026-08-16";
const VEHICLE_LIMITS = {
  length: [3, 15], width: [1.5, 3.5], height: [1.8, 4.5], weight: [1, 20],
};

function validCoord(value) {
  return Array.isArray(value) && value.length === 2 && Number.isFinite(+value[0]) && Number.isFinite(+value[1])
    && +value[0] >= -180 && +value[0] <= 180 && +value[1] >= -90 && +value[1] <= 90;
}

function camperVehicle(value) {
  const source = value && typeof value === "object" ? value : VEHICLE_DEFAULT;
  const vehicle = {};
  for (const [key, limits] of Object.entries(VEHICLE_LIMITS)) {
    const number = Number(source[key] ?? VEHICLE_DEFAULT[key]);
    if (!Number.isFinite(number) || number < limits[0] || number > limits[1]) return null;
    vehicle[key] = Math.round(number * 100) / 100;
  }
  return vehicle;
}

function requestedSegmentCount(stops, days) {
  if (stops !== undefined && stops !== null) {
    const count = Number(stops);
    return Number.isInteger(count) && count >= 0 && count <= 8 ? count + 1 : null;
  }
  const count = Number(days ?? 3);
  return Number.isInteger(count) && count >= 1 && count <= 9 ? count : null;
}

function routingRadii(coords, mode) {
  if (mode !== "camper") return undefined;
  return coords.map((_, index) => index === coords.length - 1 ? 1500 : 750);
}

// Countries currently loaded into KV — fallback list for GET /countries if the
// authoritative `meta:countries` key is absent (the upload script writes that key
// after every KV upload, so new countries appear there automatically).
const KNOWN_CC = ["AL", "AT", "BA", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IS", "IT", "LT", "LU", "LV", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "SE", "SI", "SK", "XK"];

// Per-country camper advisory (curated, informational — verify before travel).
// Fields: cur=currency, toll, lez=low-emission/city zone, wild=wild-camping legality, equip=mandatory gear.
const COUNTRY_RULES = {
  DE: { name: "Deutschland", cur: "EUR", toll: "Pkw/Wohnmobil <3,5t mautfrei auf Autobahnen.", lez: "Umweltzonen in vielen Städten — grüne Umweltplakette nötig.", wild: "Wildcampen verboten; 1 Nacht zum Ausruhen auf manchen Parkplätzen geduldet.", equip: "Warndreieck, Warnweste, Verbandskasten." },
  AT: { name: "Österreich", cur: "EUR", toll: "Vignette bis einschließlich 3,5 t technisch zulässiger Gesamtmasse; über 3,5 t GO-Maut. Auf einzelnen Strecken fällt zusätzlich Streckenmaut an.", lez: "Umweltzonen und regionale Fahrverbote beachten.", wild: "Wildcampen weitgehend verboten.", equip: "Warndreieck, Warnweste, Verbandskasten." },
  CH: { name: "Schweiz", cur: "CHF (nicht EUR!)", toll: "Jahres-Vignette (~40 CHF) Pflicht auf Autobahnen.", lez: "—", wild: "Wildcampen stark eingeschränkt, kantonal verschieden.", equip: "Warndreieck; Warnweste empfohlen." },
  IT: { name: "Italien", cur: "EUR", toll: "Autostrada-Maut (Ticket/streckenabhängig).", lez: "ZTL (Zona Traffico Limitato) in Altstädten — Kameras, hohe Bußgelder.", wild: "Wildcampen meist verboten; Aree di sosta nutzen.", equip: "Warndreieck, Warnweste." },
  FR: { name: "Frankreich", cur: "EUR", toll: "Autoroute-Maut (péage, streckenabhängig).", lez: "Crit'Air-Plakette für Umweltzonen (Paris, Lyon, Grenoble …).", wild: "Camping sauvage eingeschränkt; Aire de camping-car nutzen.", equip: "Warndreieck, Warnweste." },
  ES: { name: "Spanien", cur: "EUR", toll: "Teils Autopista-Maut.", lez: "ZBE-Umweltzonen (Madrid, Barcelona …).", wild: "Wildcampen verboten.", equip: "Warnweste; ab 2026 V16-Notlicht statt Warndreieck." },
  HR: { name: "Kroatien", cur: "EUR", toll: "Autobahn-Maut (streckenabhängig).", lez: "—", wild: "Wildcampen verboten, hohe Bußgelder.", equip: "Warndreieck, Warnweste, Verbandskasten." },
  SI: { name: "Slowenien", cur: "EUR", toll: "E-Vignette Pflicht auf Autobahnen.", lez: "—", wild: "Wildcampen verboten.", equip: "Warndreieck, Warnweste." },
  HU: { name: "Ungarn", cur: "HUF (nicht EUR!)", toll: "e-Matrica (E-Vignette) für Autobahnen.", lez: "Umweltzone Budapest.", wild: "Wildcampen eingeschränkt.", equip: "Warndreieck, Warnweste." },
  NL: { name: "Niederlande", cur: "EUR", toll: "Autobahnen meist mautfrei; einzelne Tunnel kostenpflichtig.", lez: "Milieuzones in Städten.", wild: "Wildcampen verboten.", equip: "Warnweste empfohlen." },
  BE: { name: "Belgien", cur: "EUR", toll: "Pkw/Wohnmobil <3,5t mautfrei.", lez: "LEZ (Brüssel, Antwerpen, Gent) — Registrierung nötig.", wild: "Wildcampen verboten.", equip: "Warndreieck, Warnweste, Verbandskasten." },
  CZ: { name: "Tschechien", cur: "CZK (nicht EUR!)", toll: "E-Vignette für Autobahnen <3,5t.", lez: "Umweltzone Prag.", wild: "Wildcampen verboten.", equip: "Warndreieck, Warnweste, Verbandskasten, Ersatzlampen." },
  SK: { name: "Slowakei", cur: "EUR", toll: "E-Vignette Pflicht.", lez: "—", wild: "Wildcampen verboten.", equip: "Warndreieck, Warnweste." },
  PL: { name: "Polen", cur: "PLN (nicht EUR!)", toll: "Teils Maut (e-TOLL auf einzelnen Strecken).", lez: "Umweltzonen (Warschau, Krakau) im Aufbau.", wild: "Wildcampen eingeschränkt.", equip: "Warndreieck, Feuerlöscher." },
  DK: { name: "Dänemark", cur: "DKK (nicht EUR!)", toll: "Mautfrei außer Groß-Belt- & Öresund-Brücke.", lez: "Miljøzoner (Kopenhagen u.a.).", wild: "Wildcampen verboten.", equip: "Warndreieck." },
  SE: { name: "Schweden", cur: "SEK (nicht EUR!)", toll: "City-Maut Stockholm/Göteborg; einige Brücken.", lez: "Miljözoner.", wild: "Allemansrätten erlaubt 1 Nacht in der Natur (nicht für große Wohnmobile auf Privatland).", equip: "Warnweste empfohlen." },
  NO: { name: "Norwegen", cur: "NOK (nicht EUR!)", toll: "Umfangreiche automatische Bompenger-Maut (AutoPASS).", lez: "—", wild: "Jedermannsrecht — 1-2 Nächte abseits erlaubt, Abstand zu Häusern.", equip: "Warndreieck, Warnweste." },
  GB: { name: "Großbritannien", cur: "GBP (nicht EUR!)", toll: "Wenige Mautstrecken; Linksverkehr!", lez: "ULEZ London u.a. Clean Air Zones.", wild: "Wildcampen meist verboten (Ausnahme Schottland).", equip: "Warnweste empfohlen." },
  PT: { name: "Portugal", cur: "EUR", toll: "Autobahn-Maut, teils nur elektronisch (Vorab-Registrierung).", lez: "ZER Lissabon.", wild: "Wildcampen seit 2021 verboten.", equip: "Warndreieck, Warnweste." },
  GR: { name: "Griechenland", cur: "EUR", toll: "Autobahn-Maut (Mautstationen).", lez: "—", wild: "Wildcampen verboten.", equip: "Warndreieck, Warnweste, Verbandskasten, Feuerlöscher." },
};
const OFFICIAL_RULE_URLS = {
  AT: "https://help.asfinag.at/en/vignette-and-section-tolls/vignette/",
  DE: "https://www.toll-collect.de/en/",
  HR: "https://www.hac.hr/en/toll",
  SI: "https://evinjeta.dars.si/en",
};
const EU_ROAD_RULES = "https://europa.eu/youreurope/citizens/vehicles/driving-abroad/road-rules-and-safety/index_en.htm";

function km(a, b) {
  const s = Math.sin((b[1] - a[1]) * d2r / 2) ** 2 +
    Math.cos(a[1] * d2r) * Math.cos(b[1] * d2r) * Math.sin((b[0] - a[0]) * d2r / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}
function cellKey(lon, lat) { return `tile:${Math.floor(lon / CELL)}_${Math.floor(lat / CELL)}`; }
function minDistToLine(p, line) { // approx: min haversine to polyline vertices
  let m = Infinity;
  for (let i = 0; i < line.length; i++) { const dd = km(p, line[i]); if (dd < m) m = dd; }
  return m;
}
const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, OPTIONS",
  "access-control-allow-headers": "Content-Type",
  "access-control-max-age": "86400",
};
const json = (o, status = 200) => new Response(JSON.stringify(o), {
  status, headers: { "content-type": "application/json", ...CORS }
});

async function corridorStops(env, line, bufferKm) {
  if (!env.CAMPER) return [];
  // collect cells along the line (+ neighbours so buffer near edges is covered)
  const cells = new Set();
  for (const p of line) {
    const cx = Math.floor(p[0] / CELL), cy = Math.floor(p[1] / CELL);
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) cells.add(`tile:${cx + dx}_${cy + dy}`);
  }
  const out = [], seen = new Set();
  await Promise.all([...cells].map(async (key) => {
    const v = await env.CAMPER.get(key, "json");
    if (!v) return;
    for (const s of v) {
      if (seen.has(s.id)) continue;
      const dist = minDistToLine([s.lon, s.lat], line);
      if (dist <= bufferKm) { seen.add(s.id); out.push({ ...s, corridorKm: Math.round(dist * 10) / 10 }); }
    }
  }));
  return out;
}

function segmentDays(line, totalKm, days, stops, variant) {
  // cumulative distance along the route; place an overnight stop near each day boundary.
  const cum = [0];
  for (let i = 1; i < line.length; i++) cum.push(cum[i - 1] + km(line[i - 1], line[i]));
  const perDay = totalKm / days;
  const usedStop = new Set();
  const v = Math.max(0, variant | 0);
  const result = [];
  for (let day = 1; day <= days; day++) {
    const targetKm = perDay * day;
    let bi = 0; for (let i = 1; i < cum.length; i++) if (Math.abs(cum[i] - targetKm) < Math.abs(cum[bi] - targetKm)) bi = i;
    const anchor = line[bi];
    let overnight = null;
    if (day < days) {
      // candidates already pre-filtered (tier + required services); sorted by distance.
      const cands = [];
      for (const s of stops) {
        if (usedStop.has(s.id)) continue;
        cands.push([km(anchor, [s.lon, s.lat]), s]);
      }
      cands.sort((a, b) => a[0] - b[0]);
      if (cands.length) {
        const pick = cands[v % Math.min(3, cands.length)][1];
        overnight = pick; usedStop.add(pick.id);
      }
    }
    result.push({ day, driveKmCumulative: Math.round(targetKm), overnight });
  }
  return result;
}

export default {
  async fetch(req, env) {
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
    const url = new URL(req.url);
    if (req.method === "GET" && url.pathname === "/") return json({ ok: true, service: "plizio-camper", hint: "POST /plan" });
    // List of ISO2 countries that have camper data in KV (drives the frontend gating).
    // Reads the authoritative `meta:countries` key (refreshed by the upload pipeline);
    // falls back to KNOWN_CC if it has not been written yet.
    if (req.method === "GET" && url.pathname === "/countries") {
      let list = null, src = "kv";
      if (env.CAMPER) { try { list = await env.CAMPER.get("meta:countries", "json"); } catch (e) { } }
      if (!Array.isArray(list) || !list.length) { list = KNOWN_CC; src = "fallback"; }
      return new Response(JSON.stringify({ ok: true, countries: list, source: src }), {
        headers: { "content-type": "application/json", "cache-control": "public, max-age=300", ...CORS },
      });
    }
    if (req.method !== "POST" || url.pathname !== "/plan") return json({ error: "POST /plan" }, 404);

    let body;
    try { body = await req.json(); } catch { return json({ error: "invalid JSON body" }, 400); }
    const { origin, destination, anchors = [], days = 3, mode = "camper", stops } = body;
    if (mode !== "camper" && mode !== "car") return json({ error: "mode must be camper or car" }, 400);
    if (!validCoord(origin) || !validCoord(destination)) return json({ error: "valid origin and destination required as [lon,lat]" }, 400);
    if (!Array.isArray(anchors) || anchors.length > 10 || anchors.some((point) => !validCoord(point))) {
      return json({ error: "anchors must contain at most 10 valid [lon,lat] points" }, 400);
    }
    const vehicle = mode === "camper" ? camperVehicle(body.vehicle) : null;
    if (mode === "camper" && !vehicle) return json({ error: "invalid camper dimensions" }, 400);
    // Explicit stops=0 means a direct route. Older versions accidentally treated
    // it as a missing value and silently fell back to days=3.
    const segCount = requestedSegmentCount(stops, days);
    if (segCount == null) return json({ error: "stops must be an integer from 0 to 8, or days from 1 to 9" }, 400);
    const requestedBuffer = Number(body.bufferKm || (mode === "car" ? 6 : 8));
    const bufferKm = Math.min(50, Math.max(2, Number.isFinite(requestedBuffer) ? requestedBuffer : 8));
    if (!env.ORS_KEY) return json({ error: "ORS_KEY not configured" }, 500);

    // cache by request
    const ck = new URL("https://camper-cache/" + CACHE_VERSION + "/" + btoa(JSON.stringify(body)));
    const cache = caches.default;
    const hit = await cache.match(ck);
    if (hit) return hit;

    const profile = mode === "car" ? "driving-car" : "driving-hgv";
    const coords = [origin, ...anchors, destination];
    const orsBody = { coordinates: coords };
    const radiuses = routingRadii(coords, mode);
    if (radiuses) orsBody.radiuses = radiuses;
    if (vehicle) {
      orsBody.options = {
        vehicle_type: "hgv",
        profile_params: { restrictions: vehicle },
      };
    }
    let route;
    try {
      const r = await fetch(`https://api.openrouteservice.org/v2/directions/${profile}/geojson`, {
        method: "POST",
        headers: { "Authorization": env.ORS_KEY, "Content-Type": "application/json" },
        body: JSON.stringify(orsBody),
      });
      if (!r.ok) return json({ error: "ORS routing failed", status: r.status, detail: await r.text() }, 502);
      route = await r.json();
    } catch (e) { return json({ error: "ORS fetch error", detail: String(e) }, 502); }

    const feat = route.features && route.features[0];
    if (!feat) return json({ error: "no route" }, 502);
    const line = feat.geometry.coordinates; // [[lon,lat],...]
    const sum = feat.properties.summary || {};
    const totalKm = (sum.distance || 0) / 1000;
    const totalHours = (sum.duration || 0) / 3600;
    const routedDestination = line[line.length - 1];
    const destinationSnapKm = km(destination, routedDestination);

    // Downsample the polyline for CPU-bound distance math (free tier = 10ms CPU).
    // ~6km spacing keeps corridor detection accurate while cutting work ~10x.
    const step = Math.max(1, Math.ceil(line.length / 120));
    const coarse = line.filter((_, i) => i % step === 0);
    if (coarse[coarse.length - 1] !== line[line.length - 1]) coarse.push(line[line.length - 1]);

    const corridor = await corridorStops(env, coarse, bufferKm);
    // optional filters: tiers (default A,B) + required services (water/dump/power/toilets/shower)
    const allowedTiers = new Set(["A", "B", "C"]);
    const allowedServices = new Set(["water", "dump", "power", "toilets", "shower"]);
    const tiers = (Array.isArray(body.tiers) && body.tiers.length)
      ? new Set(body.tiers.filter((tier) => allowedTiers.has(tier))) : new Set(["A", "B"]);
    const reqSvc = Array.isArray(body.reqServices) ? body.reqServices.filter((service) => allowedServices.has(service)) : [];
    // exclude motorway infrastructure (service areas / rest areas) — everyone passes those anyway,
    // and the OSM nodes are noisy (toll gates / borders). Keep real camper sites + nature pull-offs.
    const EXCLUDE_TYPES = new Set(["services", "rest_area"]);
    const eligible = corridor.filter((s) => !EXCLUDE_TYPES.has(s.type) && tiers.has(s.tier) && reqSvc.every((k) => s.services && s.services[k]));
    const dayPlan = segmentDays(coarse, totalKm, segCount, eligible, +body.variant || 0);
    const countries = [...new Set(corridor.map((s) => s.cc).filter(Boolean))];

    const resp = json({
      ok: true,
      mode, profile, vehicle,
      summary: { km: Math.round(totalKm), hours: Math.round(totalHours * 10) / 10, days: segCount, overnightStops: dayPlan.filter((x) => x.overnight).length },
      routing: {
        requestedDestination: destination,
        routedDestination,
        destinationSnapKm: Math.round(destinationSnapKm * 100) / 100,
      },
      countries,
      advisory: countries.map((cc) => COUNTRY_RULES[cc]
        ? { cc, ...COUNTRY_RULES[cc], officialUrl: OFFICIAL_RULE_URLS[cc] || EU_ROAD_RULES, updated: RULES_UPDATED }
        : { cc, note: "Keine Detail-Infos hinterlegt.", officialUrl: EU_ROAD_RULES, updated: RULES_UPDATED }),
      advisoryNote: "Informativ — bitte vor Reiseantritt offiziell prüfen (Maut, Umweltzonen, Übernachtungsregeln ändern sich).",
      corridorStops: corridor.length,
      eligibleStops: eligible.length,
      days: dayPlan,
      // include a thinned polyline for the client map (every ~10th point)
      route: line.filter((_, i) => i % 10 === 0 || i === line.length - 1),
    });
    await cache.put(ck, resp.clone());
    return resp;
  },
};

export { camperVehicle, requestedSegmentCount, routingRadii, validCoord };
