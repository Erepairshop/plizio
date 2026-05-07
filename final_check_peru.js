
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

files.forEach(file => {
  const fullPath = path.join('/mnt/c/Users/User/plizio-repo', file);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  const poiBlocks = content.split(/id:\s*"/).slice(1);
  
  console.log(`--- ${file} (${poiBlocks.length} POIs) ---`);
  poiBlocks.forEach(block => {
    const id = block.split('"')[0];
    const hasEn = /descriptionAdvanced:\s*{[^}]*en:\s*"[^"]+"/.test(block);
    if (!hasEn) {
      console.log(`  [MISSING] ${id}`);
    }
  });
});
