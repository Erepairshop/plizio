import fs from 'fs';
import path from 'path';

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
  const poiMatches = content.matchAll(/id:\s*"(.*?)"/g);
  for (const match of poiMatches) {
    const poiId = match[1];
    const poiContent = content.substring(content.indexOf(poiId), content.indexOf('}', content.indexOf(poiId) + 2000));
    
    const hasRoDesc = poiContent.includes('ro: "') && !poiContent.includes('ro: ""');
    if (!hasRoDesc) {
       console.log(`Missing RO desc: ${poiId} in ${file}`);
    }
  }
});
