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
  const pois = content.split(/\{[\s\r\n]*id:/);
  pois.shift();
  console.log(`${file}: found ${pois.length} POIs`);
  
  pois.forEach(poiBlock => {
    const idMatch = poiBlock.match(/"(.*?)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    const hasDescAdvRo = poiBlock.includes('ro: "') && poiBlock.indexOf('ro: "', poiBlock.indexOf('descriptionAdvanced')) !== -1 && !poiBlock.includes('ro: ""', poiBlock.indexOf('descriptionAdvanced'));
    const hasFactsAdvRo = poiBlock.includes('ro: [') && poiBlock.indexOf('ro: [', poiBlock.indexOf('factsAdvanced')) !== -1;
    
    if (!hasDescAdvRo) {
      console.log(`Missing/Empty descriptionAdvanced.ro for ${id}`);
    }
    if (!hasFactsAdvRo) {
      console.log(`Missing/Empty factsAdvanced.ro for ${id}`);
    }
  });
});
