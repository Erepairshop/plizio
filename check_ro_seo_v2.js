import fs from 'fs';

const files = [
  "lib/visualLab/data/poiExtraAlgeriaCitiesV2.ts",
  "lib/visualLab/data/poiExtraAlgeriaEconomicV2.ts",
  "lib/visualLab/data/poiExtraAlgeriaHistoryV2.ts",
  "lib/visualLab/data/poiExtraAlgeriaLandmarksV2.ts",
  "lib/visualLab/data/poiExtraAlgeriaLifeV2.ts",
  "lib/visualLab/data/poiExtraAlgeriaNatureV2.ts",
  "lib/visualLab/data/poiExtraAlgeriaReliefV2.ts"
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Split by POI objects
  const pois = content.split(/\{[\s\r\n]*id:/);
  pois.shift(); // remove header
  
  pois.forEach(poiBlock => {
    const idMatch = poiBlock.match(/"(.*?)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    const hasDescAdvRo = poiBlock.includes('descriptionAdvanced:') && poiBlock.match(/descriptionAdvanced: \{[\s\S]*?ro: "([^"]+)"/);
    const hasFactsAdvRo = poiBlock.includes('factsAdvanced:') && poiBlock.match(/factsAdvanced: \{[\s\S]*?ro: \[/);
    
    if (!hasDescAdvRo) {
      console.log(`Missing/Empty descriptionAdvanced.ro for ${id} in ${file}`);
    }
    if (!hasFactsAdvRo) {
      console.log(`Missing/Empty factsAdvanced.ro for ${id} in ${file}`);
    }
  });
});
