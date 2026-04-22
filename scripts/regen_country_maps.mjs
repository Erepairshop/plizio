import fs from 'fs';
import path from 'path';

const sources = [
  { 
    name: 'france', 
    url: 'https://france-geojson.gregoiredavid.fr/repo/regions.geojson', 
    file: 'lib/visualLab/maps/france.svg.ts',
    project: (lon, lat) => {
      const p = { minLon: -5.5, maxLon: 10.0, minLat: 41.0, maxLat: 51.5 };
      const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
      const y = ((p.maxLat - lat) / (p.maxLat - p.minLat)) * 1000;
      return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
    },
    getGeoNames: (f) => [f.properties.nom],
    explicit: {
      'FR-COR': 'corse' // ensure explicit match just in case
    }
  },
  { 
    name: 'italy', 
    url: 'https://raw.githubusercontent.com/openpolis/geojson-italy/master/geojson/limits_IT_regions.geojson', 
    file: 'lib/visualLab/maps/italy.svg.ts',
    project: (lon, lat) => {
      const p = { minLon: 6.5, maxLon: 19.0, minLat: 35.5, maxLat: 47.5, width: 1000, height: 1200 };
      const x = (lon - p.minLon) * (p.width / (p.maxLon - p.minLon));
      const y = (p.maxLat - lat) * (p.height / (p.maxLat - p.minLat));
      return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
    },
    getGeoNames: (f) => [f.properties.reg_name],
    explicit: {
      'IT-23': 'valledaostavalleedaoste',
      'IT-21': 'piemonte',
      'IT-25': 'lombardia',
      'IT-42': 'liguria',
      'IT-32': 'trentinoaltoadigesudtirol',
      'IT-34': 'veneto',
      'IT-36': 'friuliveneziagiulia',
      'IT-45': 'emiliaromagna',
      'IT-52': 'toscana',
      'IT-55': 'umbria',
      'IT-57': 'marche',
      'IT-62': 'lazio',
      'IT-65': 'abruzzo',
      'IT-67': 'molise',
      'IT-72': 'campania',
      'IT-75': 'puglia',
      'IT-77': 'basilicata',
      'IT-78': 'calabria',
      'IT-82': 'sicilia',
      'IT-88': 'sardegna'
    }
  },
  { 
    name: 'spain', 
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/spain-communities.geojson', 
    file: 'lib/visualLab/maps/spain.svg.ts',
    project: (lon, lat) => {
      let pLon = lon; let pLat = lat;
      if (lon < -10 && lat < 32) {
        pLon = -9.2 + ((lon + 18) / 5) * 1.8;
        pLat = 35.8 + ((lat - 27.5) / 2.5) * 1.0;
      }
      const p = { minLon: -9.5, maxLon: 4.5, minLat: 35.5, maxLat: 44.5 };
      const x = ((pLon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
      const y = ((p.maxLat - pLat) / (p.maxLat - p.minLat)) * 1000;
      return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
    },
    getGeoNames: (f) => [f.properties.name, f.properties.noml_ccaa],
    explicit: {
      'ES-PM': 'baleares',
      'ES-IB': 'baleares',
      'ES-CN': 'canarias',
      'ES-CE': 'ceuta',
      'ES-ML': 'melilla',
      'ES-PV': 'paisvasco',
      'ES-CT': 'cataluna',
      'ES-CL': 'castillaleon',
      'ES-AN': 'andalucia'
    }
  },
  { 
    name: 'unitedkingdom', 
    url: 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_map_subunits.geojson', 
    file: 'lib/visualLab/maps/unitedkingdom.svg.ts',
    project: (lon, lat) => {
      const p = { minLon: -8.5, maxLon: 2.0, minLat: 49.5, maxLat: 61.0 };
      const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
      const y = ((p.maxLat - lat) / (p.maxLat - p.minLat)) * 1200;
      return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
    },
    getGeoNames: (f) => [f.properties.NAME, f.properties.SUBUNIT],
    explicit: {
      'GB-ENG': 'england',
      'GB-SCT': 'scotland',
      'GB-WLS': 'wales',
      'GB-NIR': 'nireland'
    }
  },
  { 
    name: 'netherlands', 
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/the-netherlands.geojson', 
    file: 'lib/visualLab/maps/netherlands.svg.ts',
    project: (lon, lat) => {
      const p = { minLon: 3.3, maxLon: 7.2, minLat: 50.7, maxLat: 53.6 };
      const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
      const y = ((p.maxLat - lat) / (p.maxLat - p.minLat)) * 1000;
      return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
    },
    getGeoNames: (f) => [f.properties.name],
    explicit: {
      'NL-NB': 'noordbrabant',
      'NL-NH': 'noordholland',
      'NL-ZH': 'zuidholland'
    }
  },
  { 
    name: 'poland', 
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/poland.geojson', 
    file: 'lib/visualLab/maps/poland.svg.ts',
    project: (lon, lat) => {
      const p = { minLon: 14.0, maxLon: 24.5, minLat: 48.5, maxLat: 55.0, width: 1000, height: 800 };
      const x = (lon - p.minLon) * (p.width / (p.maxLon - p.minLon));
      const y = (p.maxLat - lat) * (p.height / (p.maxLat - p.minLat));
      return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
    },
    getGeoNames: (f) => [f.properties.name],
    explicit: {
      'PL-ZP': 'zachodniopomorskie',
      'PL-PM': 'pomorskie',
      'PL-WN': 'warminskomazurskie',
      'PL-PD': 'podlaskie',
      'PL-LB': 'lubuskie',
      'PL-WP': 'wielkopolskie',
      'PL-KP': 'kujawskopomorskie',
      'PL-MZ': 'mazowieckie',
      'PL-DS': 'dolnoslaskie',
      'PL-LD': 'lodzkie',
      'PL-LU': 'lubelskie',
      'PL-OP': 'opolskie',
      'PL-SL': 'slaskie',
      'PL-SK': 'swietokrzyskie',
      'PL-MA': 'malopolskie',
      'PL-PK': 'podkarpackie'
    }
  }
];

function normalize(s) {
  if (!s) return '';
  return s.toString().replace(/ł/g, 'l').replace(/Ł/g, 'L').replace(/ñ/g, 'n').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function polyToPath(coordinates, projectFn) {
  let pathStr = "";
  for (const ring of coordinates) {
    for (let i = 0; i < ring.length; i++) {
      const [lon, lat] = ring[i];
      const [x, y] = projectFn(lon, lat);
      if (i === 0) pathStr += `M${x},${y}`;
      else pathStr += `L${x},${y}`;
    }
    pathStr += "Z";
  }
  return pathStr;
}

function geoToSvgPath(feature, projectFn) {
  if (!feature.geometry) return "";
  let pathStr = "";
  if (feature.geometry.type === "Polygon") {
    pathStr += polyToPath(feature.geometry.coordinates, projectFn);
  } else if (feature.geometry.type === "MultiPolygon") {
    for (const poly of feature.geometry.coordinates) {
      pathStr += polyToPath(poly, projectFn);
    }
  }
  return pathStr;
}

async function run() {
  for (const src of sources) {
    console.log(`\nProcessing ${src.name}...`);
    let geo;
    try {
      const resp = await fetch(src.url);
      if (!resp.ok) throw new Error('Status ' + resp.status);
      geo = await resp.json();
    } catch(e) {
      console.error('Failed to fetch', src.url, e);
      continue;
    }

    let features = geo.features;
    if (!features) {
       console.log("No features/geometries found for " + src.name);
       continue;
    }
    
    let tsContent = fs.readFileSync(src.file, 'utf8');
    
    // Parse TS regions
    // We will find all blocks `{ id: "...", ... path: "..." }` and replace the path.
    const regionRegex = /{\s*id:\s*["']([^"']+)["'][^}]*?name:\s*{([^}]+)}[^}]*?path:\s*["']([^"']+)["']/g;
    
    let match;
    let replacedCount = 0;
    let newTsContent = tsContent;
    
    while ((match = regionRegex.exec(tsContent)) !== null) {
      const fullMatch = match[0];
      const id = match[1];
      const nameBlock = match[2];
      const oldPath = match[3];
      
      // Extract de, hu, ro, en names
      const langNames = [];
      const langMatchRegex = /["']?(de|hu|ro|en)["']?\s*:\s*["']([^"']+)["']/g;
      let lm;
      while ((lm = langMatchRegex.exec(nameBlock)) !== null) {
        langNames.push(lm[2]);
      }
      langNames.push(id); // add ID as a fallback

      const tNorm = langNames.map(normalize);
      const explicitNorm = src.explicit[id] ? normalize(src.explicit[id]) : null;

      let foundFeature = null;

      for (const f of features) {
        const geoNames = src.getGeoNames(f).filter(Boolean);
        const gNorm = geoNames.map(normalize);

        let isMatch = false;
        if (explicitNorm && gNorm.includes(explicitNorm)) {
           isMatch = true;
        } else {
           for (const t of tNorm) {
             if (gNorm.includes(t)) { isMatch = true; break; }
           }
        }
        
        // fuzzy match if still not found
        if (!isMatch && !explicitNorm) {
          for (const t of tNorm) {
             for (const g of gNorm) {
               if (g.length > 3 && t.length > 3 && (g.includes(t) || t.includes(g))) {
                 isMatch = true; break;
               }
             }
             if (isMatch) break;
          }
        }

        if (isMatch) {
          foundFeature = f;
          break;
        }
      }

      if (foundFeature) {
        const newPath = geoToSvgPath(foundFeature, src.project);
        if (newPath) {
          const newFullMatch = fullMatch.replace(`path: "${oldPath}"`, `path: "${newPath}"`).replace(`path: '${oldPath}'`, `path: '${newPath}'`);
          newTsContent = newTsContent.replace(fullMatch, newFullMatch);
          replacedCount++;
          console.log(`  [OK] Matched ${id} -> GeoJSON: ${src.getGeoNames(foundFeature).join('/')}`);
        } else {
          console.log(`  [WARN] Feature for ${id} has no valid geometry`);
        }
      } else {
        console.log(`  [MISSING] Could not find GeoJSON feature for ${id} (tried: ${langNames.join(', ')})`);
      }
    }
    
    fs.writeFileSync(src.file, newTsContent, 'utf8');
    console.log(`Done ${src.name}: updated ${replacedCount} regions.`);
  }
}

run();
