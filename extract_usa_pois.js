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

const pois = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const idRegex = /id:\s*"([^"]+)"/g;
  let match;
  let ids = [];
  while ((match = idRegex.exec(content)) !== null) {
      ids.push(match[1]);
  }
  
  // A slightly more complex regex to get names if possible, but extracting just ids and checking their existence
  for (const id of ids) {
      // Find the block for this id
      const blockStart = content.indexOf(`id: "${id}"`);
      const blockEnd = content.indexOf(`id: "`, blockStart + 10);
      const block = content.substring(blockStart, blockEnd !== -1 ? blockEnd : content.length);
      
      const huNameMatch = block.match(/hu:\s*"([^"]+)"/);
      const enNameMatch = block.match(/en:\s*"([^"]+)"/);
      
      // Check if descriptionAdvanced.hu exists
      const hasDescAdv = block.includes('descriptionAdvanced:') && block.match(/descriptionAdvanced:\s*\{[^}]*hu:\s*"[^"]+"/);
      
      if (!hasDescAdv) {
         pois.push({ id, file, nameHu: huNameMatch ? huNameMatch[1] : (enNameMatch ? enNameMatch[1] : id) });
      }
  }
}

fs.writeFileSync('usa_pois_to_do.json', JSON.stringify(pois, null, 2));
console.log(`Found ${pois.length} POIs to process.`);
