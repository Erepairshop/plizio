const fs = require('fs');
const files = [
  "lib/visualLab/data/poiExtraLibyaCitiesV2.ts",
  "lib/visualLab/data/poiExtraLibyaEconomicV2.ts",
  "lib/visualLab/data/poiExtraLibyaHistoryV2.ts",
  "lib/visualLab/data/poiExtraLibyaLandmarksV2.ts",
  "lib/visualLab/data/poiExtraLibyaLifeV2.ts",
  "lib/visualLab/data/poiExtraLibyaNatureV2.ts",
  "lib/visualLab/data/poiExtraLibyaReliefV2.ts"
];

let poisToProcess = [];

for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf-8');
    const regex = /id:\s*["']([^"']+)["'][^}]*?(?:descriptionAdvanced:\s*{[^}]*}|})/g;
    
    // Simple parsing to find POI objects and check for descriptionAdvanced
    const poiBlocks = content.split('id: "').slice(1);
    for (const block of poiBlocks) {
      const id = block.split('"')[0];
      if (id.startsWith('ly-')) {
          if (!block.includes('descriptionAdvanced:') || !block.includes('hu: "')) {
             if(!poisToProcess.includes(id)) poisToProcess.push(id);
             continue;
          }
          // check if hu is empty
          const huMatch = block.match(/hu:\s*["']([^"']*)["']/);
          if (!huMatch || huMatch[1].trim() === "") {
             if(!poisToProcess.includes(id)) poisToProcess.push(id);
          }
      }
    }
  }
}

console.log(JSON.stringify(poisToProcess, null, 2));
