const fs = require('fs');

const files = [
  "lib/visualLab/data/poiExtraUsaCitiesV2.ts",
  "lib/visualLab/data/poiExtraUsaEconomicV2.ts",
  "lib/visualLab/data/poiExtraUsaHistoryV2.ts",
  "lib/visualLab/data/poiExtraUsaLandmarksV2.ts",
  "lib/visualLab/data/poiExtraUsaLifeV2.ts",
  "lib/visualLab/data/poiExtraUsaNatureV2.ts",
  "lib/visualLab/data/poiExtraUsaReliefV2.ts"
];

let total = 0;
let results = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Simple parsing: split by '  {\n    id:' or similar
  const blocks = content.split(/(\{\s*id:\s*"[^"]+",)/);
  
  for (let i = 1; i < blocks.length; i += 2) {
    const idMatch = blocks[i].match(/id:\s*"([^"]+)"/);
    if (!idMatch) continue;
    const id = idMatch[1];
    const blockContent = blocks[i] + blocks[i+1];
    
    // Check if descriptionAdvanced has en:
    const descAdvMatch = blockContent.match(/descriptionAdvanced:\s*\{([^}]+)\}/);
    let hasEn = false;
    if (descAdvMatch) {
      if (descAdvMatch[1].includes('en:')) {
        hasEn = true;
      }
    }
    
    if (!hasEn) {
      // get name
      const nameMatch = blockContent.match(/name:\s*\{[^}]*en:\s*"([^"]+)"/);
      const name = nameMatch ? nameMatch[1] : id;
      results.push({ id, name });
    }
  }
}

console.log(JSON.stringify(results, null, 2));
