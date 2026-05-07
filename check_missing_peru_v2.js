
import fs from 'fs';
import path from 'path';

const files = [
  'lib/visualLab/data/poiExtraPeruCitiesV2.ts',
  'lib/visualLab/data/poiExtraPeruEconomicV2.ts',
  'lib/visualLab/data/poiExtraPeruLandmarksV2.ts',
  'lib/visualLab/data/poiExtraPeruLifeV2.ts',
  'lib/visualLab/data/poiExtraPeruNatureV2.ts',
  'lib/visualLab/data/poiExtraPeruReliefV2.ts'
];

const results = [];

files.forEach(file => {
  const fullPath = path.join('/mnt/c/Users/User/plizio-repo', file);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  
  // Use a more robust split to isolate each POI object
  const poiBlocks = content.split(/id:\s*"/).slice(1);
  poiBlocks.forEach(block => {
    const idMatch = block.match(/^([^"]+)"/);
    if (!idMatch) return;
    const id = idMatch[1];
    
    // Check if descriptionAdvanced contains en: "..." with content
    const enDescMatch = block.match(/descriptionAdvanced:\s*{[^}]*en:\s*"([^"]*)"/);
    const hasContent = enDescMatch && enDescMatch[1].trim().length > 0;
    
    if (!hasContent) {
      results.push({ id, file });
    }
  });
});

console.log(JSON.stringify(results, null, 2));
console.log(`Total missing: ${results.length}`);
