import fs from 'fs';
import path from 'path';

const files = [
  "lib/visualLab/data/poiExtraCapeverdeCitiesV2.ts",
  "lib/visualLab/data/poiExtraCapeverdeEconomicV2.ts",
  "lib/visualLab/data/poiExtraCapeverdeHistoryV2.ts",
  "lib/visualLab/data/poiExtraCapeverdeLandmarksV2.ts",
  "lib/visualLab/data/poiExtraCapeverdeLifeV2.ts",
  "lib/visualLab/data/poiExtraCapeverdeNatureV2.ts",
  "lib/visualLab/data/poiExtraCapeverdeReliefV2.ts"
];

const results = [];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Very crude parser for POI objects
  const poiMatches = content.match(/\{id: "([^"]+)"[\s\S]*?\}/g);
  if (poiMatches) {
    poiMatches.forEach(poiStr => {
      const idMatch = poiStr.match(/id: "([^"]+)"/);
      if (idMatch) {
        const id = idMatch[1];
        const hasEnDescription = poiStr.includes('descriptionAdvanced:') && poiStr.includes('en: "') && poiStr.match(/descriptionAdvanced:\s*\{[^}]*?en:\s*"[^"]+/);
        // More robust check: check if descriptionAdvanced has an 'en' key that is not empty
        const descAdvMatch = poiStr.match(/descriptionAdvanced:\s*\{([\s\S]*?)\}/);
        let missingEn = true;
        if (descAdvMatch) {
          const inner = descAdvMatch[1];
          if (inner.includes('en: "') && !inner.includes('en: ""')) {
            missingEn = false;
          }
        } else {
            // If descriptionAdvanced is missing entirely
            missingEn = true;
        }

        if (missingEn) {
          results.push({ id, file });
        }
      }
    });
  }
});

console.log(JSON.stringify(results, null, 2));
