
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
  
  console.log(`--- ${file} ---`);
  poiBlocks.slice(0, 2).forEach(block => {
    const id = block.split('"')[0];
    const enDescMatch = block.match(/descriptionAdvanced:\s*{[^}]*en:\s*"([^"]*)"/);
    const enDesc = enDescMatch ? enDescMatch[1].substring(0, 50) + "..." : "MISSING";
    console.log(`ID: ${id}, Desc: ${enDesc}`);
  });
});
