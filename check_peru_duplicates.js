
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

const descriptions = new Map();

files.forEach(file => {
  const fullPath = path.join('/mnt/c/Users/User/plizio-repo', file);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  const poiBlocks = content.split(/id:\s*"/).slice(1);
  
  poiBlocks.forEach(block => {
    const id = block.split('"')[0];
    const enDescMatch = block.match(/descriptionAdvanced:\s*{[^}]*en:\s*"([^"]*)"/);
    if (enDescMatch) {
      const desc = enDescMatch[1].trim();
      if (descriptions.has(desc)) {
        console.log(`DUPLICATE DESC: ${id} and ${descriptions.get(desc)}`);
      } else {
        descriptions.set(desc, id);
      }
    }
  });
});
