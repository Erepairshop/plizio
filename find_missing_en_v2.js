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
  
  // Split by id: to get individual POI blocks roughly
  const poiBlocks = content.split(/id:\s*"/);
  poiBlocks.shift(); // remove everything before the first id:

  poiBlocks.forEach(block => {
    const idMatch = block.match(/^([^"]+)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    // Search for the end of the object - this is tricky because of nested objects
    // but usually these files have a consistent structure.
    // Let's look for descriptionAdvanced and check for en key
    
    const hasDescAdv = block.includes('descriptionAdvanced:');
    let missingEn = true;
    
    if (hasDescAdv) {
      // Find the block for descriptionAdvanced
      const descMatch = block.match(/descriptionAdvanced:\s*\{([\s\S]*?)\}/);
      if (descMatch && descMatch[1].includes('en: "') && !descMatch[1].includes('en: ""')) {
        missingEn = false;
      }
    }
    
    if (missingEn) {
      results.push({ id, file });
    }
  });
});

console.log(JSON.stringify(results, null, 2));
