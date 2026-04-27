const fs = require('fs');

async function extractPois() {
  const filePaths = [
    './lib/visualLab/data/poi',
    './lib/visualLab/data/poiExtraDe1',
    './lib/visualLab/data/poiExtraDe2',
    './lib/visualLab/data/poiExtraDe3a',
    './lib/visualLab/data/poiExtraDe3b',
    './lib/visualLab/data/poiExtraDe4a',
    './lib/visualLab/data/poiExtraDe4b',
    './lib/visualLab/data/poiExtraDeCities'
  ];

  const pois = [];

  for (const p of filePaths) {
    try {
      const module = await import(p + '.ts');
      // iterate over all exported arrays
      for (const key in module) {
        if (Array.isArray(module[key])) {
          for (const item of module[key]) {
            if (item && item.id && item.parent && item.parent.startsWith('DE-')) {
              pois.push({
                id: item.id,
                parent: item.parent,
                coords: item.coords,
                type: item.type,
                name: {
                  de: item.name?.de,
                  en: item.name?.en,
                }
              });
            }
          }
        }
      }
    } catch (err) {
      console.error(`Error loading ${p}:`, err.message);
    }
  }

  fs.writeFileSync('de_pois_dump.json', JSON.stringify(pois, null, 2));
  console.log(`Extracted ${pois.length} DE POIs`);
}

extractPois();
