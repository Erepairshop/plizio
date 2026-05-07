
import fs from 'fs';
import path from 'path';

const files = [
  'lib/visualLab/data/poiExtraArgentinaCitiesV2.ts',
  'lib/visualLab/data/poiExtraArgentinaEconomicV2.ts',
  'lib/visualLab/data/poiExtraArgentinaHistoryV2.ts',
  'lib/visualLab/data/poiExtraArgentinaLandmarksV2.ts',
  'lib/visualLab/data/poiExtraArgentinaLifeV2.ts',
  'lib/visualLab/data/poiExtraArgentinaNatureV2.ts',
  'lib/visualLab/data/poiExtraArgentinaReliefV2.ts'
];

const poisToUpdate = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Simple regex to find POI objects and their IDs
  // This is a bit rough but should work for this specific structure
  const poiMatches = content.matchAll(/id:\s*"(.*?)"[\s\S]*?(descriptionAdvanced:\s*\{[\s\S]*?en:\s*"(.*?)"|(?!\bdescriptionAdvanced\b))/g);
  
  // Actually, let's use a better approach: find all IDs, then check if they have descriptionAdvanced.en
  const allIds = [...content.matchAll(/id:\s*"(.*?)"/g)].map(m => m[1]);
  
  for (const id of allIds) {
    const poiRegex = new RegExp(`id:\\s*"${id}"[\\s\\S]*?descriptionAdvanced:\\s*\\{[\\s\\S]*?en:\\s*"(.*?)"`, 'g');
    const match = poiRegex.exec(content);
    if (!match || match[1] === '') {
      poisToUpdate.push({ id, file });
    }
  }
}

console.log(JSON.stringify(poisToUpdate, null, 2));
