
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
  
  // Simple regex to find IDs and check descriptionAdvanced.en
  // This is a bit rough but should work for identifying missing content
  const poiBlocks = content.split(/id:\s*"/).slice(1);
  poiBlocks.forEach(block => {
    const id = block.split('"')[0];
    const hasEnDesc = /descriptionAdvanced:\s*{[^}]*en:\s*"[^"]+"/.test(block);
    if (!hasEnDesc) {
      results.push({ id, file });
    }
  });
});

console.log(JSON.stringify(results, null, 2));
