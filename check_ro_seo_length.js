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
  
  pois.forEach(poiBlock => {
    const idMatch = poiBlock.match(/"(.*?)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    const roDescMatch = poiBlock.match(/descriptionAdvanced: \{[\s\S]*?ro: "([^"]+)"/);
    if (roDescMatch) {
      const roDesc = roDescMatch[1];
      const wordCount = roDesc.split(/\s+/).length;
      if (wordCount < 80) {
        console.log(`${id} in ${file}: RO desc too short (${wordCount} words)`);
      }
    } else {
      console.log(`${id} in ${file}: RO desc missing`);
    }
  });
});
