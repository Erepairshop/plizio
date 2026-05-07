
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
  if (!fs.existsSync(fullPath)) {
    console.log(`File NOT FOUND: ${file}`);
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const poiBlocks = content.split(/id:\s*"/).slice(1);
  console.log(`File: ${file}, POIs found: ${poiBlocks.length}`);
  
  poiBlocks.slice(0, 3).forEach(block => {
      const id = block.split('"')[0];
      const enDescMatch = block.match(/descriptionAdvanced:\s*{[^}]*en:\s*"([^"]*)"/);
      console.log(`  - ID: ${id}, hasEn: ${enDescMatch && enDescMatch[1].length > 0}`);
  });
});
