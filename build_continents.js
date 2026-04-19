const fs = require('fs');
const turf = require('@turf/turf');

// Load countries
const rawData = fs.readFileSync('public/data/countries.geojson', 'utf-8');
const countries = JSON.parse(rawData);

const CONTINENT_ROUTES = {
  "Europe": "/europe-map",
  "North America": "/na-map",
  "South America": "/sa-map",
  "Africa": "/africa-map",
  "Asia": "/asia-map",
  "Oceania": "/oceania-map",
  "Antarctica": ""
};

const CONTINENT_COLORS = {
  "Europe": "#22d3ee",
  "North America": "#f87171",
  "South America": "#4ade80",
  "Africa": "#fbbf24",
  "Asia": "#a78bfa",
  "Oceania": "#f472b6",
  "Antarctica": "#94a3b8"
};

const continentsMap = {};

// Group by continent
for (const feature of countries.features) {
  let continent = feature.properties.CONTINENT;

  // Some corrections in natural earth data if needed
  if (!continent) {
    console.warn("No continent property found in feature:", feature.properties.NAME);
    continue;
  }
  
  // Natural Earth uses "Seven seas (open ocean)" etc. We should map those or ignore.
  if (continent === "Seven seas (open ocean)") continue;

  if (!continentsMap[continent]) {
    continentsMap[continent] = [];
  }
  
  continentsMap[continent].push(feature);
}

const mergedFeatures = [];

for (const [continent, features] of Object.entries(continentsMap)) {
  if (!CONTINENT_COLORS[continent]) {
    console.warn("Unknown continent:", continent);
    continue;
  }
  
  let merged = features[0];
  for (let i = 1; i < features.length; i++) {
    try {
      merged = turf.union(turf.featureCollection([merged, features[i]]));
    } catch (err) {
      console.error(`Error merging country in ${continent}:`, err.message);
    }
  }
  
  if (merged) {
    merged.properties = {
      name: continent,
      CONTINENT: continent,
      route: CONTINENT_ROUTES[continent] || "",
      color: CONTINENT_COLORS[continent] || "#ffffff"
    };
    mergedFeatures.push(merged);
  }
}

const finalCollection = turf.featureCollection(mergedFeatures);
fs.writeFileSync('public/data/continents.geojson', JSON.stringify(finalCollection));
console.log("Written public/data/continents.geojson successfully. Features:", mergedFeatures.length);
